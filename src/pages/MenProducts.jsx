import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import blazzerImage from '../img/blazzer.jpg';
import shirt1 from '../img/shirt1.jpg';
import shirt2 from '../img/shirt2.jpg';
import swater from '../img/swater1.jpg';
import shoes1 from '../img/shoes1.jpg';
import hoodie1 from '../img/hoodie.jpg';
import denim1 from '../img/denim.jpg'; 
import jeans1 from '../img/jeans.jpg';
import jeans2 from '../img/jeans2.jpg';
import leather1 from '../img/leather.jpg';

const menProducts = [
  { id: 'm1', name: "Classic Blazzer", price: 2999, image: blazzerImage, category: "clothing" },
  { id: 'm2', name: "Slim Fit Jeans", price: 599, image: jeans2, category: "clothing" },
  { id: 'm3', name: "Leather Jacket", price: 1899, image: leather1, category: "clothing" },
  { id: 'm4', name: "Casual Sneakers", price: 1400, image: shoes1, category: "accessories" },
  { id: 'm5', name: "Formal Shirt", price: 699, image: shirt1, category: "clothing" },
  { id: 'm6', name: "Chino Pants", price: 799, image: jeans1, category: "clothing" },
  { id: 'm7', name: "Denim Jacket", price: 1200, image: denim1, category: "clothing" },
  { id: 'm8', name: "Polo Shirt", price: 599, image: shirt2, category: "clothing" },
  { id: 'm9', name: "Running Shoes", price: 499, image: shoes1, category: "accessories" },
  { id: 'm10', name: "Woolen Sweater", price: 899, image: swater, category: "clothing" },
  { id: 'm11', name: "Cargo Pants", price: 699, image: jeans2, category: "clothing" },
  { id: 'm12', name: "Graphic Hoodie", price: 399, image: hoodie1, category: "clothing" },
];

function MenProducts() {
  const [sortBy, setSortBy] = useState("featured");
  const [filterBy, setFilterBy] = useState("all");

  // Sorting Logic
  const sortedProducts = [...menProducts].sort((a, b) => {
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
            Men's Collection
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
    
          {/* Products Grid */}
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
    
export default MenProducts;