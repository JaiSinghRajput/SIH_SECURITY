import React from 'react'
import HeroSec from "../HeroSec/HeroSec"
import About from "../About/About"
import BannerSlider from '../BannerSlider/BannerSlider'
function Home() {
  return (
    <>
    <BannerSlider/>
    <HeroSec/>
    <About/>
    </>
  )
}

export default Home