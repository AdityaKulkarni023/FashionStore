import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              FashionStore is your one-stop destination for trendy clothing and accessories
              for men, women, and children.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/men" className="text-gray-400 hover:text-white">Shop</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/Contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/ShippingPolicy " className="text-gray-400 hover:text-white">Shipping Policy</Link></li>
              <li><Link to="/ReturnsExchanges" className="text-gray-400 hover:text-white">Returns & Exchanges</Link></li>
              <li><Link to="/FAQs" className="text-gray-400 hover:text-white">FAQs</Link></li>
              <li><Link to="/SizeGuide" className="text-gray-400 hover:text-white">Size Guide</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: support@fashionstore.com</li>
              <li>Phone: (+91) 1234567890</li>
              <li>Address: 123 Fashion city,India</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} FashionStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;