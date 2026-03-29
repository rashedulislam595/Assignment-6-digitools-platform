import React from 'react';
import bennerImg from '../../assets/banner.png'
import badge from '../../assets/badge.png'
import playImg from '../../assets/Play.png'

const HeroSection = () => {
    return (
        <div className='w-11/12 md:w-10/12 mx-auto'>
            <div className=" bg-base-200 py-20">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <img
                        src={bennerImg}
                        className="max-w-sm rounded-lg shadow-2xl "
                    />
                    <div>
                        <span className='flex gap-2 items-center py-2 px-4 w-[320px] rounded-full bg-[#E1E7FF]'>
                            <img src={badge} alt="" />
                            <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-medium text-[17px]'>New: AI-Powered Tools Available</p>
                        </span>
                        <h1 className="text-6xl font-extrabold text-[#101727] mt-2.5 ">Supercharge Your <br />Digital Workflow</h1>
                        <p className="py-6 text-[#627382]">
                            Access premium AI tools, design assets, templates, and productivity <br />
                            software—all in one place. Start creating faster today. <br />Explore Products
                        </p>
                        <div className='flex items-center gap-4'>
                            <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-[#FFFFFF] font-semibold'>Explore Products</button>
                            <button className="btn border border-[#9514FA] text-[#9514FA] rounded-full"><img src={playImg} alt="" /> Watch Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;