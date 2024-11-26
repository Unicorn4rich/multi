import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { IoMenu } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Button } from './ui/button';

function header() {
  return (
    <>
    
    <header className='w-full flex flex-col gap-[16px]'>

{/* top div */}
        <div className='w-full bg-headerColor h-[54px] px-[62px] xsm:flex justify-between items-center hidden 
        border-b-[1px] border-[black]'>

            <div className='h-[30px] flex justify-center items-center gap-[16px] text-[14px] leading-[150%]'>
                <p>Phone Number: 956 742 455 678</p>
                <div className='w-[1px] h-[30px] bg-[#676767] '></div>
                <p>Email:info@ddsgnr.com</p>
            </div>


            <div className='flex justify-center items-center gap-[12px] '>
            <FaFacebookF size={24} />
            <FaInstagram size={24} />
            <FaTwitter size={24} />
            <FaLinkedin size={24} />
            </div>

        </div>


{/* bottom div */}
        <div className='w-full h-[72px] xsm:px-[64px] py-[15px] bg-headerColor flex justify-between items-center px-[24px]
        border-b-[1px] border-[black] fixed top-0'>

            <Image src={"/logo.png"} alt="logo" width={130} height={41} />

            <div className='xsm:flex justify-between items-center gap-[32px] hidden '>
                <ul className='flex gap-[52px] justify-center items-center text-[16px]'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Courses</Link></li>
                    <li><Link href="/">Services</Link></li>
                </ul>

                <div className='flex justify-center items-center gap-[16px] '>
                    <Button variant={'transparentBtn'}>Login</Button>
                    <Button>Sign Up</Button>
                </div>

            </div>

            <IoMenu size={24}/>

        </div>

    </header>

    </>
  )
}

export default header