import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TopCategories from './components/TopCategories';
import TopMilkShakes from './components/TopMilkShakes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-coffee-cream">
      <Header />
      <Hero />
      <TopCategories />
      <TopMilkShakes />
      <Footer />
    </div>
  );
}

export default App;