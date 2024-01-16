import React from "react";
import ContactMap from "../components/ContactMap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <main>
        <img src="contact-map.png" alt="contact Image" />
        <ContactMap />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default ContactUs;
