import React from 'react'
import ContactMap from '../components/ContactMap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'

const ContactUs = () => {
    return (
      <div>
        <Header/>
        <img src="contact-map.png" alt="" />
        <ContactMap/>
        <Footer/>
        <ScrollTop/>
      </div>
    )
  }
  
export default ContactUs
