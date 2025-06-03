import React from 'react'
import Navbar from '../components/navbar'
import Search from '../components/search'
import Header from '../components/header'
import About from '../components/about'
import Products from '../components/products'
import NewProducts from '../components/newProducts'
import Hamkor from '../components/hamkor'
import Contact from '../components/contact'
import Footer from '../components/footer'

const home = () => {
  return (
    <>
        <Navbar />
        <main>
            <Search />
            <Header />
            <About />
            <Products />
            <NewProducts />
            <Hamkor />
            <Contact />
        </main>
        <Footer />
    </>
  )
}

export default home