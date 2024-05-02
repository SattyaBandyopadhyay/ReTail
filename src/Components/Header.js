import React, { useState } from 'react';
import {AiOutlineMenu , AiOutlineClose} from "react-icons/ai";

function Header() {
    const [toggle , setToggle]=useState(false);
  return (
    <div className='bg-[blue] p-4'>
      <div className='max-w-[1240px] py-[12px] items-center flex justify-between mx-auto'>
        <div className='text-3xl font-bold'>
            AirBnb
        </div>
        {
            toggle ?
            <AiOutlineClose onClick={()=>setToggle(!toggle)}className='text-white text-xl md:hidden block'/>
            :
            <AiOutlineMenu  onClick={()=>setToggle(!toggle)} className='text-white text-xl md:hidden block'/>    
        }

        
        <AiOutlineMenu  className='text-white text-xl md:hidden block'/>
        <AiOutlineClose className='text-white text-xl md:hidden block'/>
        <ul className='hidden md:flex text-white gap-10'>
            <li>
                Home
            </li>
            <li>
                About
            </li>
            <li>
                Course
            </li>
            <li>
                contact
            </li>
            <li>
                Company
            </li>
        </ul>
        {/* Responsive Menu */}
        <ul className={` duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px] ${toggle ? 'left-[0]' : 'left-[-100%]'} `}>
            <li className='p-5'>
                Home
            </li>
            <li className='p-5'>
                About
            </li>
            <li className='p-5'>
                Course
            </li>
            <li className='p-5'>
                contact
            </li>
            <li className='p-5'>
                Company
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
