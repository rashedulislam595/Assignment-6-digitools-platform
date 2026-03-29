import React from 'react';

const StatsSection = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] md:mb-28 mb-10'>
            <div className='w-11/12 md:w-10/12 mx-auto flex justify-between py-14'>
                <div>
                    <h2 className='text-4xl md:text-6xl font-extrabold text-white'>50K+</h2>
                    <p className='md:text-2xl text-[#FFFFFF90]'>Active Users</p>
                </div>
                <div className='divider'></div>
                <div>
                    <h2 className='text-4xl md:text-6xl font-extrabold text-white'>200+</h2>
                    <p className='md:text-2xl  text-[#FFFFFF90]'>Premium Tools</p>
                </div>
                <div className='divider'></div>
                <div>
                    <h2 className='text-4xl md:text-6xl font-extrabold text-white'>4.9</h2>
                    <p className='md:text-2xl text-[#FFFFFF90]'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;