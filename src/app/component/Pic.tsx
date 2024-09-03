import React from 'react';

function Pic() {
  return (
    <section className="bg-gray-100 text-gray-900 min-h-screen flex flex-col items-center justify-center py-16">
     <div className="container mx-auto px-6">
  <div className="max-w-6xl mx-auto bg-gray-900 rounded-xl shadow-2xl overflow-hidden md:flex md:flex-row-reverse">
    <div className="w-full md:w-1/2 relative transition-all duration-300 ease-in-out transform hover:scale-105">
      <img
        src="dev36.png"
        alt="Fashion Overview"
        className="object-cover w-full h-80 md:h-full transition-transform duration-500 ease-out hover:scale-105 "
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80 transition-opacity duration-500 hover:opacity-60"></div>
    </div>
    <div className="w-full md:w-1/2 p-12 flex flex-col justify-center space-y-4">
      <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
        Elevate Your Look with Artistic Fashion
      </h2>
      <p className="text-lg text-gray-300">
        Discover our exclusive collection where art meets fashion. Unveil unique designs that blend bold patterns and sophisticated cuts, ensuring you make a statement.
      </p>
      <p className="text-lg text-gray-300">
        Experience elegance redefined through high-quality craftsmanship and innovative styles. Transform your wardrobe with our artistic pieces.
      </p>
      <a
        href="#"
        className="inline-block bg-transparent border border-white text-white py-3 px-8 text-center rounded-lg shadow-md hover:bg-gray-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Explore Collection
      </a>
    </div>
  </div>
</div>


      <div className="py-8 mt-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Grid Item 1 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="dev7.png"
                alt="Man"
                className="w-full h-64 object-cover transition-transform duration-500 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white font-medium text-xl">Now See!</p>
              </div>
            </div>

            {/* Grid Item 2 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="dev9.png"
                alt="Man"
                className="w-full h-64 object-cover transition-transform duration-500 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white font-medium text-xl">Now See!</p>
              </div>
            </div>

            {/* Grid Item 3 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="dev8.png"
                alt="Man"
                className="w-full h-64 object-cover transition-transform duration-500 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white font-medium text-xl">Now See!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pic;
