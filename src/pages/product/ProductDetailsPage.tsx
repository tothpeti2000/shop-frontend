import Layout from "../../components/Layout";
import ProductDetails from "../../components/products/details/ProductDetails";
import { CartProvider } from "../../context/CartContext";

const ProductDetailsPage = () => {
  return (
    <Layout>
      <CartProvider>
        <ProductDetails />
      </CartProvider>
    </Layout>
  );
};

export default ProductDetailsPage;
