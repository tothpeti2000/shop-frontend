import { Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetSharedCartItems } from "../../api";
import { useErrorHandler } from "../../api/client";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import SharedCartItems from "../../components/shared-cart/details/SharedCartItems";
import useFeedback from "../../hooks/useFeedback";
import useSharedCart from "../../hooks/useSharedCart";

const SharedCartPage = () => {
  const { id } = useParams();

  const { data, isLoading, refetch } = useGetSharedCartItems(id!, {
    query: { onError: (err) => handleError(err.response) },
  });

  const { connection } = useSharedCart();

  const { showInfo } = useFeedback();
  const { handleError } = useErrorHandler();

  useEffect(() => {
    connection.on("UserJoinedCart", (message) => {
      showInfo(message);
    });

    connection.on("ItemAdded", async (message) => {
      showInfo(message);
      await refetch();
    });
  });

  return (
    <Layout>
      <Loading isLoading={isLoading}>
        {data?.sharedCartItems && data.sharedCartItems.length > 0 ? (
          <SharedCartItems cartItems={data.sharedCartItems} />
        ) : (
          <Text>There are no items in the cart yet</Text>
        )}
      </Loading>
    </Layout>
  );
};

export default SharedCartPage;
