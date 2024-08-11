//just for testing of components no ue in project 

import BannerSlider from "./components/BannerSlider/BannerSlider";
import ComplaintForm from "./components/ComplaintForm/ComplaintForm";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import Counter from "./components/Counter/Counter";
import HeroSec from "./components/HeroSec/HeroSec";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
    <Navbar/>
    <BannerSlider/>
    <HeroSec/>
    <Counter/>
    <ComplaintForm/>
    <ContactInfo/>
    <Footer/>
    </>
  )
}
