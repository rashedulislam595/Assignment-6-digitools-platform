import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = ({selectCart}) => {
    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className='w-11/12 md:w-10/12 mx-auto flex items-center '>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#101727] font-semibold">
                                <li><a>Products</a></li>
                                <li><a>Features</a></li>
                                <li><a>Pricing</a></li>
                                <li><a>Testimonials</a></li>
                                <li><a>FAQ</a></li>
                            </ul>
                        </div>
                        <a className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-2xl md:text-3xl font-bold">DigiTools</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-[#101727] font-semibold">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end space-x-2.5 md:space-x-4">
                        <div className='relative'>
                            <ShoppingCart />
                            <p className={` w-5 h-5 text-center bg-red-500 text-white rounded-full absolute -top-3 -right-3  ${selectCart.length >0?"inline": "hidden"} text-sm font-bold`}>{selectCart.length}</p>
                        </div>
                        <button className='btn rounded-full'>Login</button>
                        <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-[#FFFFFF] font-semibold'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;