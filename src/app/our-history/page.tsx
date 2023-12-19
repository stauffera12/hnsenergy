import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import ScrollTop from '../components/ScrollTop';

const OurHistory = () => {
  return (
    <div>
      <Header />
      <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("our-history.png")', paddingBottom: '20px', color: 'white' }}>
      <Banner firstTitle='OUR HISTORY' image='/our-history.png' />
      </div>
      <div className='flex justify-center pt-[20px] pb-[20px] bg-white'>
      <div className='bg-white w-[85%]'>
        <p className='text-4xl font-bold text-black pb-[40px]'>A JOURNEY TO SUCCESS</p>
        <div className="font-sans text-base leading-6 text-gray-700">
          <p className="mb-4">Our vision has guided H&amp;S Energy Products, LLC to foster business growth by strategically expanding its services to become a major retail gasoline and convenience store retailer throughout California. We began our journey in 1996 with the leadership of Sal Hassan, who was then joined by Victor Hassan. We built our first station in Cypress, CA with the vision to provide the best customer service along with the cleanest and safest convenience stores you can visit. Since then, we have built and acquired a great number of stores under the Chevron, Texaco, Shell, Extra Mile brand, and our own brand, Power Market. Currently, we are headquartered in Orange, California, and provide excellent operational facilities at over 100+ locations throughout California with a large team of seasoned personnel.</p>
          <p className="mb-4">We operate retail gasoline service stations along with convenience and grocery stores under the well-recognized brands, Extra Mile and Power Market. Our auto-repair centers are manned by mechanical experts who believe in creating memorable customer experiences by responsibly finding solutions for you. To become a part of leading the electric revolution and adapting to more electric vehicles coming to market, we have recently partnered with ChargePoint to provide EV charging for drivers at our stations</p>
          <p className="mb-4">Our companies’ vision has always been to explore greater and more sustainable avenues of growth. With unwavering dedication, we commit to sustaining our progress in the ever-evolving energy landscape with continuous technological innovation and operational expertise.</p>
        </div>
      </div>
      </div>
      <Footer />
      <ScrollTop/>
    </div>
  );
}

export default OurHistory;
