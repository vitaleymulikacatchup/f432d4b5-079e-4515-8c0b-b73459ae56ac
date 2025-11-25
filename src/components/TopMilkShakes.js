import React from 'react';
import { Heart } from 'lucide-react';

const TopMilkShakes = () => {
  const milkshakes = [
    {
      id: 1,
      name: 'Biscoff Milkshakes',
      price: '200Af',
      likes: 30,
      image: '/images/biscoff-milkshake.jpg'
    },
    {
      id: 2,
      name: 'Salted Caramel Milkshakes',
      price: '200Af',
      likes: 50,
      image: '/images/salted-caramel-milkshake.jpg'
    },
    {
      id: 3,
      name: 'Decadent Chocolate Milkshakes',
      price: '200Af',
      likes: 100,
      image: '/images/chocolate-milkshake.jpg'
    },
    {
      id: 4,
      name: 'Chocolate Milkshakes',
      price: '200Af',
      likes: 40,
      image: '/images/chocolate-milkshake-2.jpg'
    }
  ];

  return (
    <section className="py-16 px-6 bg-coffee-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-coffee-dark mb-4 tracking-wider">
            TOP Milk Shakes
          </h2>
          <p className="text-coffee-dark opacity-80">
            Explore The Recent Most Bought Shakes This Week
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milkshakes.map((milkshake) => (
            <div key={milkshake.id} className="milkshake-card">
              <img 
                src={milkshake.image} 
                alt={milkshake.name}
                className="milkshake-card-image"
              />
              <div className="milkshake-card-overlay">
                <div className="flex justify-end">
                  <div className="like-button">
                    <Heart className="w-4 h-4" />
                    <span>{milkshake.likes}</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="milkshake-title">{milkshake.name}</h3>
                  <p className="milkshake-price">{milkshake.price}</p>
                  <button className="buy-button">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopMilkShakes;