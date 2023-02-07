import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Header from './components/header/Header';
import Home from './components/home/Home.jsx'
import Slider from './components/slider/Slider.jsx'
import ProductReview from './components/product_review/ProductReview';
import DescriptionReview from './components/description_review/DescriptionReview';
import Map from './components/map/Map.jsx'
import ProductDescription from './components/products/Products.jsx'
import Products from './components/products/Products.jsx'
import AboutUs from './components/about_us/AboutUs.jsx'
import ContactUs from './components/contact_us/ContactUs.jsx'
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Productos" element={<Products/>}/>
        <Route path="/AcercaDe" element={<AboutUs/>}/>
        <Route path="/Contactenos" element={<ContactUs/>}/>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
