import React from "react";
import Navigation from "../components/Navigations/Navigation";
import ContactForm from "../components/Contact";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navigation />
      <nav className="bg-gray-100 py-6 rounded mb-10">
        <ol className="flex justify-center">
          <li>HOME</li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>CONTACT</li>
        </ol>
      </nav>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
