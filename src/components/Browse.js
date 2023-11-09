import React from 'react'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'

import LoginHeader from './LoginHeader'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
useNowPlayingMovies();

  return (
    <div>
      <LoginHeader/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse