import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import banner1 from '../img/banner-1.webp';
import banner2 from '../img/banner-2.jpg';
import banner3 from '../img/banner-3.jpg';
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: banner1, title: 'Big Sale', description: 'Up to 50% off on selected items' },
    { image: banner2, title: 'New Arrivals', description: 'Check out the latest collection' },
    { image: banner3, title: 'Exclusive Deals', description: 'Limited time offers just for you' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-80">
      <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white">
        <h2 className="text-3xl font-bold">{slides[currentSlide].title}</h2>
        <p className="text-xl">{slides[currentSlide].description}</p>
        <Link to="/men" className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default HeroSlider;
