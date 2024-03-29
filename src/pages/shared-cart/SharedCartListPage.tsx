import { Box, Flex, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useGetSharedCarts } from "../../api";
import { useErrorHandler } from "../../api/client";
import Layout from "../../components/common/Layout";
import Loading from "../../components/common/Loading";
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
  const { handleError } = useErrorHandler();

  useEffect(() => {
    connection.on("UserJoinedCart", async ({ cartId, message }) => {
      showInfo(message);
      await refetch();
    });
  });

  return (
    <Layout>
      <Flex p={10}>
        <Box flex={2}>
          <Heading mb={10}>My shared carts</Heading>
          <Loading isLoading={isLoading}>
            {data?.carts && <SharedCartList carts={data.carts} />}
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
