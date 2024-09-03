import Link from 'next/link'
import React from 'react'

export const Css = () => {
  return (
    <div className=' hidden lg:block'>
      <div className="container">
        <div className="flex w-fit gap-8 mx-auto flex-col-1 py-4 text-black">
          <ul className=' hidden md:flex gap-8'>

            <li className=" px-2  capitalize text-black bg-gray-100 rounded-md p-[3px] text-[14px] cursor-pointer hover:bg-gray-600 hover:text-white hover:scale-105  duration-200 font-light">FACHION</li>
            <li className=" px-2  capitalize text-black bg-gray-100 rounded-md p-[3px] text-[14px] cursor-pointer hover:bg-gray-600 hover:text-white hover:scale-105  duration-200 font-light">BRANDS</li>
            <li className=" px-2  capitalize text-black bg-gray-100 rounded-md p-[3px] text-[14px] cursor-pointer hover:bg-gray-600 hover:text-white hover:scale-105  duration-200 font-light">FEMALE</li>
            <li className=" px-2  capitalize text-black bg-gray-100 rounded-md p-[3px] text-[14px] cursor-pointer hover:bg-gray-600 hover:text-white hover:scale-105  duration-200 font-light">PERFIUMS</li>
            <li className=" px-2  capitalize text-black bg-gray-100 rounded-md p-[3px] text-[14px] cursor-pointer hover:bg-gray-600 hover:text-white hover:scale-105  duration-200 font-light">AN ALL ITEMS</li>
            <li className=" px-2  capitalize text-black bg-gray-100 rounded-md p-[3px] text-[14px] cursor-pointer hover:bg-gray-600 hover:text-white hover:scale-105  duration-200 font-light">NEW SEAL</li>
            <li className=" px-2  capitalize text-black bg-gray-100 rounded-md p-[3px] text-[14px] cursor-pointer hover:bg-gray-600 hover:text-white hover:scale-105  duration-200 font-light">OFFERS</li>
            <li className=" px-2  capitalize text-black bg-gray-100 rounded-md p-[3px] text-[14px] cursor-pointer hover:bg-gray-600 hover:text-white hover:scale-105  duration-200 font-light">NOW SEE</li>

          </ul>

        </div>
      </div>
    </div>
  )
}
export default Css