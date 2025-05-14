import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Welcome from '../../Components/Welcome/Welcome'
import Visited from '../../Components/Visited/Visited'
import Query from '../../Components/Query/Query'
import Footer from '../../Components/Footer/Footer'



const home  = () => {
  return (
    <div>
          <Hero />
          <Welcome />
          <Visited />
          <Query />
          <Footer />
    </div>
  )
}

export default home 
