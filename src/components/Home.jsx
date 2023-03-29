import React from 'react'
import Navbar from './Navbar'
import ho from './Home.module.css'
function Home () {
  return (
    <div>
        <Navbar></Navbar>
        <div className={ho.bannerDiv}><p className={ho.homeIntro}>Home page Comming soon!!!</p></div>
     </div>
  )
}

export default Home 