import { Box, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSharedCartItems } from "../../api";
import { useErrorHandler } from "../../api/client";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import RecentActionList from "../../components/shared-cart/details/RecentActionList";
import SharedCartItemList from "../../components/shared-cart/details/SharedCartItemList";
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

  const [actions, setActions] = useState<string[]>([]);

  useEffect(() => {
    connection.on("UserJoinedCart", (message) => {
      showInfo(message);
    });

    connection.on("ItemAdded", async (message) => {
      setActions((actions) => [...actions, message]);
      await refetch();
    });

    connection.on("ItemAmountUpdated", async (message) => {
      setActions((actions) => [...actions, message]);
      await refetch();
    });

    connection.on("ItemDeleted", async (message) => {
      setActions((actions) => [...actions, message]);
      await refetch();
    });
  });

  return (
    <Layout>
      <Loading isLoading={isLoading}>
        <Box p={10}>
          <Heading mb={10}>{data?.cartName}</Heading>

          <Flex>
            <Box flex={3} mr={10}>
              {data?.sharedCartItems && (
                <SharedCartItemList cartItems={data.sharedCartItems} />
              )}
            </Box>

            <Box flex={1}>
              <RecentActionList actions={actions} />
            </Box>
          </Flex>
        </Box>
      </Loading>
    </Layout>
  );
};

export default SharedCartPage;
