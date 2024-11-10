import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white z-50 sticky top-0'>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="portfolio logo.jpg" alt="MARYAM KHAN" width={200} height={200} className='w-[50px]'/>
      <span className="ml-3 text-xl">MY PORTFOLIO</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-blue-600">HOME</Link>
      <Link href={"#about"}  className="mr-5 hover:text-blue-600">ABOUT</Link>
      <Link href={"#skill"}  className="mr-5 hover:text-blue-900">SKILLS</Link>
      <Link href={"#project"} className="mr-5 hover:text-blue-600">PROJECTS</Link>
      <Link href={"#contact"} className="mr-5 hover:text-blue-600">CONTACTS</Link>
    </nav>
    
  </div>
</header>
    </div>
  )
}

export default Navbar
