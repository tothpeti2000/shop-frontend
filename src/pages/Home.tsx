import Banner from "../components/Banner";
import Categories from "../components/categories/Categories";
import ContactForm from "../components/ContactForm";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";

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
