import React from 'react'
import { OurservicesData } from '../data/ourservices'

const OurServices = () => {
    return (
        <div className='pb-[50px]'>
            <span className='text-[50px] font-bold text-center text-black flex justify-center pb-[50px]'>OUR SERVICES</span>
            <div className='grid grid-cols-4 max-sm:grid-cols-1 max-sm:px-[20px]'>
                {OurservicesData.map(service => (
                    <div key={service.id} className="relative h-[40vh]  max-sm:h-[35vh]"  style={{backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundColor:'black'}}>
                        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className='h-[40vh]  max-sm:h-[35vh]'>
                        <div className=" flex flex-col justify-center items-center text-center text-white pt-[30px]">
                            <span className="text-lg font-bold text-[18px]"><span className=' italic mr-2'>#</span>{service.label}</span>
                            <p className="opacity-0 px-3 max-sm:opacity-100 transition-opacity duration-300 text-[14px] cursor-pointer text-white bg-opacity-50 hover:opacity-100 font-medium">{service.content}</p>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurServices