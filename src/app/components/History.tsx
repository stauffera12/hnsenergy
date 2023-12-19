'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { motion } from "framer-motion";

interface historyProps {
    firstTitle?: string;
    italicTitle?: string;
    content?: string;
    buttonA?: string;
    buttonB?: string;
    image?: string;
}
const History: React.FC<historyProps> = ({ firstTitle, italicTitle, content, buttonA, buttonB, image }) => {
    return (
        <div className='bg-white  flex flex-col gap-[30px] '>
            <div className='flex max-sm:flex-col-reverse gap-[30px] pb-[100px] px-[100px] max-sm:pb-[20px] max-sm:px-[20px] flex-row-reverse'>
                <motion.div
                    className='text-[#0e0e0e] text-[14px] w-[50%] max-sm:w-[100%]'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {
                        firstTitle &&
                        <h1 className='text-[42px] max-sm:text-[30px] font-bold pb-[30px]'>{firstTitle}</h1>
                    }
                    {
                        italicTitle &&
                        <h1 className='text-[42px] max-sm:text-[30px] font-bold pb-[30px] italic'>{italicTitle}</h1>
                    }
                    {
                        content &&
                        <p className='text-[16px] mb-4 '>{content}</p>
                    }
                    {
                        buttonA &&
                        <button className='bg-[#af272f] text-white p-3 font-bold rounded-[4px] w-[25%] max-sm:w-[50%] text-center cursor-pointer uppercase'>{buttonA}</button>
                    }
                    {
                        buttonB &&
                        <button className='bg-[#123157] text-white p-3 font-bold rounded-[4px] w-[30%] max-sm:w-[50%] text-center cursor-pointer uppercase'>{buttonB}</button>
                    }
                </motion.div>
                <div className='w-[50%] max-sm:w-full'>
                    <motion.img
                        src={image}
                        alt=""
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                </div>
            </div>

        </div>
    )
}

export default History