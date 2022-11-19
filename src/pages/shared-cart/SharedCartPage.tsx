import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useGetSharedCartDetails } from "../../api";
import { useErrorHandler } from "../../api/client";
import { formatPrice, getTotalPrice } from "../../components/cart/utils";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import RecentActionList from "../../components/shared-cart/details/RecentActionList";
import SharedCartItemList from "../../components/shared-cart/details/SharedCartItemList";
import { useSharedCartContext } from "../../context/SharedCartContext";
import useFeedback from "../../hooks/useFeedback";
import useSharedCart from "../../hooks/useSharedCart";
import { SharedCartStatus } from "../../models";
import Placeholder from "./Placeholder";
import { getStatusDisplayName } from "./utils";

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
        {data?.sharedCartItems && (
          <Box p={10}>
            <Flex justifyContent="space-between" alignItems="center" mb={10}>
              <Heading>
                {data.cartName} - {getStatusDisplayName(status)}
              </Heading>

              <Flex alignItems="center">
                <Text fontSize="3xl" fontWeight="bold" mr={5}>
                  Total: {formatPrice(getTotalPrice(data.sharedCartItems))}
                </Text>

                <Link to={`/checkout/${id}`}>
                  <Button
                    colorScheme="teal"
                    rightIcon={<Icon as={FaCheckCircle} />}
                    size="lg"
                    disabled={status !== SharedCartStatus.Active}
                  >
                    Checkout
                  </Button>
                </Link>
              </Flex>
            </Flex>

            <Flex>
              <Box flex={3} mr={10} position="relative">
                <SharedCartItemList cartItems={data.sharedCartItems} />
                {status !== SharedCartStatus.Active && <Placeholder />}
              </Box>

              <Box flex={1}>
                <RecentActionList actions={actions} />
              </Box>
            </Flex>
          </Box>
        )}
      </Loading>
    </Layout>
  );
};

export default SharedCartPage;
