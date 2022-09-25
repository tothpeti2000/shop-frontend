import Categories from "../components/category/Categories";
import Banner from "../components/home/Banner";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Banner />
      <Categories />
    </Layout>
  );
};

export default HomePage;
