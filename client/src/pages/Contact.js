import React from "react";
import Navigation from "../components/nav/Navigation";
import PageLocation from "../components/utils/PageLocation";
import ContactForm from "../components/Contact";
import Footer from "../components/footer/Footer";

const Contact = () => {
  return (
    <div>
      <Navigation />
      <PageLocation value={["HOME", "-/-", "CONTACT"]} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
