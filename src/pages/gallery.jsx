import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Gallery from '../components/gallery'
import GalleryPhoto from '../components/galleryPhoto'

const gallery = () => {
  return (
    <> 
    <Navbar />
        <main>
          <GalleryPhoto />
          <Gallery />
        </main>
        <Footer />
    </>
  )
}

export default gallery