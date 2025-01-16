import React from 'react'
import aboutimg from '../img/about.jpg';

function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto py-16 px-6 lg:px-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 animate-fadeIn">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed text-lg animate-slideUp">
              Welcome to <span className="font-bold text-gray-900">FashionStore</span>, where style meets affordability. We are a passionate team committed to providing the latest trends in fashion for men, women, and children.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg animate-slideUp delay-200">
              At FashionStore, we believe fashion is for everyone. Our collections are curated to ensure you always find something stylish, comfortable, and unique. Whether you're looking for everyday wear, special occasion outfits, or trendy accessories, we have something for you.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg animate-slideUp delay-400">
              Our mission is to make fashion accessible and enjoyable for people of all ages, body types, and lifestyles. We aim to create an inclusive environment where everyone feels confident and empowered by their personal style.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg animate-slideUp delay-600">
              We are more than just a store; we are a community of fashion enthusiasts who believe that style is a reflection of individuality. Our team is dedicated to providing exceptional customer service, and we are always ready to help you find the perfect outfit for any occasion.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg animate-slideUp delay-800">
              Join us on our journey to make the world a more fashionable place, one outfit at a time. Our goal is to offer you an enjoyable shopping experience and bring you the best in fashion, always with a smile.
            </p>
          </div>
          <div className="animate-fadeIn">
            <img
              src={aboutimg}
              alt="Fashion Store"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform h-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
