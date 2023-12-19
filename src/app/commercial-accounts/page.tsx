"use client"
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import { motion } from 'framer-motion';
import ScrollTop from '../components/ScrollTop';

const CommercialAccounts = () => {
  return (
    <>
      <Header />
      <Banner firstTitle='GREAT FUEL SAVINGS AVAILABLE FOR YOUR BUSINESS VEHICLES' image='/commercial.png' />
      <div className='flex justify-center py-20 bg-white max-sm:pt-[40px] max-sm:pb-[20px]  '>
        <div className='bg-white w-[85%] max-sm:px-[20px] max-sm:w-full flex gap-[30px] max-sm:flex-col'>
          <motion.div
            className='text-[#0e0e0e] text-[14px] w-[50%] max-sm:w-full'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-lg mb-4">
              Unlock substantial fuel savings for your business vehicles by joining our
              Chevron commercial savings program. Whether your company operates a small or large vehicle fleet, you stand to benefit. We encourage you to explore how effortlessly you can leverage these cost savings, regardless of the size of your vehicle fleet.
            </p>
            <p className="text-lg mb-4">
              Enrolling in our program not only ensures savings on fuel purchases at our stations but also provides the convenience of
              online monitoring to detect and prevent fraudulent activities.
            </p>
            <p className="text-lg mb-4">
              A notable advantage is that your business will start enjoying fuel savings from the very first gallon purchased under this program. Unlike other programs that incrementally increase savings as you purchase more fuel, our program guarantees full savings right from the initial gallon.
            </p>
            <p className="text-lg mb-4">
              H&S Energy Products, LLC boasts a comprehensive network of Chevron and Texaco branded stations across California, spanning from San Diego in the south to Redding in northern California.
            </p>
            <p className="text-lg mb-4">
              We take pride in offering premium Chevron and Texaco fuels with Techron, providing your business with significant savings.
            </p>
            <p className="text-lg mb-4">
              Let&apos;s explore how you can swiftly enroll in this program and efficiently cut down your company’s fuel purchase costs. Simply share your contact information with us at
              <a href="mailto:commercial@hasoil.com" className="text-[#af272f]"> commercial@hasoil.com</a>, and we&apos;ll promptly assist you in the enrollment process.
            </p>
          </motion.div>
          <div className='w-[50%] max-sm:w-full' >
            <motion.img
              src="commercial.png"
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
      <Footer />
      <ScrollTop/>
    </>
  );
}

export default CommercialAccounts;
