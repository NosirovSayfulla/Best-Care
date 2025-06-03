import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import NewsPhoto from '../components/newsPhoto'
import News from '../components/news'
import Contact from '../components/contact'

const news = () => {
  return (
    <>
    <Navbar />
        <main> 
            <NewsPhoto />
            <News />
            <Contact />
        </main>
    <Footer />
    </>
  )
}

export default news