import React, { useContext, useState } from 'react'
import {assets} from "../assets/assets.js"
import { NavLink, useNavigate } from 'react-router'
import { userContext } from '../context/userContext.jsx'
export const Navbar = () => {
  const {authUser,logout}=useContext(userContext)
  const [showMenu ,setShowMenu]=useState(false);
   const handleLogout=()=>{
    const data=logout()
    console.log("this is from handle logout"+data)
   }
  const navigate=useNavigate()
  return (
<div className='flex items-center justify-between border-b border-b-gray-300 mb-5 py-4 text-sm bg-white'>
  <img onClick={()=>navigate("/")} className='w-44 cursor-pointer' src={assets.logo} alt="" />
  <ul className=' hidden  md:flex items-start gap-5 font-medium'>
    <NavLink  className="py-1"  to="/">
      <li>HOME</li>
      <hr className='border-none outline-none h-0.5 bg-primary m-auto w-3/5 hidden'/>
    </NavLink >
    <NavLink  className="py-1" to="/about">
      <li>ABOUT US</li>
      <hr className='border-none outline-none h-0.5 bg-primary m-auto w-3/5 hidden'/>
    </NavLink>
    <NavLink  className="py-1" to="/doctors">
      <li>ALL DOCTORS</li>
      <hr className='border-none outline-none h-0.5 bg-primary m-auto w-3/5 hidden'/>
    </NavLink>
    <NavLink className="py-1"  to="/contact">
      <li>CONTACT US</li>
      <hr className='border-none outline-none h-0.5 bg-primary m-auto w-3/5 hidden'/>
    </NavLink>
    <NavLink to="/">
      <li></li>
      <hr />
    </NavLink>
  </ul>
  <div className="flex items-center gap-4">
    {
      Object.keys(authUser).length> 0?<div className='flex items-center cursor-pointer gap-2 group relative '>
      <img className="w-8 rounded-full z-30" src={assets.profile_pic} alt="" />           
      <img className='w-2.5 z-30' src={assets.dropdown_icon} alt="" />    
      <div className=" absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 hidden z-20 group-hover:block  ">
      <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
        <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
        <p onClick={()=>navigate('/my-appointment')} className='hover:text-black cursor-pointer'>My&nbsp;Appointment</p>
        <p onClick={handleLogout} className='hover:text-black cursor-pointer'>Logout</p>
        </div>  
        </div>     
      </div>
      : <button onClick={()=>navigate("/login")} className='py-3 px-8 bg-primary font-light hidden md:block text-white text-lg rounded-full active:translate-y-[-10px] active:scale-110 transition-all duration-500'>
      Create Account
    </button>
    }
 
  </div>
 
</div>
  )
}

export default Navbar