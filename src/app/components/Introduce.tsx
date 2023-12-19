'use client'
import React, { useState } from 'react'
import { motion } from "framer-motion";
interface introduceProps {
    firstTitle?: string;
    italicTitle?: string;
    content?: string;
    buttonA?: string;
    buttonB?: string;
    image?: string;
}
const Introduce: React.FC<introduceProps> = ({ firstTitle, italicTitle, content, buttonA, buttonB, image }) => {
    return (
        <div className='bg-white  flex flex-col gap-[30px] '>
            <div className='flex gap-[30px] max-sm:flex-col'>
                <motion.div
                    className='text-[#0e0e0e] text-[14px] w-[50%] max-sm:w-full'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {
                        firstTitle &&
                        <h1 className='text-[42px] font-bold pb-[30px]'>{firstTitle}</h1>
                    }
                    {
                        italicTitle &&
                        <h1 className='text-[42px] font-bold pb-[30px] italic'>{italicTitle}</h1>
                    }
                    {
                        content &&
                        <p className='text-[16px] mb-4 '>{content}</p>
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

export default Introduce