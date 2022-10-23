import { Box } from "@chakra-ui/react";
import Checkout from "../../components/checkout/Checkout";
import Layout from "../../components/Layout";

const CheckoutPage = () => {
  return (
    <Layout>
      <Box px="200px" py={10}>
        <Checkout />
      </Box>
    </Layout>
  );
};

export default CheckoutPage;
