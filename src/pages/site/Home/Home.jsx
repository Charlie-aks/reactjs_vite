import React from 'react'
import Slider from './Slider'
import { IntroduceSection, GetCoffeeSection } from './HomeSections'
import { FeaturedMugsSection, MoreProductsSection } from './HomeProducts'
import BlogSection from './BlogSection'

const Home = () => {
  return (
    <div>
      <Slider/>
      <IntroduceSection/>
      <FeaturedMugsSection/>
      <MoreProductsSection/>
      <GetCoffeeSection/>
      <BlogSection/>
    </div>
  )
}

export default Home
