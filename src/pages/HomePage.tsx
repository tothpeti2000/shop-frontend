import Categories from "../components/categories/Categories";
import Footer from "../components/common/footer/Footer";
import NavBar from "../components/common/navBar/NavBar";
import Banner from "../components/home/Banner";
import ContactForm from "../components/home/ContactForm";

const HomePage = () => {
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

export default HomePage;
