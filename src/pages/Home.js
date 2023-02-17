import React from 'react'
import HomeCategories from '../components/HomeComponents/HomeCategories/HomeCategories'
import Ingredients from '../components/HomeComponents/Ingredients/Ingredients'
import HomeHero from '../components/HomeComponents/HomeHero/HomeHero'
import Safe from '../components/HomeComponents/Safe/Safe'

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