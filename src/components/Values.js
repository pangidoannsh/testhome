import React from 'react';
import { inovation, loyalty, respect } from "../assets"
const Values = ({ refrence }) => {
    return (
        <>
            <div ref={refrence} className="h-20"></div>
            <div className='text-5xl font-medium text-slate-600 text-center mb-16' >Our Values</div>
            <div className="grid md:grid-cols-3 gap-8 md:px-32">
                <div className="relative flex flex-col justify-center items-center hover:scale-105 hover:bg-sky-100 p-8 duration-200 group rounded-xl
                hover:shadow-sm">
                    <div className="absolute"></div>
                    <img src={inovation} alt="" className='w-24 group-hover:-translate-y-4 duration-300' />
                    <div className='text-2xl text-slate-500 group-hover:text-[#00B0E5] py-4 font-semibold'>Inovation</div>
                    <div className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eligendi vero natus ea quisquam in voluptatem porro ratione rem ipsam aliquam?</div>
                </div>
                <div className="relative flex flex-col justify-center items-center hover:scale-105 hover:bg-sky-100 p-8 duration-200 group rounded-xl
                hover:shadow-sm">
                    <div className="absolute"></div>
                    <img src={loyalty} alt="" className='w-24 group-hover:-translate-y-4 duration-300' />
                    <div className='text-2xl text-slate-500 group-hover:text-[#00B0E5] py-4 font-semibold'>Loyalty</div>
                    <div className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eligendi vero natus ea quisquam in voluptatem porro ratione rem ipsam aliquam?</div>
                </div>
                <div className="relative flex flex-col justify-center items-center hover:scale-105 hover:bg-sky-100 p-8 duration-200 group rounded-xl
                hover:shadow-sm">
                    <div className="absolute"></div>
                    <img src={respect} alt="" className='w-24 group-hover:-translate-y-4 duration-300' />
                    <div className='text-2xl text-slate-500 group-hover:text-[#00B0E5] py-4 font-semibold'>Respect</div>
                    <div className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eligendi vero natus ea quisquam in voluptatem porro ratione rem ipsam aliquam?</div>
                </div>
            </div>
        </>
    );
}

export default Values;
