import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppBar from './App';
import reportWebVitals from './reportWebVitals';
import Hero from './components/Hero';
import Search from './components/Search';
import HighlightedAds from './components/HighlightedAds';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppBar />
    <Hero />
    <Search />
    <HighlightedAds />
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();
