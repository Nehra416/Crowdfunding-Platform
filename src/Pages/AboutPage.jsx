import About from '@/Components/About'
import AboutDetails from '@/Components/AboutDetails'
import Fotter from '@/Components/Fotter'
import Navbar from '@/Components/Navbar'
import Offer from '@/Components/Offer'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <AboutDetails />
      {/* <About /> */}
      <Offer />
      <Fotter />
    </div>
  )
}

export default AboutPage