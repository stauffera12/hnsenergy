"use client"
import React, { useState } from 'react';
import { TfiEmail } from 'react-icons/tfi';
import { GiSmartphone } from 'react-icons/gi';
import { LiaMapMarkedAltSolid } from 'react-icons/lia';
import { FiSend } from "react-icons/fi";
import axios from 'axios';
import "../contact-us.css"
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
interface FormData {
    name: string;
    phone: string;
    email: string;
    service: string;
    content: string
}
const ContactMap = () => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
        service: '',
        content: ''
    })
    console.log(formData);
    const hanldeSeclect = (e: string) => {
        setFormData({
            ...formData,
            service: e
        })
    }
    // const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    //     const { name, value } = event.target;
    //     setFormData({
    //         ...formData,
    //         [name as string]: value as string,
    //     });
    // };
    // const handleChangeIsHnUser = (event: SelectChangeEvent<string>) => {
    //     const { name, value } = event.target;
    //     setFormData({
    //         ...formData,
    //         [name as string]: value as string,
    //     });
    // };

    const handleSubmit = async () => {
        const htmlContent = `
        <strong>Name:</strong> ${formData.name} <br />
        <strong>Email:</strong> ${formData.email} <br />
        <strong>Phone:</strong> ${formData.phone} <br />
        <strong>Service:</strong> ${formData.service} <br />
        <strong>Content:</strong> ${formData.content} <br />
      `;
        await axios.post('/api/email', {
            html: htmlContent,
            type: 'gmail',
            text: 'Contact Email',
            to: 'huy.workflow@gmail.com',
            subject: 'Contact Email'
        }).then(() => console.log('Email sent'))
    };

    return (
        <div>
            <div className=' py-20 pb-[130px]' style={{ backgroundImage: `url(${'/map.png'})`, backgroundSize: 'cover' }}>
                <div className='flex flex-col w-[100%] items-center '>
                    <span className='text-[#af272f] text-center'>GET IN TOUCH</span>
                    <div className='w-full'>
                        <p className='text-[#0e0e0e] text-[50px]  pb-[40px] w-[100%] font-bold leading-[62px] text-center'>STAY CONNECTED WITH US</p>
                    </div>
                    <div className='flex max-sm:flex-col bg-white rounded-[10px] w-[85%] shadow '>
                        <div className='bg-[#102c4e] text-[white] rounded-[10px] w-[45%] max-sm:w-full px-[40px] max-sm:px-[10px]'>
                            <p className='py-[40px]'>CONTACT US</p>
                            <p className=' border-b-[1px] w-[10%]'></p>
                            <div className='flex flex-col gap-[40px] pt-[40px] '>
                                <div className='flex gap-[15px] items-center'>
                                    <TfiEmail size={20} />
                                    <span className='text-[14px]'> info@hnsenergyproducts.com</span>
                                </div>
                                <div className='flex gap-[15px] items-center'>
                                    <GiSmartphone size={20} />
                                    <span className='text-[14px]'>(714) 761 5426</span>
                                </div>
                                <div className='flex gap-[15px] items-center'>
                                    <LiaMapMarkedAltSolid size={20} />
                                    <span className='text-[14px]'>2860 N.Santiago Blvd, Orange, CA 92867</span>
                                </div>
                                <div className='pl-[35px] pb-[70px]'>
                                    <span className='text-[14px]  border-b-[1px] '>Open Map</span>
                                </div>
                            </div>
                        </div>
                        <div className=' px-[40px] w-full max-sm:px-[10px] max-sm:pt-[30px] pt-[80px] flex flex-col gap-[20px] text-black' >
                            <div className='grid grid-cols-2 gap-[20px] '>
                                <div>
                                    <p className='text-[14px] text-[#959aa1] '>Name</p>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className={isInputFocused ? 'outline-red py-2 p-2 map' : 'outline-none py-2 p-2'}
                                        placeholder='Name'
                                        onFocus={() => setIsInputFocused(true)}
                                        onBlur={() => setIsInputFocused(false)}
                                        style={{ width: '100%' }}
                                    />
                                </div>
                                <div>
                                    <p className='text-[14px] text-[#959aa1]  '>Email Address</p>
                                    <input
                                        type='email'
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className={isInputFocused ? 'outline-red py-2 p-2 w-full' : 'outline-none py-2 p-2 w-full'}
                                        placeholder='Example@email.com'
                                        onFocus={() => setIsInputFocused(true)}
                                        onBlur={() => setIsInputFocused(false)}
                                    />
                                </div>
                            </div>
                            <div className='grid grid-cols-2 max-sm:gap-[10px] gap-[20px]'>
                                <div>
                                    <p className='text-[14px] text-[#959aa1]  '>Phone</p>
                                    <input
                                        type="number"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className={isInputFocused ? 'outline-red py-2 p-2 w-full' : 'outline-none py-2 p-2 w-full'}
                                        onFocus={() => setIsInputFocused(true)}
                                        onBlur={() => setIsInputFocused(false)}
                                    />
                                </div>
                                <div className='w-[100%] '>
                                    <p className='text-[14px] text-[#959aa1] '>Select Service</p>
                                    <select
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        className=' text-[14px] py-[10.5px] text-black w-[100%]'>
                                        <option value='CarWash'>Car Wash</option>
                                        <option value='HR'>HR</option>
                                        <option value='VendorInquiries'>Vendor Inquiries</option>
                                        <option value='BusinessDevelopment'>Business Development</option>
                                        <option value='CustomerComplaints'>Customer Complaints</option>
                                        <option value='Careers'>Careers</option>
                                        <option value='RealEstate'>Real Estate</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <p className='text-[14px] text-[#959aa1] '>Message</p>
                                <div className='relative'>
                                    <textarea
                                        value={formData.content}
                                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                        className={isInputFocused ? 'outline-red py-2 p-2 w-full h-[15vh]' : 'outline-none py-2 p-2 w-full h-[15vh]'}
                                        placeholder='Type your message here...'
                                        onFocus={() => setIsInputFocused(true)}
                                        onBlur={() => setIsInputFocused(false)}
                                    ></textarea>
                                    <div onSubmit={handleSubmit} className=' absolute right-[-40px] max-sm:right-[-10px] bottom-[-40px] max-sm:bottom-0 p-2 cursor-pointer' >
                                        <div className=' border-[2px] rounded-full p-5'>
                                            <div className='bg-[#af272f] rounded-full p-6'>
                                                <FiSend  size={24} className='text-white ' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactMap;
