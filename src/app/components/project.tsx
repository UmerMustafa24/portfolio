import React from 'react'
import Link from 'next/link'


const Project = () => {
  return (
    <div id='project'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
      </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem]">
        {/* project */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="resume"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="resume.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              RESUME
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              My resume
            </h1>
            <p className="leading-relaxed">
              this is the projecct which i have created.
            </p>
            <Link target='_blank' href={"https://milstones12.vercel.app/"}>
            <p className="leading-relaxed text-indigo-500 hover:underline ">
              View Project.
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="my car.png"
            width={100}
            height={100}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Website
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              My Website
            </h1>
            <p className="leading-relaxed">
              i made this project which i have created.
            </p>
            <Link target='_blank' href={"https://minihackathon-seven.vercel.app/"}>
            <p className="leading-relaxed  text-indigo-500 hover:underline">
              View Project.
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="web.jfif"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Webpage Template
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Template
            </h1>
            <p className="leading-relaxed">
              as a beginner my first webpage template.
            </p>
            <Link target='_blank' href={"https://webpage-gules-three.vercel.app/"}>
            <p className="leading-relaxed  text-indigo-500 hover:underline">
              View Project.
            </p>
            </Link>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
