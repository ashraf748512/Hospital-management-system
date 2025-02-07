import React, { useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import { AppContext } from '../context/AppContext';
import {toast} from 'react-toastify'
import {useNavigate} from "react-router-dom"
import { userContext } from '../context/userContext';
const Login = () => {
  const [state, setState] = useState('Sign Up'); // Toggle between 'Sign Up' and 'Login'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  // const { user, setUser } = useContext(AppContext);
  const {signup,login,setAuthUser}=useContext(userContext)
  const navigate=useNavigate()
  // Debugging: Track user updates
 

  const onSubmitHandler =  (event) => {
    event.preventDefault();

    try {
      let data;
      if (state === 'Sign Up') {
      data= signup({fullName,email,password})
      toast.success(" Account created successfully ")
        navigate("/my-profile")
      } else {
        data=login({email,password})
        toast.success("successfully login")
        navigate("/")
      }
      setAuthUser(data); // Update context with the API response
      // Clear inputs after successful submission
      setFullName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      toast.error('Error during authentication:', error);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg"
      >
        <p className="text-2xl font-semibold">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </p>
        <p>
          Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book an
          appointment.
        </p>
        {state === 'Sign Up' && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
        )}
        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white w-full py-2 rounded-md text-base mt-3"
        >
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>
        <p className="mt-4 text-center w-full">
          {state === 'Sign Up'
            ? 'Already have an account?'
            : "Don't have an account?"}{' '}
          <button
            type="button"
            className="text-primary underline cursor-pointer ml-1"
            onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
          >
            {state === 'Sign Up' ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
