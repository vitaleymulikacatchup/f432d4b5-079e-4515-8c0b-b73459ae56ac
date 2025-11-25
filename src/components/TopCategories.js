import React from 'react';

const TopCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Hot Chocolate',
      image: '/images/hot-chocolate.jpg'
    },
    {
      id: 2,
      name: 'Espresso Coffee',
      image: '/images/espresso-coffee.jpg'
    },
    {
      id: 3,
      name: 'Mocha Coffee',
      image: '/images/mocha-coffee.jpg'
    },
    {
      id: 4,
      name: 'Lata Coffee',
      image: '/images/latte-coffee.jpg'
    }
  ];

  return (
    <section className="py-16 px-6 bg-coffee-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-coffee-dark mb-4 tracking-wider">
            TOP CATEGORIES
          </h2>
          <p className="text-coffee-dark opacity-80">
            Explore The Recent Most Bought Drinks This Week
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="coffee-card">
              <img 
                src={category.image} 
                alt={category.name}
                className="coffee-card-image"
              />
              <div className="coffee-card-content">
                <h3 className="coffee-card-title">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;