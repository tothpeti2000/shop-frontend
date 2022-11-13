import { useEffect } from "react";
import Layout from "../../components/Layout";
import useFeedback from "../../hooks/useFeedback";
import useSharedCart from "../../hooks/useSharedCart";

const SharedCartPage = () => {
  const { connection } = useSharedCart();
  const { showInfo } = useFeedback();

  useEffect(() => {
    connection.on("UserJoinedCart", (message) => {
      showInfo(message);
    });

    connection.on("ItemAdded", (message) => {
      showInfo(message);
    });
  });

  return (
    <Layout>
      <h1>Hello World!</h1>
    </Layout>
  );
};

export default SharedCartPage;
