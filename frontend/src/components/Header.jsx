import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex md:flex-row flex-col flex-wrap  bg-primary rounded-lg px-6 md:px-10 lg:px-[4.5rem]'>
         {/*---------left Side-----------*/}
           <div className='md:w-1/2 py-10 gap-4 m-auto md:mb-[-30px] md:py-[10vw] flex flex-col justify-center items-start'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight'>
            Book Appointment <br />
            With Trusted Doctors
            </p>
            <div className='flex flex-col md:flex-row gap-3 items-center text-white text-sm font-light'>
            <img className="w-28 " src={assets.group_profiles} alt="" />
            <p>Simply browse through our extensive list of trusted doctors,<br className='hidden md:block '/>schedule your appointment hassle-free.</p>
            </div>

            <a href="#speciality">
            <p className='flex items-center gap-3 text-gray-600 text-sm m-auto md:m-0 bg-white py-3 px-8 rounded-full hover:scale-105 transition-all duration-300'>
                Book Appointment <img className='w-3' src={assets.arrow_icon} alt="" />
            </p>
             </a>
        </div>

        {/*---------right Side-----------*/}
        <div className="md:w-1/2  relative">
            <img className='w-full h-auto md:absolute bottom-0 rounded-lg' src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header