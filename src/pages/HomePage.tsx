import Categories from "../components/home/Categories";
import Banner from "../components/home/Banner";
import Layout from "../components/common/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Banner />
      <Categories />
    </Layout>
  );
};

export default HomePage;
