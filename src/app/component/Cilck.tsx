import React from 'react';

const Click = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-4 justify-center  mb-10">
        {[
          { src: "dev26.png", alt: "Image 1", text: "Click Here" },
          { src: "dev27.png", alt: "Image 2", text: "Click Here" },
          { src: "dev28.png", alt: "Image 3", text: "Click Here" },
          { src: "dev29.png", alt: "Image 4", text: "Click Here" },
          { src: "dev30.png", alt: "Image 5", text: "Click Here" },
          { src: "dev31.png", alt: "Image 6", text: "Click Here" },
          { src: "dev32.png", alt: "Image 7", text: "Click Here" },
          { src: "dev33.png", alt: "Image 8", text: "Click Here" },
          { src: "dev20.png", alt: "Image 9", text: "Click Here" },
          { src: "dev35.png", alt: "Image 10", text: "Click Here" },
        ].map(({ src, alt, text }, index) => (
          <div key={index} className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/6 h-auto group">
            <img
              src={src}
              alt={alt}
              width={1920}
              height={100}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-xl"
            />
            <div className="absolute inset-0 flex items-center justify-center   text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <span className="text-lg px-2 py-2 rounded-md">{text}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4">
        {/* Sections */}
        <section className="flex flex-col md:flex-row items-start justify-between p-4 md:p-6 lg:p-8 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg shadow-lg mb-6">
          {/* Left Paragraph */}
          <div className="flex-1 p-4 bg-white rounded-lg shadow-md md:mr-4 mb-4 md:mb-0">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-purple-600 mb-2">Fabrics and Luxurious Texture</h2>
            <p className="text-sm md:text-base text-black leading-relaxed">
              The "Ethereal Wanderlust" collection is a celebration of the interplay between the
              fantastical and the familiar. Inspired by the serene landscapes and mystical allure of ancient myths,
              this collection captures the essence of an otherworldly journey through fabrics that flow like gentle breezes
              and silhouettes that evoke both grace and strength.
              Each piece in the collection embodies a harmonious blend of timeless elegance and
              modern sophistication. Luxurious materials such as silk, chiffon, and cashmere are
              paired with intricate detailing—delicate embroidery,
            </p>
          </div>
          {/* Right Paragraph */}
          <div className="flex-1 p-4 bg-white rounded-lg shadow-md md:ml-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-purple-600 mb-2">Creative Outfits Outerwear</h2>
            <p className="text-sm md:text-base text-black leading-relaxed">
              ethereal prints, and subtle embellishments—that create a sense of both grandeur and intimacy.
              The color palette ranges from soft pastels to deep jewel tones, reflecting the changing hues of twilight and dawn.
              The "Ethereal Wanderlust" collection is designed for the contemporary woman who embraces both her inner
              dreamer and her worldly ambitions. It is an invitation to embark on a style journey that transcends the
              ordinary and explores the poetic beauty of the unknown. Each garment is crafted to inspire confidence and
              evoke a sense of wonder, making every moment a magical experience.
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-start justify-between p-4 md:p-6 lg:p-8 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg shadow-lg">
          {/* Left Paragraph */}
          <div className="flex-1 p-4 bg-white rounded-lg shadow-md md:mr-4 mb-4 md:mb-0">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-purple-600 mb-4">Graphic Maxi Dress</h2>
            <p className="text-sm md:text-base text-black leading-relaxed">
              Outfit: A graphic print or brightly colored maxi dress with a flowy silhouette, paired with a leather jacket or denim jacket.
              Footwear: Ankle boots or strappy sandals, depending on the season.
              Accessories: A simple belt to cinch the waist or a wide-brim hat for a boho vibe.
              Why it Works: The dress is a versatile statement piece that can be styled up or down and can work for various occasions.
            </p>
          </div>
          {/* Right Paragraph */}
          <div className="flex-1 p-4 bg-white rounded-lg shadow-md md:ml-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-purple-600 mb-4">Bold Blazer</h2>
            <p className="text-sm md:text-base text-black leading-relaxed">
              Outfit: A bright-colored or patterned blazer (like neon pink or floral print) paired with a simple white T-shirt, high-waisted jeans, and classic white sneakers or ankle boots.
              Accessories: Minimalist jewelry (e.g., small hoop earrings or a delicate necklace) to keep the focus on the blazer.
              Why it Works: The blazer serves as the statement piece, adding color and structure to a casual outfit.
            </p>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Click
