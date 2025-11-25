import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-96 bg-gradient-to-r from-coffee-dark to-coffee-brown overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/images/coffee-beans-hero.jpg" 
          alt="Coffee beans in a white cup" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="text-white max-w-md">
          <p className="text-lg mb-2 tracking-wide">Freshly Roasted</p>
          <h1 className="text-5xl font-bold mb-8 tracking-wider">
            COFFEE
          </h1>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-coffee-dark transition-all duration-300 font-medium">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;