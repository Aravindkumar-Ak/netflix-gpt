import React, { useEffect }  from 'react'
import { useDispatch } from 'react-redux'
import { API_URL } from '../utilis/constants'
import { addTrailerVideo } from '../utilis/movieSlice'

const useTrailerVideo = (movieId) => {
const dispatch=useDispatch()

    //fetch trailer video && update the store
  const fetchMovieDetails=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",API_URL)
    const json=await data.json();

const filterVideo=json.results.filter((video)=>video.type==="Trailer" )
const trailerVideo=filterVideo.length?filterVideo[1]:json.results[0]

dispatch(addTrailerVideo(trailerVideo))
  }

useEffect(()=>{

  fetchMovieDetails()
},[])

  
}

export default useTrailerVideo