import React from 'react'
import Banner from './Banner'
import Refer from './Refer'
import MiniBar from './MiniBar'

const Home = () => {
  return (
    <div className='w-full'>
        <MiniBar/>
        <Banner/>
        <Refer/>
    </div>
  )
}

export default Home