import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsCurrencyBitcoin } from 'react-icons/bs';




function Header() {
    return (
        <div className=' border-b border-b-gray-950 hidden sm:block '>
            <div className=" container py-4">
                <div className=" flex justify-between items-center ">
                    <div className="hidden lg:flex gap-3  ml-4 ">
                        <div className="Header__icons_wrapper text-2xl text-blue-600 hover:bg-blue-700 hover:text-white animate-pulse">
                            <FaFacebookSquare />
                        </div>
                        <div className="Header__icons_wrapper text-2xl text-blue-800 hover:bg-blue-900 hover:text-white animate-pulse">
                            < FaLinkedin />
                        </div>
                        <div className="Header__icons_wrapper text-2xl text-pink-700 hover:bg-pink-800 hover:text-white animate-pulse">
                            <FaInstagramSquare />
                        </div>
                        <div className="Header__icons_wrapper text-2xl hover:bg-black hover:text-white animate-pulse ">
                            <FaSquareXTwitter />
                        </div>
                        <div className="Header__icons_wrapper text-2xl text-green-600 hover:bg-green-700 hover:text-white animate-pulse">
                            <FaWhatsappSquare />
                        </div>
                    </div>

                    <div className=" text-gray-950 text-[14px] ">
                        <b>FREE CLOTHEING/ </b>THIS WEEK ORDER OVER -$55 for
                    </div>

                    <div className=" flex gap-4">
                        <select className=' text-gray-500 text-[12px] w-[70px]'
                            name="currency"

                            id="Currency"
                        >
                            <option value="USD $"> USD $</option>
                            <option value="EUR ^"> EUR ^</option>
                            <option value="INR #"> INR #</option>
                            <option value="INR #"> PKR !</option>
                            <option value="INR #"> UTD %</option>
                            <option value="INR #"> RUN &</option>
                            <option value="INR #"> LIR *</option>



                        </select>
                        <select className=' text-gray-500 text-[12px] w-[80px]'
                            name=" language"
                            id=" language">

                            <option value="ENGLISH"> ENGLISH</option>
                            <option value="ENGLISH"> PAKISTANI</option>
                            <option value="ENGLISH"> INDIAN</option>
                            <option value="ENGLISH"> TURKEY</option>
                            <option value="ENGLISH"> DUBAI</option>
                            <option value="ENGLISH"> PALASTEN</option>
                            <option value="ENGLISH"> USA</option>
                            <option value="ENGLISH"> UAE</option>
                            <option value="ENGLISH"> UK</option>
                            <option value="ENGLISH"> CANADA</option>


                        </select>

                        <select className=' text-gray-500 text-[12px] w-[80px]'
                            name=" language"
                            id=" language">

                            <option value="price"> 100$</option>
                            <option value="price"> 200$</option>
                            <option value="price"> 300$</option>
                            <option value="price"> 300$</option>
                            <option value="price"> 400$</option>
                            <option value="price"> 500$</option>
                            <option value="price"> 600$</option>
                            <option value="price"> 700$</option>
                            <option value="price"> 800$</option>
                            <option value="price"> 900$</option>
                            <option value="price"> 1000$</option>


                        </select>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header