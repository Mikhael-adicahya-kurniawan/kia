'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const LandingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const heroImages = [
    '/images/logopink2.jpg',
    '/images/foto-depan.jpg',
    '/images/foto-depan1.jpg',
    '/images/foto-depan2.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const products = [
    { img: '/images/Canvas-Crop-Shirt.jpg', title: 'Canvas Crop Shirt', price: 'Rp. 165.000', category: 'Baju' },
    { img: '/images/blouse2.jpg', title: 'Blouse Kemeja Oversized', price: 'Rp. 220.000', category: 'Baju' },
    { img: '/images/Rok-Plisket.jpg', title: 'Rok Plisket', price: 'Rp. 165.000', category: 'Rok' },
    { img: '/images/Jacket-Tie-Dye1.jpg', title: 'Denim Jacket Tie Dye', price: 'Rp. 150.000', category: 'Denim' },
    { img: '/images/Cherry-Crop-Shirt.jpg', title: 'Cherry Crop Shirt', price: 'Rp. 100.000', category: 'Baju' },
    { img: '/images/Shirt-Cargo-Crop-Zipper.jpg', title: 'Shirt Cargo Crop Zipper', price: 'Rp. 165.000', category: 'Baju' },
    { img: '/images/Flower-Vintage-Top.jpg', title: 'Flower Vintage Top', price: 'Rp. 150.000', category: 'Baju' },
    { img: '/images/Salifa-Plisket- Blouse.jpg', title: 'Salifa Plisket Blouse', price: 'Rp. 150.000', category: 'Baju' },
    { img: '/images/T-Shirt-Stripe .jpg', title: 'T-Shirt Stripe Blue', price: 'Rp. 150.000', category: 'Baju' },
    { img: '/images/Crop-Cardigan-Fur.jpg', title: 'Crop Cardigan Fur', price: 'Rp. 150.000', category: 'Baju' },
    { img: '/images/Flower-T-Shirt.jpg', title: 'Flower T-Shirt', price: 'Rp. 85.000', category: 'Baju' },
    { img: '/images/Korean-Cardigan.jpg', title: 'Korea Cardigan', price: 'Rp. 140.000', category: 'Baju' },
    { img: '/images/Korean-Blouse.jpg', title: 'Korean Blouse', price: 'Rp. 145.000', category: 'Baju' },
    { img: '/images/Korean-Cardigans.jpg', title: 'Korea Cardingan', price: 'Rp. 150.000', category: 'Baju' },
    { img: '/images/AHDANM-SWEATER.jpg', title: 'Ahdanm Sweater', price: 'Rp. 100.000', category: 'Sweater' },
    { img: '/images/VOGUE-Long-SLEEVES.jpg', title: 'Vogue Long Sleeves', price: 'Rp. 75.000', category: 'Baju' },
  ];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <section className="bg-creammuda min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <section className="py-32 relative z-10">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 mt-10 bg-cream rounded-70 shadow-lg overflow-hidden px-4 sm:px-6 lg:px-8">
            {/* Text Section */}
            <div className="flex-1 text-center md:text-left p-6 sm:p-10">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                Welcome to Kia&apos;s Collection
              </h1>
              <p className="text-sm sm:text-md text-white mb-6">
                Discover a world of happiness with our exclusive collection of colorful and vibrant products!
              </p>
              <Link
                href="https://vt.tiktok.com/ZSjBgCGR9/?page=Mall"
                target="_blank"
                className="inline-block bg-white text-cream hover:bg-creammuda py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-sm sm:text-lg font-semibold shadow hover:scale-105 transform transition-all"
              >
                Start Shopping
              </Link>
            </div>

            {/* Image Section */}
            <div className="flex-1">
              <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden p-4 sm:p-8">
                <Image
                  src={heroImages[currentImageIndex]}
                  alt="Hero Image"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover rounded-70"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Featured Products Section */}
      <div id="our-products" className="border-collapse mx-auto px-4 text-center -mt-8">
        <h2 className="text-4xl font-extrabold text-white mb-16 border-collapse bg-cream rounded-lg p-4"> {/*border-collapse dihapus coba*/}
          Our Joyful Products
        </h2>

        {/* Category Filter */}
        <div className="flex justify-end mb-8">
          <div className="flex items-center space-x-2">
            <span className="text-gray-700 font-semibold">Sort by:</span>
            <select
              className="bg-white text-gray-800 py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Baju">Baju</option>
              <option value="Denim">Denim</option>
              <option value="Rok">Rok</option>
              <option value="Dress">Dress</option>
              <option value="Sweater">Sweater</option>


            </select>
          </div>
        </div>

        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ml-7 mr-7">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-cream rounded-50 shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
            >
              <Image
                src={product.img}
                alt={product.title}
                width={300}
                height={200}
                className="rounded-50 mb-4 mt-2"
              />
              <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
              <p className="text-lg text-hijau font-semibold">{product.price}</p>

              {/* Conditional Redirect */}
              <Link
                href={
                  product.title === 'Canvas Crop Shirt'
                    ? 'https://vt.tokopedia.com/t/ZSjmcBxdg/'
                    : product.title === 'Blouse Kemeja Oversized'
                      ? 'https://vt.tokopedia.com/t/ZSjmcBWtD/'
                      : product.title === 'Rok Plisket'
                        ? 'https://vt.tokopedia.com/t/ZSjmcnYH1/'
                        : product.title === 'Denim Jacket Tie Dye'
                          ? 'https://vt.tokopedia.com/t/ZSjmctQA9/'
                          : product.title === 'Cherry Crop Shirt'
                            ? 'https://vt.tokopedia.com/t/ZSjmc4cLx/'
                            : product.title === 'Shirt Cargo Crop Zipper'
                              ? 'https://vt.tokopedia.com/t/ZSjmcQnYu/'
                              : product.title === 'Denim Jacket'
                                ? 'https://vt.tokopedia.com/t/ZSjm3j8QW/'
                                : product.title === 'Wunago Shaved Dress'
                                  ? 'https://vt.tokopedia.com/t/ZSjm3Myhf/'
                                  : product.title === 'Playdress Blouse Floral'
                                    ? 'https://vt.tokopedia.com/t/ZSjm3khqA/'
                                    : product.title === 'Salifa Plisket Blouse'
                                      ? 'https://vt.tokopedia.com/t/ZSjm3Jd1y/'
                                      : product.title === 'T-Shirt Stripe Blue'
                                        ? 'https://vt.tokopedia.com/t/ZSjm3fHYv/'
                                        : product.title === 'Crop Cardigan Fur'
                                          ? 'https://vt.tokopedia.com/t/ZSjm3UQHL/'
                                          : product.title === 'Flower T-Shirt'
                                            ? 'https://vt.tokopedia.com/t/ZSjm3ednH/'
                                            : product.title === 'Korea Cardigan'
                                              ? 'https://vt.tokopedia.com/t/ZSjm3RT4d/'
                                              : product.title === 'Korean Blouse'
                                                ? 'https://vt.tokopedia.com/t/ZSjm3BscL/'
                                                : product.title === 'Korea Cardingan'
                                                  ? 'https://vt.tokopedia.com/t/ZSjm3xrkP/'
                                                  : product.title === 'Long Dress Wunago'
                                                    ? 'https://vt.tokopedia.com/t/ZSjm37HVF/'
                                                    : product.title === 'Ahdanm Sweater'
                                                      ? 'https://vt.tokopedia.com/t/ZSjm3uCnk/'
                                                      : product.title === 'Vogue Long Sleeves'
                                                        ? 'https://vt.tokopedia.com/t/ZSjm3aY1T/'
                                                        : product.title === 'Flower Vintage Top'
                                                          ? 'https://vt.tokopedia.com/t/ZSjm368qf/'
                                                          : '/product-details'

                }
                target="_blank" // Opens the link in a new tab
                className="mt-4 bg-gradient-to-r bg-white text-black py-2 px-4 rounded-lg text-sm font-semibold hover:scale-105 transform transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        {/* Button Lebih Banyak */}
        <div className="flex justify-center mt-16">
          <Link
            href="https://vt.tiktok.com/ZSjBgCGR9/?page=Mall"
            target="_blank"
            className="bg-white text-cream py-4 px-8 rounded-lg text-xl font-semibold hover:bg-gradient-to-r hover:scale-105 transform transition-all"
          >
            Tampilkan Lebih Banyak?
          </Link>
        </div>
      </div>

      {/* Testimonials */}
      <section className="bg-gradient-to-br bg-creammuda py-20 text-center mt-16">
        <h2 className="text-4xl font-extrabold text-green-700 mb-8">What Our Customers Say</h2>
        <p className="text-lg mb-12 text-gray-800">Join thousands of happy customers who love shopping with us!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Testimonial 1 */}
          <div className="bg-cream rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Amazing Quality!</h3>
            <p className="text-white">
              &quot;The products are fantastic! I love the vibrant colors and high quality. I will definitely shop here again.&quot;
            </p>
            <span className="block mt-4 text-sm font-medium text-white">- Jane Doe</span>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-cream rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Fast Delivery!</h3>
            <p className="text-white">
              &quot;I was surprised by how quickly my order arrived. Excellent service and attention to detail.&quot;
            </p>
            <span className="block mt-4 text-sm font-medium text-white">- John Smith</span>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-cream rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Highly Recommended!</h3>
            <p className="text-white">
              &quot;This store has become my go-to for unique and quality products. Highly recommended!&quot;
            </p>
            <span className="block mt-4 text-sm font-medium text-white">- Emily Clark</span>
          </div>

        </div>
      </section>


      {/* Call to Action */}
      <section className="bg-gradient-to-r bg-creammuda py-20 text-center">
        <h2 className="text-4xl font-bold mb-4 text-green-700">Ready to Shop?</h2>
        <p className="text-lg mb-6 text-black">Don’t miss out on exclusive deals. Start your journey today!</p>
        <Link
          href="https://vt.tiktok.com/ZSjBgCGR9/?page=Mall"
          target="_blank"
          className="bg-white text-cream py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gradient-to-r transition"
        >
          Start Shopping
        </Link>
      </section>

    </section>
  );
};

export default LandingPage;