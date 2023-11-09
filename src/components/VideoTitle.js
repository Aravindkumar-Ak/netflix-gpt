import React from 'react'

const VideoTitle = ( { title,overview}) => {
  return (
    <div className='w-screen aspect-video absolute pt-[25%] px-20 text-white '>
     <h1 className='font-bold text-5xl'>{title}</h1>
     <p className='font-semibold text-md w-1/3  my-2'>{overview.substr(0,100)}</p>
        <div className='my-4'>
            <button className='w-[120px] h-[40px] bg-red-500 rounded-sm font-semibold text-md 
             hover:bg-red-500  hover:text-black hover:scale-105 hover:transition-all' >Play</button>
            <button  className='w-[120px] h-[40px] bg-red-500 mx-2 rounded-sm font-semibold text-md bg-opacity-50
             hover:bg-red-500 hover:opacity-100 hover:text-black hover:scale-105 hover:transition-all'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;