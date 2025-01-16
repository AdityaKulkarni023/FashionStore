import { useState } from "react";
import HeroSlider from "../components/HeroSlider";
import ProductCard from "../components/ProductCard";
import shirt2 from "../img/shirt2.jpg";
import womendress from "../img/womendress1.jpg";
import kshirts from "../img/ktshirt2.jpg";


const topSellingProducts = [
  {
    id: 1,
    name: "Men's Classic T-Shirt",
    price: 599,
    image: shirt2,
    category: "men",
  },
  {
    id: 2,
    name: "Women's Summer Dress",
    price: 699,
    image: womendress,
    category: "women",
  },
  {
    id: 3,
    name: "Kids' T-shirt",
    price: 299,
    image: kshirts,
    category: "kids",
  },
];

// Featured Categories
const featuredCategories = [
  { id: 1, name: "Men's Fashion", image: shirt2, link: "/men" },
  { id: 2, name: "Women's Fashion", image: womendress, link: "/women" },
  { id: 3, name: "Kid's Fashion", image: kshirts, link: "/kids" },
];

function Home() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <div>
      <HeroSlider />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCategories.map((category) => (
            <div
              key={category.id}
              className="relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center text-white text-xl font-semibold">
                <a href={category.link} className="hover:underline">
                  {category.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Top Selling Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topSellingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Special Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white text-center transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">Summer Sale</h3>
              <p className="mb-4">Up to 50% off on summer collection</p>
              <span className="inline-block bg-white text-blue-600 px-4 py-2 rounded-full font-bold">
                SUMMER50
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white text-center transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">First Order</h3>
              <p className="mb-4">Get 10% off on your first order</p>
              <span className="inline-block bg-white text-blue-600 px-4 py-2 rounded-full font-bold">
                FIRST10
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white text-center transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">Free Shipping</h3>
              <p className="mb-4">On orders above ₹999</p>
              <span className="inline-block bg-white text-blue-600 px-4 py-2 rounded-full font-bold">
                SHIP999
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-gray-900 py-16">
        <div className="absolute inset-0 opacity-20 bg-pattern"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Newsletter
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
