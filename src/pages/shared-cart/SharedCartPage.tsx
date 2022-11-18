import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useGetSharedCartItems } from "../../api";
import { useErrorHandler } from "../../api/client";
import { formatPrice, getTotalPrice } from "../../components/cart/utils";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import RecentActionList from "../../components/shared-cart/details/RecentActionList";
import SharedCartItemList from "../../components/shared-cart/details/SharedCartItemList";
import { useSharedCartContext } from "../../context/SharedCartContext";
import useFeedback from "../../hooks/useFeedback";
import useSharedCart from "../../hooks/useSharedCart";

const SharedCartPage = () => {
  const { id } = useParams();

  const { data, isLoading, refetch } = useGetSharedCartItems(id!, {
    query: {
      onSuccess: (data) => updateSharedCartItems(data.sharedCartItems!),
      onError: (err) => handleError(err.response),
    },
  });

  const { connection } = useSharedCart(id);
  const { updateSharedCartItems } = useSharedCartContext();

  const { showInfo } = useFeedback();
  const { handleError } = useErrorHandler();

  const [actions, setActions] = useState<string[]>([]);

  useEffect(() => {
    connection.on("UserJoinedCart", (message) => {
      showInfo(message);
    });

    connection.on("ItemAdded", async ({ message, cartId }) => {
      // We only care about actions of the cart we're currently watching the items of
      id === cartId && setActions((actions) => [...actions, message]);
      await refetch();
    });

    connection.on("ItemAmountUpdated", async ({ message, cartId }) => {
      id === cartId && setActions((actions) => [...actions, message]);
      await refetch();
    });

    connection.on("ItemDeleted", async ({ message, cartId }) => {
      id === cartId && setActions((actions) => [...actions, message]);
      await refetch();
    });
  });

  return (
    <Layout>
      <Loading isLoading={isLoading}>
        {data?.sharedCartItems && (
          <Box p={10}>
            <Flex justifyContent="space-between" alignItems="center" mb={10}>
              <Heading>{data.cartName}</Heading>

              <Flex alignItems="center">
                <Text fontSize="3xl" fontWeight="bold" mr={5}>
                  Total: {formatPrice(getTotalPrice(data.sharedCartItems))}
                </Text>

                <Link to={`/checkout/${id}`}>
                  <Button
                    colorScheme="teal"
                    rightIcon={<Icon as={FaCheckCircle} />}
                    size="lg"
                  >
                    Checkout
                  </Button>
                </Link>
              </Flex>
            </Flex>

            <Flex>
              <Box flex={3} mr={10}>
                <SharedCartItemList cartItems={data.sharedCartItems} />
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
