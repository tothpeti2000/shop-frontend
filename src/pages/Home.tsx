import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories/Categories";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

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
