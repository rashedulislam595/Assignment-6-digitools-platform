import React from 'react';

const Footer = () => {
    return (

        <footer className="footer sm:footer-horizontal bg-[#101727] text-neutral-content pt-28 pb-7">
            <div className='w-11/12 md:w-10/12 mx-auto '>
                <div className='grid grid-cols-5 gap-12 mb-20'>
                    <div>
                        <h2 className='text-3xl text-[#FFFFFF] font-bold mb-6'>DigiTools</h2>
                        <p className='text-[#FFFFFF80]'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    {/* product */}
                    <div>
                        <h2 className='text-xl text-[#FFFFFF] mb-6 font-medium'>Product</h2>
                        <ul className='text-[#FFFFFF80] space-y-4'>
                            <li><a href="">Features</a></li>
                            <li><a href="">Pricing </a></li>
                            <li><a href="">Templates </a></li>
                            <li><a href="">Integrations </a></li>
                        </ul>
                    </div>
                    {/* company */}
                    <div>
                        <h2 className='text-xl text-[#FFFFFF] mb-6 font-medium'>Company</h2>
                        <ul className='text-[#FFFFFF80] space-y-4'>
                            <li><a href="">About</a></li>
                            <li><a href="">Blog </a></li>
                            <li><a href="">Careers </a></li>
                            <li><a href="">Press </a></li>
                        </ul>
                    </div>
                    {/* Resources */}
                    <div>
                        <h2 className='text-xl text-[#FFFFFF] mb-6 font-medium'>Resources</h2>
                        <ul className='text-[#FFFFFF80] space-y-4'>
                            <li><a href="">Documentation</a></li>
                            <li><a href="">Help Center</a></li>
                            <li><a href="">Community</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    {/* Social Links */}
                    <div>
                        <h2 className='text-xl text-[#FFFFFF] mb-6 font-medium'>Social Links</h2>
                        <ul className='text-[#FFFFFF80] space-y-4'>
                            <li><a href=""><img src="jf" alt="instagram" /></a></li>
                            <li><a href=""><img src="fa" alt="facebook" /></a></li>
                            <li><a href=""><img src="/f" alt="twitter" /></a></li>
                            
                        </ul>
                    </div>
                </div>
                
                <div className='pt-8 border-t border-t-[#FFFFFF20] flex justify-between w-full '>
                    <p className='text-[#FFFFFF70]'>© 2026 Digitools. All rights reserved.</p>
                    <ul className='text-[#FFFFFF70] flex gap-5'>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of Service</a></li>
                        <li><a href="">Cookies</a></li>
                    </ul>
                </div>

            </div>
        </footer>

    );
};

export default Footer;