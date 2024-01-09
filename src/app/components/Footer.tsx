"use client"
import Link from 'next/link';
import React from 'react'
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail, MdPhoneIphone } from 'react-icons/md';

const Footer = () => {
    const makeCall = () => {
        window.location.href = "tel:(714) 761-5426";
    };
    const sendEmail = () => {
        window.location.href = "info@hnsenergyproducts.com";
    };
    return (
        <div className=' bg-[#102c4e]'>
            <div className='w-[100%]  flex justify-center text-[13px]'>
                <div className='w-[85%] py-[55px] grid grid-cols-4  max-sm:grid-cols-1 text-white gap-[20px]'>
                    <div className=' flex flex-col max-sm:text-center '>
                        <Link href={'/'} className='max-sm:justify-center flex' >
                            <img src="logofooter.png" alt="" className='h-[20vh] w-[60%] pb-[20px]' />
                        </Link>
                        <span className=' leading-[24px]'>H&S Energy Products, LLC – leading the industry as</span>
                        <span className=' leading-[24px]'>a major gasoline and convenience store retailer in California with an expanding footprint throughout the West Coast.</span>
                    </div>
                    <div className='flex flex-col gap-[30px] max-sm:text-center'>
                        <span className='text-[18px] font-bold'>INFO</span>
                        <div className='flex flex-col gap-[10px] '>
                            <div className='flex gap-[15px] max-sm:justify-center '>
                                <FaMapMarkerAlt className='max-sm:hidden' />
                                <div className='flex flex-col justify-center'>
                                    <div className='flex items-center max-sm:justify-center gap-[10px]'>
                                        <FaMapMarkerAlt className='lg:hidden ' />
                                        <span >ADDRESS</span>
                                    </div>
                                    <span>2860 N.Santigo Blvd, Orange, CA 92867</span>
                                </div>
                            </div>
                            <div className='flex gap-[15px] max-sm:justify-center'>
                                <MdPhoneIphone className='max-sm:hidden' />
                                <div className='flex flex-col justify-center'>
                                    <div className='flex items-center max-sm:justify-center gap-[10px]'>
                                        <MdPhoneIphone className='lg:hidden ' />
                                        <span >CALL US 24/7</span>
                                    </div>
                                    <div onClick={makeCall} className='text-[#b9b9b9] cursor-pointer'>(714) 761 5426</div>
                                </div>
                            </div>
                            <div className='flex gap-[15px] max-sm:justify-center max-sm:text-center'>
                                <MdEmail className='max-sm:hidden' />
                                <div className='flex flex-col justify-center'>
                                    <div className='flex items-center max-sm:justify-center gap-[10px]'>
                                        <MdEmail className='lg:hidden ' />
                                        <span >Email</span>
                                    </div>
                                    <div onClick={sendEmail} className='text-[#b9b9b9] cursor-pointer'>info@hnsenergyproducts.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[30px] max-sm:text-center '>
                        <span className='text-[18px] font-bold'>QUICK LINKS</span>
                        <div className='flex flex-col gap-[5px] '>
                            <Link href={'/'} className=' hover:text-gray-400 cursor-pointer'>Home</Link>
                            <Link href={'/our-history'} className=' hover:text-gray-400 cursor-pointer'>Our History</Link>
                            <a href="https://pwrmarket.com" target="_blank" className="hover:text-gray-400 cursor-pointer">Power Market</a>
                            <Link href={'/commercial-accounts'} className=' hover:text-gray-400 cursor-pointer'>Commercial Accounts</Link>
                            <Link href={'/alternative-fuel'} className=' hover:text-gray-400 cursor-pointer'>Alternative Fuel</Link>
                            <Link href={'/careers'} className=' hover:text-gray-400 cursor-pointer'>Careers</Link>
                            <Link href={'/contact-us'} className=' hover:text-gray-400 cursor-pointer'>Contact Us</Link>
                            <Link href={'/locations'} className=' hover:text-gray-400 cursor-pointer'>Locations</Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[30px] max-sm:justify-center max-sm:text-center max-sm:items-center'>
                        <span className='text-[18px] font-bold'>FOLLOW US</span>
                        <div className='flex gap-[20px] items-center'>
                            <a href="https://www.linkedin.com/company/h-s-energy-llc/?viewAsMember=true" target="https://www.linkedin.com/company/h-s-energy-llc" rel="noopener noreferrer" className="text-white hover:text-[#9b9b9b] transition-colors duration-300">
                                <BiLogoLinkedin size={22} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[100%] flex justify-center border-t-[1px] border-[#777777]'>
                <div className='w-[45%] gap-[10px] max-sm:w-full flex text-[13px] justify-between max-sm:flex-wrap px-[20px] max-sm:gap-[10px] py-4'>
                    <span className='text-[#85a3c8]'>Legal</span>
                    <span className='border-l-[1px] border-[#777777]'></span>
                    <Link href={'/privacy-policy'}>
                        <span className='text-[#b9b9b9]'>Privacy Policy </span>
                    </Link>
                    <span className='border-l-[1px] border-[#777777]'></span>
                    <Link href={'/terms-conditions'}>
                        <span className='text-[#b9b9b9] cursor-pointer'> Terms & Conditions</span>
                    </Link>
                    <span className='border-l-[1px] border-[#777777] max-sm:hidden'></span>
                    <span className='text-[#85a3c8]'>All rights reserved Copyright 2023</span>
                </div>
            </div>
        </div>
    )
}

export default Footer