import './index.css';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import AppContextProvider from './context/AppContext.jsx';
import UserContextProvider from './context/userContext.jsx';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <UserContextProvider>
  <AppContextProvider>
  <App />
  </AppContextProvider>
  </UserContextProvider>
  
   
  </BrowserRouter>,
)
