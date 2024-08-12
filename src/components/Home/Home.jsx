import React from 'react'
import HeroSec from "../HeroSec/HeroSec"
import About from "../About/About"
import BannerSlider from '../BannerSlider/BannerSlider'
import TrendingScams from "../ScamReports/TrendingScams"
function Home() {
  return (
    <>
    <BannerSlider/>
    <HeroSec/>
  <TrendingScams/>
    <About/>
    </>
  )
}

export default Home