import React from 'react'
import HomeCategories from '../components/HomeComponents/HomeCategories/HomeCategories'
import Ingredients from '../components/HomeComponents/Ingredients/Ingredients'
import HomeHero from '../components/HomeComponents/HomeHero/HomeHero'
import Safe from '../components/HomeComponents/Safe/Safe'
import BestSellers from '../components/HomeComponents/BestSellers/BestSellers'

const Home = () => {
  return (
    <div>
      <HomeHero/>
      <HomeCategories/>
      <Safe/>
      <Ingredients/>
      <BestSellers/>
    </div>
  )
}

export default Home