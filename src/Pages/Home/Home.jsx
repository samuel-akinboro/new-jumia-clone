import React from 'react'
import './Home.css'
import Banner from '../../components/Banner/Banner'
// import AllProducts from './components/AllProducts'
import Footer from '../../components/ConstantComponent/Footer/Footer'
import Products from '../../components/AllProducts/Products.jsx'

function Home() {
  return (
    <div className="Home">
      <Banner />
      {/* <AllProducts /> */}
      <Products />
      <Footer />
    </div>
  )
}

export default Home
