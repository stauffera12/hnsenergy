"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { bannerData } from '../data/banner';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { motion } from 'framer-motion';

const SlideBanner = () => {
    return (
        <div>
            <div className="relative w-full h-[100vh] max-sm:h-[50vh] " >
                <Swiper
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
                    className=' relative z-20'
                >
                    {bannerData.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <motion.div
                                className='flex items-center justify-center w-full max-sm:h-[50vh] h-screen cursor-grab'
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                    backgroundSize: 'cover',
                                }}
                                initial={{ opacity: 0, scale: 1.2 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 7, ease: "easeInOut" }}
                            >
                                <motion.div
                                    initial={{ translateY: 100 }}
                                    animate={{ translateY: 0 }}
                                    transition={{ duration: 0.5 }}
                                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className='h-screen max-sm:h-[50vh] w-full pt-[100px] max-sm:pt-0 flex justify-center'>
                                    <div
                                        className=' justify-center items-center p-[30px] max-sm:w-full text-white text-center flex flex-col gap-[20px] bg-opacity-70 rounded-lg'
                                    >
                                        <h1 className='text-[50px] max-sm:text-[30px] uppercase font-bold'
                                            style={{
                                                textShadow: '#000000 5px 0px 0px',
                                            }}>
                                            {slide.title}
                                        </h1>
                                        <p className='text-[14px] font-bold w-[50%] max-sm:w-[100%]'
                                            style={{
                                                textShadow: '#000000 3px 0px 0px',
                                            }}>
                                            {slide.content}
                                        </p>
                                        <a href="https://pwrmarket.com" target="_blank" >
                                            <button className='bg-[#af272f] text-[14px] text-white p-3 py-3 px-10 font-bold rounded-[4px]  text-center cursor-pointer uppercase'>
                                                Explore Now
                                            </button>
                                        </a>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='flex justify-center -top-[60px] relative z-10'>
                <div className='bg-white grid grid-cols-7 max-sm:grid-cols-2 items-center w-[80%] p-[10px] rounded-[10px] shadow-xl '>
                    <div className="h-[5vh] overflow-hidden">
                        <img src="/header/charge.png" alt="" className="h-[4vh] w-[100%] object-cover transform transition-transform duration-500 hover:scale-125 hover:duration-700" />
                    </div>
                    <div className='overflow-hidden pl-[100px]'>
                        <img src="/header/two.png" alt="" className=" object-cover transform  duration-500 hover:scale-125 hover:duration-700" />
                    </div>
                    <div className='overflow-hidden rounded-[10px] pl-[50px]'>
                        <img src="/header/chevron.png" alt="" className="object-cover transform transition-transform duration-500 hover:scale-125 hover:duration-700" />
                    </div>
                    <div className='w-[50%] overflow-hidden rounded-[100px]'>
                        <img src="/header/gaso.png" alt="" className="w-[100%] object-cover transform transition-transform duration-500 hover:scale-125 hover:duration-700" />
                    </div>
                    <div className='ml-[-50px] overflow-hidden'>
                        <img src="/header/em logo.jpg" alt="" className="object-cover transform transition-transform duration-500 hover:scale-125 hover:duration-700" />
                    </div>
                    <div className='pl-[50px] overflow-hidden'>
                        <img src="/header/one.png" alt="" className=" object-cover transform transition-transform duration-500 hover:scale-125 hover:duration-700" />
                    </div>
                    <div className=' h-[5vh] w-[140%] pr-[90px] overflow-hidden'>
                        <img src="/header/pearson.png" alt="" className="h-[4vh] object-cover transform transition-transform duration-500 hover:scale-125 hover:duration-700" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideBanner;
