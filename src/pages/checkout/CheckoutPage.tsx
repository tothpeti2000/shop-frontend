import { Box } from "@chakra-ui/react";
import Checkout from "../../components/checkout/Checkout";
import Layout from "../../components/Layout";
import { StepperProvider } from "../../context/StepperContext";

const CheckoutPage = () => {
  return (
    <Layout>
      <Box px="200px" py={10}>
        <StepperProvider>
          <Checkout />
        </StepperProvider>
      </Box>
    </Layout>
  );
};

export default CheckoutPage;
