import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 'm1', name: 'Classic Blazzer', price: 2999, image: 'path_to_image' },
  { id: 'm2', name: 'Slim Fit Jeans', price: 599, image: 'path_to_image' },
  // Add other products...
];

function ProductListing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} className="w-full rounded-lg" />
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-gray-600">₹{product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;
