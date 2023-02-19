import React from 'react'
import HomeCategories from '../components/HomeComponents/HomeCategories/HomeCategories'
import Ingredients from '../components/HomeComponents/Ingredients/Ingredients'
import HomeHero from '../components/HomeComponents/HomeHero/HomeHero'
import Safe from '../components/HomeComponents/Safe/Safe'
import BestSellers from '../components/HomeComponents/BestSellers/BestSellers'
import NeighBoorHood from '../components/HomeComponents/Neighboorhood/NeighBoorHood'
import CommentsSlider from '../components/HomeComponents/CommentsSlider/CommentsSlider'
import FeaturedImage from '../components/HomeComponents/FeaturedImage/FeaturedImage'
import Social from '../components/HomeComponents/Social/Social'

const Home = () => {
  return (
    <div>
      <HomeHero/>
      <HomeCategories/>
      <Safe/>
      <Ingredients/>
      <BestSellers/>
      <NeighBoorHood/>
      <CommentsSlider/>
      <FeaturedImage/>
      <Social/>
    </div>
  )
}

export default Home