import Link from 'next/link';
import React from 'react';

const Become = () => {
  return (
    <div style={{ backgroundImage: `url(${'/becom.png'})`, backgroundSize: 'cover' }}>
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className='flex flex-col pl-[100px] max-sm:pl-[50px] gap-[15px] text-white py-20' >
          <span className='text-[15px] font-medium tracking-[4.6px]'>H&S ENERGY PRODUCTS, LLC</span>
          <h1 className='text-[50px] font-bold max-sm:leading-[60px]'>BECOME FUTURISTIC</h1>
          <p className='text-[14px] font-medium w-[50%] tracking-[0.4px] leading-[24px]'>With competitively priced services, we proudly offer well-maintained service stations and conduct environmentally-safe operations to invest in a sustainable future.</p>
          <Link href={'/our-history'} >
          <button className='bg-[#af272f] text-[14px] text-white p-3 font-bold rounded-[4px] w-[15%] max-sm:w-[50%] text-center cursor-pointer uppercase'>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Become;
