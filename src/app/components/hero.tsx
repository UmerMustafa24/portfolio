import React from "react"
import Link from "next/link"



const Hero = () => {
  return (
    <div>
     <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I AM 
              <br className="hidden lg:inline-block" />
              MARYAM KHAN
            </h1>
            <div className="w-[400px] h-[2px] bg-gray-500"></div>
            <p className="mb-8 leading-relaxed">
          
I am a clinical psychologist and homeopath, combining holistic, evidence-based approaches to mental health and wellness, with expertise in traditional therapies and homeopathy to support physical and emotional well-being. In addition to my work in healthcare, I am exploring the potential of AI technologies and web development, specializing in HTML, CSS, JavaScript, TypeScript, and Next.js to create innovative solutions that enhance user experiences and accessibility.
            </p>
            <div className="flex justify-center">
              <Link href={"#contact"}>
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Contact
              </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded mx-auto w-[20rem]"
              alt="hero"
              width={300}
              height={300}
              src="circle-grey.jpg"
            />
          </div>
        </div>
      </section>
 
 


    </div>
  )
}

export default Hero
