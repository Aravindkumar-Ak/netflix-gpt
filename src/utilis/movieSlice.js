import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:'movies',
    initialState:{
        movielist:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
state.movielist=action.payload
        },
        addTrailerVideo:(state,action)=>{
state.trailerVideo=action.payload
        }
    }

})
export const {addNowPlayingMovies,addTrailerVideo}=movieSlice.actions;
export default movieSlice.reducer;