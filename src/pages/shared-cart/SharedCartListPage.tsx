import { useGetSharedCarts } from "../../api";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import CreateSharedCartDialog from "../../components/shared-cart/CreateSharedCartDialog";
import SharedCartList from "../../components/shared-cart/SharedCartList";
import { ToggleProvider } from "../../context/ToggleContext";

const SharedCartListPage = () => {
  const { data, isLoading } = useGetSharedCarts();

  return (
    <Layout>
      <ToggleProvider>
        <Loading isLoading={isLoading}>
          <SharedCartList carts={data?.carts!} />
        </Loading>

        <CreateSharedCartDialog />
      </ToggleProvider>
    </Layout>
  );
};

export default SharedCartListPage;
