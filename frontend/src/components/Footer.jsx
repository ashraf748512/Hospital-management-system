import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router'

const Footer = () => {
  const navigate=useNavigate()
  return (
    <div className='md:mx-10'>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ------- Left Section ---------*/ }
        <div className="">
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, possimus quaerat hic sequi architecto amet quae accusamus quos quia explicabo voluptatibus exercitationem dolor  .</p>
          </div>
          {/*---------- Center section--------- */}
          <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600  '>
              <li className='cursor-pointer hover:text-gray-900' onClick={()=>{navigate("/");scrollTo(0,0)}}>Home</li>
              <li className='cursor-pointer hover:text-gray-900' onClick={()=>{navigate('/about');scrollTo(0,0)}}>About us</li>
              <li className='cursor-pointer hover:text-gray-900' onClick={()=>{navigate('/contact');scrollTo(0,0)}}>Contact us</li>
              <li className='cursor-pointer hover:text-gray-900' >Privacy policy</li>
            </ul>
          </div>
          {/*-------- right section */}
          <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600 '>
              <li>+1-212-456-7890</li>
              <li></li>faizanashraf0808@gmail.com
             
            </ul>
          </div>
       
      </div>
      <p className='text-sm text-gray-500'>Copyright 2024@Prescripto -All Right Reserved.</p>
    </div>
  )
}

export default Footer