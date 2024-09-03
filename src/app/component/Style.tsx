import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { VscAccount, VscBellDot } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";

export const Style = () => {
    return (
        <div className='border-b border-gray-200 py-6 bg-white shadow-sm'>
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">

                {/* Animated Colorful Logo */}
                <h2 className="text-4xl text-center pb-4 sm:pb-0 font-extrabold tracking-tight animate-pulse">
                    <span className="text-red-500">F</span>
                    <span className="text-orange-500">A</span>
                    <span className="text-yellow-500">C</span>
                    <span className="text-green-500">H</span>
                    <span className="text-blue-500">I</span>
                    <span className="text-indigo-500">O</span>
                    <span className="text-purple-500">N</span>
                    <span className="text-pink-500">S</span>
                    <span className="text-teal-500">O</span>
                    <span className="text-cyan-500">U</span>
                    <span className="text-rose-500">T</span>
                    <span className="text-lime-500">F</span>
                    <span className="text-amber-500">I</span>
                    <span className="text-fuchsia-500">T</span>
                    <span className="text-emerald-500">S</span>
                </h2>

                {/* Search Bar */}
                <div className="w-full sm:w-[300px] md:w-[50%] relative mb-4 sm:mb-0">
                    <input
                        className='border border-gray-300 rounded-lg py-2 pl-4 pr-10 w-full shadow focus:outline-none focus:ring-2 focus:ring-blue-500'
                        type="text"
                        placeholder='Search for products'
                    />
                    <IoSearchOutline className='absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-500 text-xl' />
                </div>

                {/* Icons */}
                <div className="flex gap-6 text-gray-600 text-2xl">
                    <VscAccount />
                    <div className="relative">
                        <VscBellDot />
                        <div className="bg-red-600 rounded-full absolute -top-1 -right-1 w-5 h-5 text-xs text-white flex items-center justify-center">
                            0
                        </div>
                    </div>
                    <div className="relative">
                        <FaRegHeart />
                        <div className="bg-red-600 rounded-full absolute -top-1 -right-1 w-5 h-5 text-xs text-white flex items-center justify-center">
                            0
                        </div>
                    </div>
                    <div className="relative">
                        <CiShoppingCart />
                        <div className="bg-red-600 rounded-full absolute -top-1 -right-1 w-5 h-5 text-xs text-white flex items-center justify-center">
                            0
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Style;
