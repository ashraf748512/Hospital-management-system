import { createContext ,useState} from "react";
import axios from 'axios';
export const userContext=createContext()

const UserContextProvider=(props)=>{

   const [authUser,setAuthUser]=useState({})

   const signup=async( { fullName, email, password })=>{
  try {
     const response = await axios.post(
          'http://localhost:8000/auth/signup',
          { fullName, email, password },
          { withCredentials: true }
        );
        const data={
          ...response.data,
          _id:response.data._id,
          fullName:response.data.fullName,
          email:response.data.email
          
        }
        return data
  } catch (error) {
    console.log("error  occur in userContext signup "+error)
  }
   }
   const login=async( { email, password })=>{
    try {
        const response = await axios.post(
             'http://localhost:8000/auth/login',
             {  email, password },
             { withCredentials: true }
           );
           const data={
             ...response.data,
             _id:response.data._id,
             fullName:response.data.fullName,
             email:response.data.email
             
           }
           return data
     } catch (error) {
       console.log("error  occur in userContext login "+error)
     }
   }
   const logout=()=>{
    try {
        const response =  axios.get(
             'http://localhost:8000/auth/logout',
           
             { withCredentials: true }
           );
           
           return response.data
     } catch (error) {
       console.log("error  occur in userContext login "+error)
     }
   }
   const updateUser=async(userData)=>{
    try {
        let response;
        
          response = await axios.put(
            `http://localhost:8000/user/${authUser._id}`,
            {...userData},
            { withCredentials: true }
          );
          setAuthUser(response.data)
         
      }catch(error){
        console.log("error in userContext update user "+error)
      }
   }
   const checkAuthUser=async()=>{
    try {
        let response;
        
          response = await axios.get(
            `http://localhost:8000/auth/check-authUser`,
            { withCredentials: true }
          );
          setAuthUser(response.data)
         
      }catch(error){
        console.log("error in userContext checkAuthUser "+error)
      }
   }
   
    const value={
     
     authUser,
     setAuthUser,
     signup,
     login,
     updateUser,
     logout,
     checkAuthUser
    }
    return (
        <userContext.Provider value={value}>
          {props.children}
        </userContext.Provider>
    )
}

export default UserContextProvider