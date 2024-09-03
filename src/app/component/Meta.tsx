import React from 'react';

const Meta = () => {
  return (
    <div className="bg-gray-200 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl  text-center mb-8 text-black">The Fashion Store</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              src: "dev3.png",
              alt: "Necklace",
              title: "FACHIONS",
              description: "Examples: Oversized hoodies, graphic tees, sneakers, bucket hats, cargo pants..",
            },
            {
              src: "dev4.png",
              alt: "Jewelry Set",
              title: "FACHIONS ",
              description: "Examples: Oversized hoodies, graphic tees, sneakers, bucket hats, cargo pants..",
            },
            {
              src: "dev5.png",
              alt: "Earrings",
              title: "FACHIONS",
              description: "Examples: Oversized hoodies, graphic tees, sneakers, bucket hats, cargo pants..",
            },
            {
                src: "dev6.png",
                alt: "Earrings",
                title: "FACHIONS",
                description: "Examples: Oversized hoodies, graphic tees, sneakers, bucket hats, cargo pants..",
              },
              {
                src: "dev7.png",
                alt: "Earrings",
                title: "FACHIONS",
                description: "Examples: Oversized hoodies, graphic tees, sneakers, bucket hats, cargo pants..",
              },
              {
                src: "dev8.png",
                alt: "Earrings",
                title: "FACHIONS",
                description: "Examples: Oversized hoodies, graphic tees, sneakers, bucket hats, cargo pants..",
              },
              {
                src: "dev9.png",
                alt: "Earrings",
                title: "FACHIONS",
                description: "Examples: Oversized hoodies, graphic tees, sneakers, bucket hats, cargo pants..",
              },
              {
                src: "dev10.png",
                alt: "Earrings",
                title: "FACHIONS",
                description: "Examples: Oversized hoodies, graphic tees, sneakers, bucket hats, cargo pants..",
              },
              {
                src: "dev11.png",
                alt: "Earrings",
                title: "FACHIONS",
                description: "Examples: Oversized hoodies, graphic tees, sneakers, bucket hats, cargo pants..",
              },
              {
                src: "dev12.png",
                alt: "Earrings",
                title: "FACHIONS",
                description: "Examples: Oversized hoodies, graphic tees, sneakers, bucket hats, cargo pants..",
              },
              {
                src: "dev13.png",
                alt: "Earrings",
                title: "FACHIONS",
                description: "Examples: Oversized hoodies, graphic tees, sneakers, bucket hats, cargo pants..",
              },
            {
              src: "dev14.png",
              alt: "Ring",
              title: "FACHIONS",
              description: "Examples: Oversized hoodies, graphic tees, sneakers, bucket hats, cargo pants..",
            }
          ].map((item, index) => (
            <div key={index} className="relative group">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h2 className="text-lg md:text-xl ">{item.title}</h2>
                <p className="text-xs md:text-sm mt-2">{item.description}</p>
                <button className="mt-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white">
                  VIEW PRODUCTS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meta
