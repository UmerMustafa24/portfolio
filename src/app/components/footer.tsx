import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-gray-300'>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <img src="portfolio logo.jpg" alt="MARYAM KHAN" width={200} height={200} className='w-[50px]'/>
      <span className="ml-3 text-xl">MY PORTFOLIO</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 MY PORTFOLIO
     
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-5">
      <Link target='_blank' href={"https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"} className="text-gray-500">
      <CiFacebook className='text-3xl hover:text-blue-400' />
      </Link>

      <Link target='_blank' href={"https://www.instagram.com/accounts/login/?hl=en"} className="text-gray-500">
      <FaInstagram className='text-3xl hover:text-blue-400' />
      </Link>

      <Link target='_blank' href={"https://www.linkedin.com/company/login"} className="text-gray-500">
      <FaLinkedin  className='text-3xl hover:text-blue-400' />
      </Link>
      
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
