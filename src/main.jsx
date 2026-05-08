import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import AboutUs from './components/AboutUs.jsx'
import Works from './components/Works.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Navbar/>
    <Home/>
    <AboutUs/>
    <Works/>
    <Footer/>
  </StrictMode>
)
