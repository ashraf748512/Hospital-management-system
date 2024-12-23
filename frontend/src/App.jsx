import { useState } from 'react'
import {ToggleSwitch} from "flowbite-react"

import { NavbarLocal } from "./components/Navbar";
import {SideBarLocal} from "./components/SideBarLocal"
function App() {
  const [show, setShow] = useState(false)
  const [switch1, setSwitch1] = useState(false);

  return (
  <>
  <NavbarLocal/>
  
 
  </>
  );
}





export default App
