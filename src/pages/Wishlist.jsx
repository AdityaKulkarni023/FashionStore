import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

function Wishlist() {
  const { wishlist = [] } = useCart();  // Default to an empty array if wishlist is undefined

  if (wishlist.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Your wishlist is empty
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Add items to your wishlist to save them for later.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">My Wishlist</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlist.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
