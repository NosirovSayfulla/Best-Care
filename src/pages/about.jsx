import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import AboutPhoto from '../components/aboutPhoto'
import AboutEdit from '../components/aboutEdit'
import AboutCreate from '../components/aboutCreate'
import Contact from '../components/contact'
import AllHeaders from '../components/aboutPhoto'

const about = () => {
  return (
    <>
        <Navbar />
        <main>
            <AboutPhoto />
            <AboutEdit />
            <AboutCreate />
            <Contact /> 
        </main>
        <Footer />
    </>
  )
}

export default about