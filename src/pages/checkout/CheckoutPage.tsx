import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Checkout from "../../components/checkout/Checkout";
import SharedCheckout from "../../components/checkout/SharedCheckout";
import Layout from "../../components/common/Layout";
import { StepperProvider } from "../../context/StepperContext";

const CheckoutPage = () => {
  const { id } = useParams();

  return (
    <Layout>
      <Box px="200px" py={10}>
        <StepperProvider>
          {id ? <SharedCheckout sharedCartId={id} /> : <Checkout />}
        </StepperProvider>
      </Box>
    </Layout>
  );
};

export default CheckoutPage;
