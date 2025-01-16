import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
  const { user } = useAuth();
  const { addToCart, addToWishlist } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!user) {
      alert('Please login to add items to cart');
      navigate('/login');
      return;
    }
    addToCart({ ...product, size: 'M', quantity: 1 });
  };

  const handleAddToWishlist = () => {
    if (!user) {
      alert('Please login to add items to wishlist');
      navigate('/login');
      return;
    }
    addToWishlist(product);
  };

  const handleBuyNow = () => {
    if (!user) {
      alert('Please login to purchase items');
      navigate('/login');
      return;
    }
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <button
          onClick={handleAddToWishlist}
          className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <HeartIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {product.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">₹{product.price.toFixed(2)}</p>
        
        <div className="mt-4 flex justify-between gap-2">
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center flex-1 px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            <ShoppingCartIcon className="h-5 w-5 mr-1" />
            Add to Cart
          </button>
          
          <button
            onClick={handleBuyNow}
            className="flex-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 px-3 py-2"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;