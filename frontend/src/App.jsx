import { useState } from 'react'
import { Routes,Route } from 'react-router';

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

function App() {
  const [show, setShow] = useState(false)
  const [switch1, setSwitch1] = useState(false);

  return (
  <>
<div className="mx-4 sm:mx-[10%]">
<Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/doctors" element={<Doctors/>}/>
    <Route path="/doctors/:speciality" element={<Doctors/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/my-appointment" element={<MyAppointment/>}/>
    <Route path="/appointment/:docId" element={<Appointment/>}/>
    <Route path="/my-profile" element={<MyProfile/>}/>

  </Routes>
  <Footer/>
</div>

  </>
  );
}





export default App
