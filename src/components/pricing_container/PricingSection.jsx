import { Check } from 'lucide-react';
import React from 'react';

const PricingSection = () => {
    return (
        <div className=' py-14 md:py-24 w-11/12 md:w-10/12 mx-auto'>
            {/* heading */}
                <div className='text-center mb-10'>
                    <h2 className='text-4xl md:text-5xl font-extrabold text-[#101727] mb-4'>Simple, Transparent Pricing</h2>
                    <p className='text-[#627382] md:text-[16px] text-sm'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>
                {/* pricing card container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-7'>
                    {/* card 1 */}
                    <div className=' p-6 bg-[#F9FAFC] shadow-sm rounded-2xl border border-[#F2F2F2] flex flex-col'>
                        <h2 className='text-2xl font-bold text-[#101727]'>Starter</h2>
                        <p className='text-[#627382] mb-4'>Perfect for getting started</p>
                        <p className='text-[#101727] text-xl'><span className='text-[#101727] font-bold text-4xl '>$0</span>/month</p>
                        <ul className='text-[#627382] py-4 grow space-y-2 font-medium'>
                            <li className='flex gap-2 items-center'><Check className='text-[#30B868]' />Access to 10 free tools</li>
                            <li className='flex gap-2 items-center'><Check className='text-[#30B868]' />Basic templates</li>
                            <li className='flex gap-2 items-center'><Check className='text-[#30B868]' />Community support</li>
                            <li className='flex gap-2 items-center'><Check className='text-[#30B868]' />1 project per month</li>
                        </ul>
                        <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-[#FFFFFF] font-semibold w-full'>Get Started Free</button>
                    </div>
                    {/* card 2 */}
                    <div className=' p-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-sm rounded-2xl flex flex-col relative '>
                        <h2 className='text-2xl font-bold text-[#FFFFFF]'>Pro</h2>
                        <p className='text-[#627382] mb-4'>Best for professionals</p>
                        <p className='text-[#627382] text-xl'><span className='text-[#FFFFFF] font-bold text-4xl '>$29</span>/month</p>
                        <ul className='text-[#FFFFFF] py-4 grow space-y-2 font-medium'>
                            <li className='flex gap-2 items-center'><Check />Access to all premium tools</li>
                            <li className='flex gap-2 items-center'><Check />Unlimited templates</li>
                            <li className='flex gap-2 items-center'><Check />Priority support</li>
                            <li className='flex gap-2 items-center'><Check />Unlimited projects</li>
                            <li className='flex gap-2 items-center'><Check />Cloud sync</li>
                            <li className='flex gap-2 items-center'><Check />Advanced analytics</li>
                            
                        </ul>
                        <button className='btn  rounded-full bg-[#FFFFFF] font-semibold w-full'><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Start Pro Trial</span></button>
                        {/* badge */}
                        <button className='bg-[#FEF3C6] text-[#BB4D00] py-1.5 px-3 rounded-full absolute -top-3.5 left-48 sm:left-28 text-sm font-medium'>Most Popular</button>
                    </div>
                    {/* card 3 */}
                    <div className=' p-6 bg-[#F9FAFC] shadow-sm rounded-2xl border border-[#F2F2F2] flex flex-col'>
                        <h2 className='text-2xl font-bold text-[#101727]'>Enterprise</h2>
                        <p className='text-[#627382] mb-4'>For teams and businesses</p>
                        <p className='text-[#101727] text-xl'><span className='text-[#101727] font-bold text-4xl '>$99</span>/month</p>
                        <ul className='text-[#627382] py-4 grow space-y-2 font-medium'>
                            <li className='flex gap-2 items-center'><Check className='text-[#30B868]' />Everything in Pro</li>
                            <li className='flex gap-2 items-center'><Check className='text-[#30B868]' />Team collaboration</li>
                            <li className='flex gap-2 items-center'><Check className='text-[#30B868]' />Custom integrations</li>
                            <li className='flex gap-2 items-center'><Check className='text-[#30B868]' />Dedicated support</li>
                            <li className='flex gap-2 items-center'><Check className='text-[#30B868]' />SLA guarantee</li>
                            <li className='flex gap-2 items-center'><Check className='text-[#30B868]' />Custom branding</li>
                        </ul>
                        <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-[#FFFFFF] font-semibold w-full'>Contact Sales</button>
                    </div>
                </div>
        </div>
    );
};

export default PricingSection;{/* heading */}
                <div className='text-center mb-10'>
                    <h2 className='text-5xl font-extrabold text-[#101727] mb-4'>Get Started in 3 Steps</h2>
                    <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                </div>