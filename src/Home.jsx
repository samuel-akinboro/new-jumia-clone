import React from 'react'
import './Home.css'
import Banner from './components/Banner'
import AllProducts from './components/AllProducts'
import Footer from './components/Footer'

function Home() {
  return (
    <div className="Home">
      <Banner />
      <AllProducts />
      <Footer />
    </div>
  )
}

export default Home
