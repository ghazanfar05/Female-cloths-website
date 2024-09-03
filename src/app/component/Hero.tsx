import React from 'react';

const Hero = () => {
  const products = [
    {
      id: 'HF-3009',
      name: 'YELLOW 3Pcs',
      price: '59.00$',
      imageUrl: 'dev19.png',
      status: 'Sold Out',
    },
    {
      id: 'HF-3007',
      name: 'BLACK 3Pcs',
      price: '59.00$',
      imageUrl: 'dev34.png',
      status: 'Sold Out',
    },
    {
      id: 'HF-3001',
      name: 'JEANS 3Pcs',
      price: '49,590$',
      imageUrl: 'dev21.png',
      status: 'Sold Out',

    },
    {
      id: 'HF-3005',
      name: 'NAVY BLUE 3Pcs',
      price: '44,90$',
      imageUrl: 'dev25.png',
      status: 'Sold Out',
    },
    {
      id: 'HF-3003',
      name: 'L-WHITE 3Pcs',
      price: '49,90$',
      imageUrl: 'dev23.png',
      status: 'Sold Out',
    },
    {
      id: 'HF-3004',
      name: 'OUT-FITS 3Pcs ',
      price: '74,0$',
      imageUrl: 'dev24.png',
      status: 'Sold Out',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      
      <h2 className="text-4xl text-center mb-12 animate-bounce ">
        <span className="text-red-500">F</span>
        <span className="text-orange-500">A</span>
        <span className="text-yellow-500">C</span>
        <span className="text-green-500">H</span>
        <span className="text-blue-500">I</span>
        <span className="text-indigo-500">O</span>
        <span className="text-purple-500">N</span>
        <span className="text-pink-500">S</span>
        <span className="text-teal-500">O</span>
        <span className="text-cyan-500">U</span>
        <span className="text-rose-500">T</span>
        <span className="text-lime-500">F</span>
        <span className="text-amber-500">I</span>
        <span className="text-fuchsia-500">T</span>
        <span className="text-emerald-500">S</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">




            <img

              className="w-full object-cover"
              src={product.imageUrl}
              alt={product.name}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{product.id} {product.name}</h3>
              <p className="text-gray-700 text-base mb-4">Rs.{product.price}</p>
              {product.status === 'Sold Out' && (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm  text-gray-700 mr-2 mb-2">{product.status}</span>
              )}
              <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                {product.status === 'Sold Out' ? 'Sold Out' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero