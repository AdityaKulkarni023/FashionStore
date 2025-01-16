import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import {
  ShoppingCartIcon,
  HeartIcon,
  UserIcon,
  SunIcon,
  MoonIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

function Navbar({ darkMode, setDarkMode, products = [] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { cart = [], wishlist = [] } = useCart();

  const filterProducts = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    if (!products || products.length === 0) return [];

    if (lowerCaseQuery.includes("men")) {
      return products.filter(product =>
        product.category?.toLowerCase().includes("men") &&
        product.title?.toLowerCase().includes(lowerCaseQuery)
      );
    } else if (lowerCaseQuery.includes("women")) {
      return products.filter(product =>
        product.category?.toLowerCase().includes("women") &&
        product.title?.toLowerCase().includes(lowerCaseQuery)
      );
    } else if (lowerCaseQuery.includes("kid")) {
      return products.filter(product =>
        product.category?.toLowerCase().includes("kids") &&
        product.title?.toLowerCase().includes(lowerCaseQuery)
      );
    } else {
      return products.filter(product =>
        product.title?.toLowerCase().includes(lowerCaseQuery)
      );
    }
  };

  const filteredProducts = filterProducts(searchQuery);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
              FashionStore
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="relative mx-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-gray-700 dark:text-white"
                placeholder="Search products..."
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              {searchQuery && filteredProducts.length > 0 && (
                <div className="absolute left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-10">
                  <ul>
                    {filteredProducts.map((product) => (
                      <li key={product.id} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <Link to={`/product/${product.id}`} className="text-gray-800 dark:text-gray-200">
                          {product.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <Link to="/" className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Home
            </Link>
            <Link to="/men" className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Men
            </Link>
            <Link to="/women" className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Women
            </Link>
            <Link to="/kids" className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Kids
            </Link>

            <div className="flex items-center space-x-4">
              <Link to="/wishlist" className="relative">
                <HeartIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              <Link to="/cart" className="relative">
                <ShoppingCartIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Link>

              {user ? (
                <button
                  onClick={logout}
                  className="flex items-center space-x-1 text-gray-600 dark:text-gray-300"
                >
                  <UserIcon className="h-6 w-6" />
                  <span className="text-sm">Logout</span>
                </button>
              ) : (
                <Link to="/login" className="flex items-center space-x-1 text-gray-600 dark:text-gray-300">
                  <UserIcon className="h-6 w-6" />
                  <span className="text-sm">Login</span>
                </Link>
              )}

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-gray-600 dark:text-gray-300"
              >
                {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-white dark:bg-gray-700 dark:text-white"
                placeholder="Search products..."
              />
            </div>
            <Link to="/" className="block px-3 py-2 text-gray-600 dark:text-gray-300">Home</Link>
            <Link to="/men" className="block px-3 py-2 text-gray-600 dark:text-gray-300">Men</Link>
            <Link to="/women" className="block px-3 py-2 text-gray-600 dark:text-gray-300">Women</Link>
            <Link to="/kids" className="block px-3 py-2 text-gray-600 dark:text-gray-300">Kids</Link>

            <div className="flex justify-around py-4">
              <Link to="/wishlist" className="relative">
                <HeartIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              <Link to="/cart" className="relative">
                <ShoppingCartIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Link>

              {user ? (
                <button onClick={logout} className="flex items-center space-x-1 text-gray-600 dark:text-gray-300">
                  <UserIcon className="h-6 w-6" />
                  <span className="text-sm">Logout</span>
                </button>
              ) : (
                <Link to="/login" className="flex items-center space-x-1 text-gray-600 dark:text-gray-300">
                  <UserIcon className="h-6 w-6" />
                  <span className="text-sm">Login</span>
                </Link>
              )}

              <button onClick={() => setDarkMode(!darkMode)} className="text-gray-600 dark:text-gray-300">
                {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;