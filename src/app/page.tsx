"use client"
import Image from 'next/image'
import Header from './components/Header'
import Footer from './components/Footer'
import ContactMap from './components/ContactMap'
import History from './components/History'
import OurServices from './components/OurServices'
import Become from './components/Become'
import SlideBanner from './components/SlideBanner'
import Link from 'next/link'
import { motion } from 'framer-motion';
import ScrollTop from './components/ScrollTop'

export default function Home() {
  return (
    <div className='bg-white'>
      <Header />
      <span className=' pt-[80px] max-sm:pt-0 block'>
        <SlideBanner />
        <OurServices />
        <Become />
        <div className='bg-white  flex flex-col gap-[30px] '>
          <div className='flex max-sm:flex-col-reverse gap-[30px] p-[100px] max-sm:p-[20px] flex-row-reverse'>
            <  div className='text-[#0e0e0e] text-[14px] w-[50%] max-sm:w-[100%]'>
              <h1 className='text-[42px] max-sm:text-[30px] font-bold pb-[30px] max-sm:pt-[20px]'>A JOURNEY TO SUCCESS</h1>
              <p className='text-[14px] mb-4 leading-[28px]'>Our vision has guided H&S Energy Products, LLC to foster business growth by strategically expanding its services to become a major retail gasoline and convenience store retailer throughout California. We began our journey in 1996 with the leadership of Sal Hassan, who was then joined by Victor Hassan. We built our first station in Cypress, CA with the vision to provide the best customer service along with the cleanest and safest convenience stores you can visit.
              </p>
              <p className='text-[14px] mb-4 leading-[28px]'>
                Since then, we have built and acquired a great number of stores under the Chevron, Texaco, Shell, Extra Mile brand, and our own brand, Power Market. Currently, we are headquartered in Orange, California, and provide excellent operational facilities at over 100+ locations throughout California with a large team of seasoned personnel.
              </p>
              <Link href={'/our-history'}>
                <button className='bg-[#123157] text-white p-3 font-bold rounded-[4px] py-4 px-10 text-center cursor-pointer uppercase'>explore now</button>
              </Link>
            </div>
            <div className='w-[50%] flex max-sm:w-[100%] pl-[40px] max-sm:pl-0'>
              <img src="/red.png" alt="" className='' />
              <motion.img
                src='/chevron.png'
                alt=""
                className='h-[65vh] relative right-[150px] top-[20px] max-sm:w-[65%] object-cover'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>
        <ContactMap />
      </span>
      <Footer />
      <ScrollTop/>
    </div>
  )
}
