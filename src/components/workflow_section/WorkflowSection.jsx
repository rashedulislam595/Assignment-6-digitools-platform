import React from 'react';

const WorkflowSection = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-center py-28 px-5'>
            <h1 className="md:text-[40px] text-3xl font-extrabold text-[#FFFFFF] mt-2.5 ">Ready to Transform Your Workflow?</h1>
            <p className="py-6 text-[#ffffff70] text-sm md:text-[16px]">
                Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.
            </p>
            <div className='flex items-center gap-4 justify-center'>
                <button className='btn  rounded-full bg-[#FFFFFF] font-semibold'><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Explore Products</span></button>
                <button className="btn text-[#FFFFFF] rounded-full bg-[#772cf8] px-8">View Pricing</button>
            </div>
            <p className='text-[#FFFFFF70] mt-4 text-sm md:text-[16px]'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default WorkflowSection;