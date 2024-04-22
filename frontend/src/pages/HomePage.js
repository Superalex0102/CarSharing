import React from 'react';
import AppAppBar from '../components/Navbar';
import Hero from '../components/Hero';
import Search from '../components/Search';
import HighlightedAds from '../components/HighlightedAds';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <React.StrictMode>
      <AppAppBar />
      <Hero />
      <Search />
      <HighlightedAds />
      <Footer />
    </React.StrictMode>
  );
}

export default HomePage;