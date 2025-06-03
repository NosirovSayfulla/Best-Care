import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./index.css";
import './i18n'
import About from "./pages/about";
// import Contact from "./pages/Contact";
import Products from './pages/products'
import Certificate from './pages/certificate'
import News from './pages/news'
import Gallery from './pages/gallery'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         {/* <Route path="/contact" element={<Contact />} />  */}
         <Route path='/products' element={<Products />} />
         <Route path='/certificate' element={<Certificate />} />
         <Route path='/news' element={<News />} />
         <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;
