import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './AboutMe';
import FIS from './FIS';
import FloridaBlue from './FloridaBlue';
import ContactMe from './ContactMe';
import ScrollToTop from './components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop/>
      <div style={{position: 'relative', minHeight: '100vh'}}>
        <div style={{paddingBottom: '6rem'}}>
          <Header/>
          <Routes>
            <Route path='/' element={<AboutMe/>}/>
            <Route path='/fis' element={<FIS/>}/>
            <Route path='/floridablue' element={<FloridaBlue/>}/>
            <Route path='/contact' element={<ContactMe/>}/>
          </Routes>
          <Footer/>
        </div>
      </div>
    </Router>  
  </React.StrictMode>
);

