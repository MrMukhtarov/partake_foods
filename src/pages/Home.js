import React from 'react'
import HomeCategories from '../components/HomeCategories/HomeCategories'
import Ingredients from '../components/HomeComponents/Ingredients/Ingredients'
import HomeHero from '../components/HomeHero/HomeHero'
import Safe from '../components/Safe/Safe'

const Home = () => {
  return (
    <div>
      <HomeHero/>
      <HomeCategories/>
      <Safe/>
      <Ingredients/>
    </div>
  )
}

export default Home