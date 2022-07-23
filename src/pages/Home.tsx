import Banner from "../components/home/Banner";
import Categories from "../components/categories/Categories";
import ContactForm from "../components/home/ContactForm";
import Footer from "../components/common/footer/Footer";
import NavBar from "../components/common/navBar/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Categories />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
