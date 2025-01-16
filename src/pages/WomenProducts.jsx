import { useState } from "react";
import ProductCard from "../components/ProductCard";
import kurtaa1 from "../img/kurta1.jpg";
import kurtaa3 from "../img/kurta3.jpg";
import kurtaa4 from "../img/kurta4.jpg";
import womendress from "../img/womendress1.jpg";
import womendresss from "../img/womendress2.jpg";
import wjeans from "../img/wjeans1.jpg";
import wjeans1 from "../img/wjeans2.jpg";
import wbag from "../img/wbag1.jpg";
import wbags from "../img/wbag2.jpg";
import wshoes from "../img/wshoes1.jpg";
import wjackets from "../img/wjacket1.jpg";
import wwatch1 from "../img/wwatch.jpg";

const womenProducts = [
  { id: "w1", name: "Floral Dress", price: 1299, image: womendresss, category: "clothing" },
  { id: "w2", name: "High Waist Jeans", price: 799, image: wjeans1, category: "clothing" },
  { id: "w3", name: "Leather Handbag", price: 2500, image: wbag, category: "accessories" },
  { id: "w4", name: "Stylish Kurta set", price: 1899, image: kurtaa1, category: "clothing" },
  { id: "w5", name: "Puffer Jacket", price: 1800, image: wjackets, category: "clothing" },
  { id: "w6", name: "Casual Shoes", price: 399, image: wshoes, category: "clothing" },
  { id: "w7", name: "A-Line Skirt", price: 699, image: womendress, category: "clothing" },
  { id: "w8", name: "Kurta Set", price: 1399, image: kurtaa3, category: "clothing" },
  { id: "w9", name: "High Waist Jeans", price: 999, image: wjeans, category: "clothing" },
  { id: "w10", name: "Tote Bag", price: 1499, image: wbags, category: "accessories" },
  { id: "w11", name: "Women Watch", price: 899, image: wwatch1, category: "accessories" },
  { id: "w12", name: "Kurta Set", price: 1999, image: kurtaa4, category: "clothing" },
];

function WomenProducts() {
  const [sortBy, setSortBy] = useState("featured");
  const [filterBy, setFilterBy] = useState("all");

  const sortedProducts = [...womenProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0;
  });

  const filteredProducts =
    filterBy === "all"
      ? sortedProducts
      : sortedProducts.filter((product) => product.category === filterBy);


  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 mb-10 text-center animate-fadeIn">
        Women's Collection
      </h1>

      <div className="text-gray-600 dark:text-gray-300 text-center mb-6">
        Showing <span className="font-bold">{filteredProducts.length}</span> products
      </div>

      <div className="flex justify-between mb-6">
        <div className="flex gap-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-md p-2 dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>

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

export default WomenProducts;
