// Packages
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Styling
import './styles/App.sass';

// Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import RequestAQuote from './pages/RequestAQuote';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='mainContent'>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/about' element= { <About /> } />
          <Route path='/services' element={ <Services/> } />
          <Route path='/contact' element= { <Contact /> } />
          <Route path='/requestaquote' element={ <RequestAQuote/> } />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
