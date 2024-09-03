import React from 'react';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Fashion Store</h1>
      
      {/* Store Description */}
      <p className="text-lg mb-8">
        Discover the latest trends and timeless styles at our fashion store. From chic everyday wear to bold statement pieces, we offer a curated collection for every fashion enthusiast. Embrace your unique style with our range of clothing, accessories, and footwear, crafted with quality and elegance in mind.
      </p>
      
      {/* Section for New Arrivals */}
      <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>
      <p className="text-lg mb-8">
        Stay ahead of the fashion curve with our newest arrivals! Explore our latest collection featuring vibrant prints, modern cuts, and exquisite fabrics. Whether you're looking for a wardrobe refresh or a special occasion outfit, we've got you covered with the best of the season.
      </p>
      
      {/* Section for Exclusive Offers */}
      <h2 className="text-2xl font-bold mb-4">Exclusive Offers</h2>
      <p className="text-lg mb-8">
        Don’t miss out on our exclusive offers! Sign up for our newsletter to receive the latest news on promotions, special events, and members-only discounts. Shop smart and look fabulous with our unbeatable deals on your favorite styles.
      </p>
      
      {/* Call to Action Button */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Shop Now
      </button>
      
      {/* Footer Section */}
      <p className="mt-4">Visit Our Store Today</p>
    </div>
  );
};

export default App;
