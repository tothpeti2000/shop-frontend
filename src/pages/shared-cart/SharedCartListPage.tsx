import { Box, Flex, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useGetSharedCarts } from "../../api";
import { useErrorHandler } from "../../api/client";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import CreateJoinSharedCart from "../../components/shared-cart/list/CreateJoinSharedCart";
import SharedCartList from "../../components/shared-cart/list/SharedCartList";
import { ToggleProvider } from "../../context/ToggleContext";
import useFeedback from "../../hooks/useFeedback";
import useSharedCart from "../../hooks/useSharedCart";

const SharedCartListPage = () => {
  const { data, isLoading, refetch } = useGetSharedCarts({
    query: { onError: (err) => handleError(err.response) },
  });

  const { connection } = useSharedCart();
  const { showInfo } = useFeedback();

  useEffect(() => {
    connection.on("UserJoinedCart", async (message) => {
      showInfo(message);
      await refetch();
    });

    connection.on("ItemAdded", (message) => {
      showInfo(message);
    });
  });

  const { handleError } = useErrorHandler();

  return (
    <Layout>
      <Flex p={10}>
        <Box flex={2}>
          <Heading mb={10}>My shared carts</Heading>
          <Loading isLoading={isLoading}>
            {data?.carts && <SharedCartList carts={data?.carts} />}
          </Loading>
        </Box>

        <Box flex={1}>
          <ToggleProvider>
            <CreateJoinSharedCart />
          </ToggleProvider>
        </Box>
      </Flex>
    </Layout>
  );
};

export default SharedCartListPage;
