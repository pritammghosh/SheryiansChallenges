import React from 'react'
import Navbar from './componenets/Navbar'
import Home from './componenets/Home'
import Featured from './componenets/Featured'
import SectionBar from './componenets/SectionBar'
import FundingCalculator from './componenets/FundingCalculator'
import WhoWeFund from './componenets/whoWeFund'
import HighlightSection from './componenets/HighlightSection'
import LocomotiveScroll from 'locomotive-scroll';
import AboutBrand from './componenets/AboutBrand'
import Faqs from './componenets/Faqs'
import Footer from './componenets/Footer'
const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='bg-[#132A13] text-[#F6EFE7] '>
      <Navbar/>
      <Home/>
      <Featured/>
      <SectionBar/>
      <FundingCalculator/>
      <WhoWeFund/>
      <HighlightSection/>
      <AboutBrand/>
      <Faqs/>
      <Footer/>
    </div>
  )
}

export default App