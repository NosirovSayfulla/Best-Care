import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ProductPhoto from '../components/productPhoto'
import SearchEdit from '../components/searchEdit'
import ProductsEdit from '../components/productsEdit'
import NewProducts from '../components/newProducts'
import  Contact  from '../components/contact'

const products = () => {
  return (
    <>
        <Navbar />
        <main>
            <ProductPhoto />
            <SearchEdit />
            <ProductsEdit />
            <NewProducts />
            <Contact />
        </main>
        <Footer />
    </>
  )
}

export default products