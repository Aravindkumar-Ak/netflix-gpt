import  { useEffect }  from 'react'
import { useDispatch } from 'react-redux'
import { API_URL } from '../utilis/constants'
import { addNowPlayingMovies } from '../utilis/movieSlice'

const useNowPlayingMovies = () => {
    const dispatch=useDispatch()
    const fetchData=async()=>{
      const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_URL)
      const json=await data.json();
    // console.log(json);
      dispatch(addNowPlayingMovies(json.results))
    }
    
    useEffect(()=>{
    fetchData()
    },[])
}

export default useNowPlayingMovies