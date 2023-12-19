import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Introduce from '../components/Introduce';
import History from '../components/History';
import Banner from '../components/Banner';
import ScrollTop from '../components/ScrollTop';

const AlternativeFuel = () => {
  return (
    <div>
      <Header />
      <Banner firstTitle='POWERING CHANGE WITH ENERGY TRANSITION' image='/alternative/alternativebanner.png' />
      <div className='bg-white  flex flex-col gap-[30px]'>
       <div className='p-[100px] max-sm:p-[20px]'>
       <Introduce
          firstTitle='ALTERNATIVE FUELS'
          content='Renewable Energy is the future of our world.
            As the global agenda shifts towards bringing a halt to climate change with a coordinated shift towards environmentally-friendly and sustainable energy resources, so does our company’s.'
          image='/alternative/alternatefuel.png' />
       </div>
         <History
          italicTitle='EV CHARGING'
          content=' As leaders of change, we believe in an electric revolution of smart charging automobiles and vehicles. To live up to our visions, H&S Energy Products, LLC has partnered with ChargePoint to promote electric mobility by installing premium Electric Vehicle charging units on selected refueling stations.'
          image='/alternative/evcharging.png' />
        <div className='w-full'>
          <img src="alternative/dsc.png" alt="" className='w-full h-[50vh] object-cover' />
        </div>
       <div className='p-[100px] max-sm:p-[20px]'>
       <Introduce
          italicTitle='FLEX FUEL'
          content=' In our dedication towards fostering sustainability, we have made available E85 Ethanol Flex Fuel – a biofuel made by fermentation and distillation of organic products produced on American farms. We believe this combustible ethanol is a beneficial renewable resource, providing ample horsepower to one day change the American transport system.
          Drive clean for safe tomorrow!'
          image='/alternative/flexfuel.png' />
       </div>
      </div>
      <Footer />
      <ScrollTop/>
    </div>
  );
}

export default AlternativeFuel;
