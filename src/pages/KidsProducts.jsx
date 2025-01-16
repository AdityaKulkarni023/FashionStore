import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import kwatch from '../img/kwatch1.jpg';
import kwatchs from '../img/kwatch2.jpg';
import kshirts from '../img/ktshirt2.jpg';
import kshirtss from '../img/ktshirt3.jpg';
import kshirtk from '../img/ktshirt4.jpg';
import kjacket from '../img/kjacket1.jpg';
import kjackets from '../img/kjacket2.jpg';
import kshoe from '../img/kshoes1.jpg';
import kshoe3 from '../img/kshoessss.jpg';
import ktoy1 from '../img/ktoy.jpg';
import kcap1 from '../img/kcap.jpg';

const kidsProducts = [
  { id: 'k1', name: "Superhero T-Shirt", price: 499, image: kshirtk, category: "clothing" },
  { id: 'k2', name: "Boy Watch", price: 249, image: kwatch, category: "accessories" },
  { id: 'k3', name: "Animal Print Dress", price: 399, image: kshirts, category: "clothing" },
  { id: 'k4', name: "Winter Jacket", price: 459, image: kjacket, category: "clothing" },
  { id: 'k5', name: "Kids Sneakers", price: 299, image: kshoe3, category: "accessories" },
  { id: 'k6', name: "Kids Jacket", price: 599, image: kjackets, category: "clothing" },
  { id: 'k7', name: "Kids Dress", price: 599, image: kshirtss, category: "clothing" },
  { id: 'k8', name: "Kids Watch", price: 249, image: kwatchs, category: "accessories" },
  { id: 'k9', name: "Kids Sneakers", price: 399, image: kshoe3, category: "accessories" },
  { id: 'k10', name: "Kid Car Toy", price: 599, image: ktoy1, category: "accessories" },
  { id: 'k11', name: "Kids Cap", price: 199, image: kcap1, category: "accessories" },
  { id: 'k12', name: "Kids Shoes", price: 299, image: kshoe, category: "accessories" },
];

function KidsProducts() {
  const [sortBy, setSortBy] = useState("featured");
  const [filterBy, setFilterBy] = useState("all");

  // Sorting Logic
  const sortedProducts = [...kidsProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0;
  });

  // Filtering Logic
  const filteredProducts =
    filterBy === "all"
      ? sortedProducts
      : sortedProducts.filter((product) => product.category === filterBy);


  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 mb-10 text-center animate-fadeIn">
            Kid's Collection
          </h1>
    
          {/* Dynamic Product Count */}
          <div className="text-gray-600 dark:text-gray-300 text-center mb-6">
            Showing <span className="font-bold">{filteredProducts.length}</span> products
          </div>
    
          {/* Sorting and Filtering */}
          <div className="flex justify-between mb-6">
            <div className="flex gap-4">
              {/* Sorting Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-md p-2 dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
    
              {/* Filtering Dropdown */}
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="border rounded-md p-2 dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="all">All Categories</option>
                <option value="clothing">Clothing</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>
          </div>
    
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={{
                  ...product,
                  formattedPrice: product.price.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                  }),
                }}
              >
                {/* Badge for Category */}
                {product.category && (
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium uppercase bg-blue-100 text-blue-700 rounded-full shadow-sm dark:bg-blue-900 dark:text-blue-300">
                    {product.category}
                  </span>
                )}
              </ProductCard>
            ))}
          </div>
    </div>
  );
}

export default KidsProducts;
