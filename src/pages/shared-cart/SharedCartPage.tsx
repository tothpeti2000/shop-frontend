import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSharedCartDetails } from "../../api";
import { useErrorHandler } from "../../api/client";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import SharedCartDetails from "../../components/shared-cart/details/SharedCartDetails";
import { useSharedCartContext } from "../../context/SharedCartContext";
import useFeedback from "../../hooks/useFeedback";
import useSharedCart from "../../hooks/useSharedCart";
import { SharedCartStatus } from "../../models";

const SharedCartPage = () => {
  const { id } = useParams();

  const { data, isLoading, refetch } = useGetSharedCartDetails(id!, {
    query: {
      onSuccess: (data) => {
        updateSharedCartItems(data.sharedCartItems!);
        setStatus(data.status!);
      },
      onError: (err) => handleError(err.response),
    },
  });

  const { connection } = useSharedCart(id);
  const { updateSharedCartItems } = useSharedCartContext();

  const { showInfo } = useFeedback();
  const { handleError } = useErrorHandler();

  const [actions, setActions] = useState<string[]>([]);
  const [status, setStatus] = useState<SharedCartStatus>(
    SharedCartStatus.Active
  );

  useEffect(() => {
    connection.on("UserJoinedCart", ({ cartId, message }) => {
      showInfo(message);
    });

    connection.on("ItemAdded", async ({ cartId, message }) => {
      // We only care about actions of the cart we're currently watching the items of
      if (id === cartId) {
        setActions((actions) => [...actions, message]);
        await refetch();
      }
    });

    connection.on("ItemAmountUpdated", async ({ cartId, message }) => {
      if (id === cartId) {
        setActions((actions) => [...actions, message]);
        await refetch();
      }
    });

    connection.on("ItemDeleted", async ({ cartId, message }) => {
      if (id === cartId) {
        setActions((actions) => [...actions, message]);
        await refetch();
      }
    });

    connection.on("CheckoutStarted", (cartId) => {
      if (id === cartId) {
        setStatus(SharedCartStatus.CheckoutInProgress);
        showInfo("The checkout process has started");
      }
    });

    connection.on("CheckoutAborted", (cartId) => {
      if (id === cartId) {
        setStatus(SharedCartStatus.Active);
        showInfo("The checkout process has been cancelled");
      }
    });

    connection.on("OrderPlaced", (cartId) => {
      if (id === cartId) {
        setStatus(SharedCartStatus.Completed);
        showInfo("The order has been placed successfully");
      }
    });
  });

  return (
    <Layout>
      <Loading isLoading={isLoading}>
        {data && (
          <SharedCartDetails
            sharedCartId={id!}
            details={data}
            status={status}
            actions={actions}
          />
        )}
      </Loading>
    </Layout>
  );
};

export default SharedCartPage;
