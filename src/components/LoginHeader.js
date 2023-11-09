import React, { useEffect } from 'react'
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utilis/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utilis/UserSlice';
const LoginHeader = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
const user=useSelector(store=>store.user)


  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.

    }).catch((error) => {
      // An error happened.
    // set to error page later
    navigate("/error")
    });
  }
   useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
        const {uid,email,displayName,photoURL}= user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        console.log("signin");
        navigate("/browse")
        } else {
          dispatch(removeUser())
          navigate("/")
          console.log("signout");
        }
      });
  return()=>{
    unsubscribe()
    console.log("unsubscribe");
  }
  },[])


  
  return (
    <div className='bg-gradient-to-b from-black fixed z-50 w-full flex justify-between'>
      <div className='w-[200px] '>
    <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
    alt='netflix-logo'/>
    </div>
    {user && 
    (<div className='flex justify-between items-center'>
      <img src={user?.photoURL} alt='user-icon' className='w-[65px]'/>
      <button className='bg-red-600 p-2 rounded-lg text-md text-white font-bold mx-2' onClick={handleSignOut}>sign Out</button>
    </div>)}
    </div>
  )
}

export default LoginHeader