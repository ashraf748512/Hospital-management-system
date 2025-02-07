import React, { useState,useRef, useContext,useEffect } from 'react';
import { assets } from '../assets/assets'; // Ensure this file exports assets like `profile_pic`.
import { userContext } from '../context/userContext';
const MyProfile = () => {
  const inputRef = useRef(null)
  const [isEdit, setIsEdit] = useState(false);
  const {authUser,setAuthUser,updateUser}=useContext(userContext)
  
  const [userData, setUserData] = useState({
    fullName: authUser.fullName,
    profilePic:"", // Replace with the correct path or asset
    email: authUser.email,
    phone: authUser.phone,
    address:{...authUser.address},
    gender:authUser.gender,
    birthday:authUser.birthday
  });
 
  


  const handleUpdateUser=async(e)=>{
    setIsEdit((prev) => !prev)
  if(isEdit){
    try {
      const data=updateUser(userData)
      setAuthUser(data)
       
    }catch(err){
      console.log("err in handle update user "+err)
    }
  }
  }


  const handleInputChange = (key, value) => {
    setUserData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const handleOpenFileInput = () => {
    inputRef.current.click();
  };
  return (
    <div className="max-w-lg mx-auto flex flex-col gap-4 text-sm p-4 border rounded-xl shadow-lg">
      {isEdit?(<div className='flex items-center justify-center '><input
          className="hidden "
          type="file"
          name="profilePic"
          ref={inputRef}
          id="image-input"
          onChange={(e) => handleInputChange('profilePic', e.target.files[0])}
        />
        <label htmlFor="image-input">
        <button onClick={handleOpenFileInput} className='  ' >
          <img className='border border-black w-36 h-36 rounded-full mx-auto' src={assets.userImage} alt="" />
          <span>image</span>
        </button>
      </label> 
      </div>
      ):( <img
        className="w-36 rounded-full mx-auto"
        src={userData.profilePic}
        alt="User Profile"
      />)}
     
      {isEdit ? (
        <input
          className="bg-gray-50 text-lg font-medium w-full p-2 rounded"
          type="text"
          value={userData.fullName}
          onChange={(e) => handleInputChange('fullName', e.target.value)}
        />
      ) : (
        <p className="font-medium text-lg text-neutral-800 text-center">
          {userData.fullName}
        </p>
      )}

      <div className="text-left">
        <p className="font-semibold">Contact Information</p>
        <div className="mt-2">
          <p>Email ID:</p>
          {isEdit ? (
            <input
              className="bg-gray-50 w-full p-2 rounded text-primary"
              type="email"
              value={userData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          ) : (
            <p className='text-primary'>{userData.email}</p>
          )}

          <p className="mt-2">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-50 w-full p-2 rounded text-primary"
              type="text"
              value={userData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
          ) : (
            <p className='text-primary'>{userData.phone}</p>
          )}

          <p className="mt-2">Address:</p>
          {isEdit ? (
            <>
              <input
                className="bg-gray-50 w-full p-2 rounded mt-1"
                type="text"
                value={userData.address?.line1}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
              />
              <input
                className="bg-gray-50 w-full p-2 rounded mt-1"
                type="text"
                value={userData.address?.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
              />
            </>
          ) : (
            <>
              <p>{userData.address?.line1}</p>
              <p>{userData.address?.line2}</p>
            </>
          )}
        </div>
      </div>
      <div className="text-left">
        <p className="font-semibold">Basic Information</p>
        <div className="mt-2">
          <p>Gender:</p>
          {isEdit ? (
            <select
              className="bg-gray-50 w-full p-2 rounded "
               name="gender"
              value={userData.gender}
              onChange={(e) => handleInputChange('gender', e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              </select>
          ) : (
            <p>{userData.gender}</p>
          )}

          <p className="mt-2">Birthday:</p>
          {isEdit ? (
            <input
              className="bg-gray-50 w-full p-2 rounded "
              type="date"
              value={userData.birthday}
              onChange={(e) => handleInputChange('birthday', e.target.value)}
            />
          ) : (
            <p>{userData.birthday}</p>
          )}

    
        </div>
      </div>

      <button
        className="bg-primary text-white py-2 px-4 rounded mt-4"
        onClick={ handleUpdateUser}
      >
        {isEdit ? "Save" : "Edit Profile"}
      </button>
    </div>
  );
};

export default MyProfile;
