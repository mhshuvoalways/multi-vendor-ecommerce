import React from "react";
import Navigation from "../components/Navigations/Navigation";
import PageLocation from "../components/PageLocation";
import ContactForm from "../components/Contact";
import Footer from "../components/Footer";

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
