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
import Services from './pages/Services';
import RequestAQuote from './pages/RequestAQuote';

function App() {
  //constants

  return (
    <div className='app'>
      <Navbar />
      <div className='mainContent'>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/services' element={ <Services/> } />
          <Route path='/requestaquote' element={ <RequestAQuote/> } />
          <Route path='/about' element= { <About /> } />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
