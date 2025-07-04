import React from 'react'
import Slider from './Slider'
import Introduce from './Introduce'
import FeaturedMugs from './FeaturedMugs'
import MoreProduct from './MoreProduct'
import GetourCoffee from './GetourCoffee'
import BlogSection from './BlogSection'

const Home = () => {
  return (
    <div>
      <Slider/>
      <Introduce/>
      <FeaturedMugs/>
      <MoreProduct/>
      <GetourCoffee/>
      <BlogSection/>
    </div>
  )
}

export default Home
