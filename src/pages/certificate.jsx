import React from 'react'
import CertificatePhoto from '../components/certificatePhoto'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Certificates from '../components/certificates'
import Contact from '../components/contact'

const certificate = () => {
  return (
    <>
    <Navbar />
        <main>
            <CertificatePhoto />
            <Certificates />
            <Contact />
        </main>
        <Footer />
    </>
  )
}

export default certificate