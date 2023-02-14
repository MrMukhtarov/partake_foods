import React from 'react'
import HomeCategories from '../components/HomeCategories/HomeCategories'
import HomeHero from '../components/HomeHero/HomeHero'
import Safe from '../components/Safe/Safe'

const Home = () => {
  return (
    <div>
      <HomeHero/>
      <HomeCategories/>
      <Safe/>
    </div>
  )
}

export default Home