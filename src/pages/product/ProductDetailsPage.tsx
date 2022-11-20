import Layout from "../../components/Layout";
import ProductDetails from "../../components/products/details/ProductDetails";
import { ToggleProvider } from "../../context/ToggleContext";

const ProductDetailsPage = () => {
  return (
    <Layout>
      <ToggleProvider>
        <ProductDetails />
      </ToggleProvider>
    </Layout>
  );
};

export default ProductDetailsPage;
