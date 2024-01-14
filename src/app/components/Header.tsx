"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoLinkedin, BiSearch } from 'react-icons/bi';
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import Data from '../locations/Data';
import { useRouter } from 'next/navigation';
import "../contact-us.css"

interface Store {
    storeId: string;
    lat: number;
    lng: number;
    fullAddress: string;
    brand: string;
    storeBrand: string;
    businessHours: string;
    address: string;
    city: string;
    state: string;
    county: string;
    zip: string;
    amazonLocker: string;
}

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);


    const handleOpen = () => {
        setShowMenu(!showMenu);
    };
    const [selected, setSelected] = useState(null);

    const handleClick = (link: any) => {
        setSelected(link === selected ? null : link);
    };
    const makeCall = () => {
        window.location.href = "tel:(714) 761-5426";
    };
    const sendEmail = () => {
        window.location.href = "info@hnsenergyproducts.com";
    };
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<Store[]>([]);
    const router = useRouter();
    const handleSearch = () => {
        const filteredStores: Store[] = Data.CategoryListData.features.filter(store => {
            const searchTermLower = searchTerm.toLowerCase();
            return (
                store.storeId.toLowerCase().includes(searchTermLower)
            );
        });
        setSearchResults(filteredStores);
        router.push(`/locations?search=${searchTerm}`);
    };
    const handleKeyPress = (e:any) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };
    
    return (
        <header className=' fixed w-[100%] z-50 max-sm:relative max-lg:relative'>
            <div className='flex'>
                <div className='flex gap-[20px] w-[85%] max-sm:w-[60%] max-lg:w-[70%] bg-[#102c4e] text-white pl-[110px] max-sm:pl-[20px] max-lg:pl-[40px] py-3'>
                    <span className='text-[14px]'>Follow Us:</span>
                    <div className='flex gap-[10px] items-center'>
                        <a href="https://www.linkedin.com/company/h-s-energy-llc/?viewAsMember=true" target="https://www.linkedin.com/company/h-s-energy-llc" rel="noopener noreferrer">
                            <BiLogoLinkedin size={20} />
                        </a>
                    </div>
                </div>
                <div className='w-[15%] max-sm:w-[40%] max-lg:w-[30%] bg-[#af272f] py-3 flex justify-between  items-center px-2 '>
                    <input  onKeyPress={handleKeyPress} onChange={(e) => setSearchTerm(e.target.value)} type="search" name="" id="searchInput" placeholder='Find a Station...' className=' outline-none w-[70%] ' style={{ background: 'none', border: 'none', color: 'white' }} />
                    <BiSearch onClick={handleSearch} size={15} className='cursor-pointer text-white' />
                </div>
            </div>
            <div className='bg-white'>
                <div className='w-[100%] justify-center flex '>
                    <div className=' w-[85%] max-sm:w-[90%] text-black flex text-[14px] text-left items-center justify-between gap-[30px] py-[20px] max-sm:pb-[20px] max-lg:pb-[20px] ' >
                        <Link href={'/'} >
                            <img src="/logo.png" alt="" className='max-sm:h-[75px]' />
                        </Link>
                        <div className='grid grid-cols-3 max-sm:hidden max-lg:hidden '>
                            <div className='flex gap-[15px]'>
                                <img src="/call.png" alt="" />
                                <div onClick={makeCall} className='flex flex-col justify-center cursor-pointer '>
                                    <span className=' font-normal'>Call Us</span>
                                    <span className=' font-bold'>(714) 761 5426</span>
                                </div>
                            </div>
                            <div className='flex gap-[15px]'>
                                <img src="/email.png" alt="" />
                                <div onClick={sendEmail} className='flex flex-col justify-center cursor-pointer'>
                                    <span className=' font-normal'>Email Address</span>
                                    <span className=' font-bold'>info@hnsenergyproducts.com</span>
                                </div>
                            </div>
                            <div className='flex gap-[15px]'>
                                <img src="/address.png" alt="" />
                                <div className='flex flex-col justify-center'>
                                    <span className=' font-normal'>Office Address</span>
                                    <span className=' font-bold'>2860 N.Santigo Blvd, Orange, CA 92867</span>
                                </div>
                            </div>
                        </div>
                        <HiOutlineBars3BottomLeft size={30} className='text-gray-500 lg:hidden' onClick={handleOpen} />
                        <div className={`fixed top-0 right-0 h-full w-full bg-[#af272f] z-50 transition-transform duration-300 ease-in-out transform ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
                            <div className=' flex flex-col text-start justify-start  py-4 gap-[30px] rounded-[7px] text-[13px] font-semibold bg-[#af272f] text-white'>
                                <div className='flex justify-end pr-[25px] pt-[10px]'>
                                    <button onClick={handleOpen} className=' bg-[#102c4e] rounded-full py-2 px-4 text-white text-2xl cursor-pointer'>X</button>
                                </div>
                                <div className='flex justify-center items-center pt-20'>
                                    <div className='w-[50%] flex flex-col text-start justify-start py-4 gap-[30px] rounded-[7px] text-[13px] font-semibold bg-[#af272f] text-white'>
                                        <Link href={'/'} className={`cursor-pointer ${selected === 'home' ? 'border-b-2 border-white' : ''}`} onClick={() => handleClick('home')}>
                                            Home
                                        </Link>
                                        <Link href={'/our-history'} className={`cursor-pointer ${selected === 'our-history' ? 'border-b-2 border-white' : ''}`} onClick={() => handleClick('our-history')}>
                                            Our History
                                        </Link>
                                        <a href="https://pwrmarket.com" target="_blank" className={`cursor-pointer ${selected === 'power-market' ? 'border-b-2 border-white' : ''}`} onClick={() => handleClick('power-market')}>
                                            Power Market
                                        </a>
                                        <Link href={'/commercial-accounts'} className={`cursor-pointer ${selected === 'commercial-accounts' ? 'border-b-2 border-white' : ''}`} onClick={() => handleClick('commercial-accounts')}>
                                            Commercial Accounts
                                        </Link>
                                        <Link href={'/alternative-fuel'} className={`cursor-pointer ${selected === 'alternative-fuel' ? 'border-b-2 border-white' : ''}`} onClick={() => handleClick('alternative-fuel')}>
                                            Alternative Fuel
                                        </Link>
                                        <Link href={'/careers'} className={`cursor-pointer ${selected === 'careers' ? 'border-b-2 border-white' : ''}`} onClick={() => handleClick('careers')}>
                                            Careers
                                        </Link>
                                        <Link href={'/contact-us'} className={`cursor-pointer ${selected === 'contact-us' ? 'border-b-2 border-white' : ''}`} onClick={() => handleClick('contact-us')}>
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-[100%] max-w:[100%] flex gap-[50px] max-sm:hidden max-lg:hidden  items-center justify-center ">
                    <div className='flex w-[85%] py-4 justify-center mb-[-20px] gap-[30px] rounded-[7px] text-[13px] font-semibold items-center bg-[#eeeeee] text-[#40464e] uppercase'>
                        <Link href={'/'} className='  cursor-pointer '>
                            Home
                        </Link>
                        <Link href={'/our-history'} className='  cursor-pointer '>
                            Our History
                        </Link>
                        <a href="https://pwrmarket.com" target="_blank" className="cursor-pointer">Power Market</a>
                        <Link href={'/locations'} className='  cursor-pointer '>
                            Locations
                        </Link>
                        <Link href={'/commercial-accounts'} className='  cursor-pointer '>
                            Commercial Accounts
                        </Link>
                        <Link href={'/alternative-fuel'} className='  cursor-pointer '>
                            Alternative Fuel
                        </Link>
                        <Link href={'/careers'} className='  cursor-pointer '>
                            Careers
                        </Link>
                        <Link href={'/contact-us'} className='  cursor-pointer '>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header