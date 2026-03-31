import React from 'react';
import userImg from '../../assets/user.png'
import rocketImg from '../../assets/rocket.png'
import packageImg from '../../assets/package.png'

const StepsSection = () => {
    return (
        <div className='bg-[#F9FAFC]'>
            <div className='w-11/12 md:w-10/12 mx-auto py-16 md:py-28'>
                {/* heading */}
                <div className='text-center mb-10'>
                    <h2 className='text-4xl md:text-5xl font-extrabold text-[#101727] mb-4'>Get Started in 3 Steps</h2>
                    <p className='text-[#627382] text-sm md:text-[16px]'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                {/* card container */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7'>
                    {/* step 1 */}
                    <div className=' bg-[#FFFFFF] p-6 text-center rounded-2xl drop-shadow-sm'>
                        <div className='flex justify-end'>
                            <p className='text-sm font-bold py-2 px-2.5 text-center w-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[#FFFFFF]'>01</p>
                        </div>
                        <div className=' p-5 w-24 rounded-full bg-[#62738227] mx-auto'>
                            <img src={userImg} alt="" />
                        </div>
                        <h1 className='text-2xl font-bold text-[#001931] my-4'>Create Account</h1>
                        <p className='text-[#627382] mb-12'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    {/* step 2 */}
                    <div className=' bg-[#FFFFFF] p-6 text-center rounded-2xl drop-shadow-sm'>
                        <div className='flex justify-end'>
                            <p className='text-sm font-bold py-2 px-2.5 text-center w-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[#FFFFFF]'>02</p>
                        </div>
                        <div className=' p-5 w-24 rounded-full bg-[#62738227] mx-auto'>
                            <img src={packageImg} alt="" />
                        </div>
                        <h1 className='text-2xl font-bold text-[#001931] my-4'>Choose Products</h1>
                        <p className='text-[#627382] mb-12'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                    {/* step 3 */}
                    <div className=' bg-[#FFFFFF] p-6 text-center rounded-2xl drop-shadow-sm'>
                        <div className='flex justify-end'>
                            <p className='text-sm font-bold py-2 px-2.5 text-center w-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[#FFFFFF]'>03</p>
                        </div>
                        <div className=' p-5 w-24 rounded-full bg-[#62738227] mx-auto'>
                            <img src={rocketImg} alt="" />
                        </div>
                        <h1 className='text-2xl font-bold text-[#001931] my-4'>Start Creating</h1>
                        <p className='text-[#627382] mb-12'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepsSection;