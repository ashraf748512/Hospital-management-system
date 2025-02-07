import { useContext, useEffect, useState } from 'react'
import { Routes,Route, Navigate } from 'react-router';

import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import About from './pages/about';
import MyAppointment from './pages/MyAppointment';
import Appointment from './pages/Appointment';
import MyProfile from './pages/MyProfile';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { userContext } from './context/userContext';

function App() {
  const [show, setShow] = useState(false)
  const [switch1, setSwitch1] = useState(false);
  const {checkAuthUser,authUser,signup,login,logout}=useContext(userContext)
 
 useEffect(()=>{
   checkAuthUser()

 },[signup,login,logout])
 console.log(authUser)
  return (
  <>
<div className="mx-4 sm:mx-[10%]">
<Navbar/>
  <Routes>
    <Route path="/" element={Object.keys(authUser).length> 0?<Home/>:<Navigate to ="/login"/>}/>
    <Route path="/doctors" element={Object.keys(authUser).length >0?<Doctors/>:<Login/>}/>
    <Route path="/doctors/:speciality" element={Object.keys(authUser).length >0?<Doctors/>:<Login/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/login" element={Object.keys(authUser).length> 0?<Navigate to ="/"/>:<Login/>}/>
    <Route path="/my-appointment" element={Object.keys(authUser).length >0?<MyAppointment/>:<Login/>}/>
    <Route path="/appointment/:docId" element={Object.keys(authUser).length >0?<Appointment/>:<Login/>}/>
    <Route path="/my-profile" element={Object.keys(authUser).length> 0?<MyProfile/>:<Login/>}/>

  </Routes>
  <Footer/>
</div>

  </>
  );
}





export default App
