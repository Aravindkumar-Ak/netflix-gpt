import React, { useRef, useState } from 'react'
import { validate } from '../utilis/validate'
import LoginHeader from './LoginHeader'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utilis/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utilis/UserSlice';
import {updateProfile } from "firebase/auth";
const Login = () => {
  const[signIn ,setSignIn]=useState(true)
  const[error,setError]=useState(null)

const dispatch=useDispatch()


  const toggleSignIn=()=>{
setSignIn(!signIn)
  }
 const name=useRef(null)
const email=useRef(null)
const password=useRef(null)

  const handleClick=()=>{
const message=
(signIn)?
validate(null,email.current.value,password.current.value):
validate(name.current.value,email.current.value,password.current.value)
setError(message)

 if(message) return ;

if(!signIn){
 
 createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      updateProfile(user, {
        displayName:name.current.value , photoURL: "https://img.lovepik.com/element/40128/7461.png_1200.png"
      }).then(() => {
const {uid,email,displayName,photoURL}=auth.currentUser;
     dispatch(addUser({
      uid:uid,
      email:email,
      displayName:displayName,
      photoURL:photoURL
     }))   
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
        setError(error.message)
      });
     
     
  
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      setError(errorCode+""+errorMessage)
    });



}else{
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode+""+errorMessage)
  })

}


  }

  return (
    <div>
        <LoginHeader/>
        <div className='absolute'>
          <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='background -img'/>
        </div>
        
        <form onSubmit={(e)=>{e.preventDefault()}} className='absolute p-12 top-[120px] left-[540px] w-3/12 h-[600px] bg-black  text-white bg-opacity-75'>
        <h1 className='my-4 text-3xl font-bold'>{signIn?"Sign In":"Sign Up"}</h1>

        {!signIn &&
        <input type='text' placeholder='Full Name' className='p-3 my-4 w-full rounded-lg border-0 outline-0 bg-slate-800 focus:border-b-2 border-orange-400' ref={name}/>}
        <input type='text' placeholder='Email' className='p-3 my-4 w-full rounded-lg border-0 outline-0 bg-slate-800 focus:border-b-2 border-orange-400' ref={email}/>
        <input type='text' placeholder='Password' className='p-3 my-4 w-full rounded-lg border-0 outline-0  bg-gray-800 focus:border-b-2 border-orange-400' ref={password}/>
<p className='text-orange-500 text-lg'>{error}</p>
         <button className='p-3 my-6 w-full bg-red-600 rounded-lg text-lg' onClick={handleClick}>{signIn?"Sign In":"Sign Up"}</button>
            <span className='text-gray-500'>{signIn?"New to Netflix":"Already Registered"}</span>
            <span className='underline text-lg cursor-pointer px-1' onClick={toggleSignIn}>{signIn?"Sign up":"Sign In"}</span>
         
        
        </form>
    </div>
  )
}

export default Login