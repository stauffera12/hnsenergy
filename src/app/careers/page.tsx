import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Introduce from '../components/Introduce';
import History from '../components/History';
import Banner from '../components/Banner';
import ScrollTop from '../components/ScrollTop';

const careers = () => {
  return (
    <div>
      <Header />
      <Banner firstTitle='CAREERS' image='/extra.png' />
      <div className='pt-[100px] bg-white max-sm:pt-[20px]'>
      <History
          firstTitle='APPLY NOW TO JOIN THE TEAM!'
          content=' Become a flagbearer of change and success. H&S  has proudly employed more than 1,000 professional trained personnel seamlessly powering our growth with operational excellence. Our long-standing connections to leading oil and petroleum companies in the global arena has allowed us to cultivate an exceptional organizational culture, upheld by our values of integrity, strength, and growth. We operate in more than 100 locations in Sacramento, Los Angeles, Orange, and San Bernardino Counties, and are continuing to expand. If you are interested in becoming a part of our journey, apply now!'
          image='careers.png' buttonA='Apply Now' />
      </div>
      <Footer />
      <ScrollTop/>
    </div>
  );
}

export default careers;
