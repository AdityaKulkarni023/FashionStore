import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
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
import kurtaa1 from '../img/kurta1.jpg';
import kurtaa3 from '../img/kurta3.jpg';
import kurtaa4 from '../img/kurta4.jpg';
import womendress from '../img/womendress1.jpg';
import womendresss from '../img/womendress2.jpg';
import wjeans from '../img/wjeans1.jpg';
import wjeans1 from '../img/wjeans2.jpg';
import wbag from '../img/wbag1.jpg';
import wbags from '../img/wbag2.jpg';
import wshoes from '../img/wshoes1.jpg';
import wjackets from '../img/wjacket1.jpg';
import wwatch1 from '../img/wwatch.jpg';
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

const mockProducts = [
  {
    id: 'm1',
    name: 'Classic Blazer',
    price: 2999,
    description: 'A versatile classic blazer that’s perfect for both formal and casual occasions. Featuring a sleek design, it elevates your wardrobe with its tailored fit and timeless appeal. Whether you are heading to a business meeting or a night out, this blazer is sure to make a stylish impression.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: "clothing",
    images: [blazzerImage],
  },
  {
    id: 'm2',
    name: 'Slim Fit Jeans',
    price: 599,
    description: 'Stay on trend with these slim-fit jeans, offering a modern and comfortable fit. With a sleek design and durable fabric, these jeans pair effortlessly with any casual outfit. Perfect for daily wear or a casual outing.',
    sizes: ['28', '30', '32', '34'],
    images: [jeans2],
    category: "clothing",
  },
  {
    id: 'm3',
    name: "Leather Jacket",
    price: 1899,
    description: 'Add some edge to your wardrobe with this stylish leather jacket. Crafted from premium leather, this jacket provides both warmth and a rugged look. Perfect for cold days and a night out, it’s a classic piece for every man’s closet.',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [leather1],
    category: "clothing",
  },
  {
    id: 'm4',
    name: "Casual Sneakers",
    price: 1400,
    description: 'These casual sneakers combine comfort and style. With a cushioned sole and sleek design, they’re perfect for everyday wear, whether you’re running errands or meeting friends. A must-have for your footwear collection.',
    sizes: ['7', '8', '9', '10'],
    images: [shoes1],
    category: "Accessories",
  },
  {
    id: 'm5',
    name: "Formal Shirt",
    price: 699,
    description: 'A sophisticated formal shirt designed for professional settings. The crisp fabric and perfect fit make it a must-have in your wardrobe. Ideal for business meetings or elegant dinners.',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [shirt1],
    category: "clothing",
  },
  {
    id: 'm6',
    name: "Chino Pants",
    price: 799,
    description: 'These chino pants are the perfect balance of comfort and style. With a soft texture and stylish fit, they are perfect for both casual outings and semi-formal events. Pair them with a shirt or casual tee for an effortlessly stylish look.',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [jeans1],
    category: "clothing",
  },
  {
    id: 'm7',
    name: "Denim Jacket",
    price: 1200,
    description: 'A timeless piece for any wardrobe, the denim jacket offers both versatility and style. Made from durable denim, its a classic jacket that can be layered over any outfit for a relaxed, cool vibe.',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [denim1],
    category: "clothing",
  },
  {
    id: 'm8',
    name: "Polo Shirt",
    price: 599,
    description: 'This classic polo shirt combines comfort with style. Whether you are at the golf course, the beach, or a casual gathering, its the ideal option for an effortlessly put-together look. Soft fabric ensures all-day comfort.',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [shirt2],
    category: "clothing",
  },
  {
    id: 'm9',
    name: "Running Shoes",
    price: 499,
    description: 'Designed for active wearers, these running shoes offer support and comfort for any sport or fitness activity. Lightweight and breathable, they keep your feet cool and cushioned during exercise.',
    sizes: ['7', '8', '9', '10'],
    images: [shoes1],
    category: "Accessories",
  },
  {
    id: 'm10',
    name: "Woolen Sweater",
    price: 899,
    description: 'Stay warm and stylish in this cozy woolen sweater. Perfect for colder weather, this sweater features a soft texture that provides both comfort and warmth. Pair it with jeans or chinos for a complete winter outfit.',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [swater],
    category: "clothing",
  },
  {
    id: 'm11',
    name: "Cargo Pants",
    price: 699,
    description: 'These cargo pants offer both functionality and style. With multiple pockets and a relaxed fit, they are great for outdoor activities or casual days out. The comfortable material ensures all-day wear.',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [jeans2],
    category: "clothing",
  },
  {
    id: 'm12',
    name: "Graphic Hoodie",
    price: 399,
    description: 'A cool graphic hoodie that brings a fun and casual vibe to your wardrobe. Whether you\'re lounging at home or out with friends, this hoodie adds a pop of personality and comfort to your look.',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [hoodie1],
    category: "clothing",
  },

  //women products
  {
    id: 'w1',
    name: "Floral Dress",
    price: 1299,
    description: 'This beautiful floral dress is perfect for any occasion, offering both comfort and style. With a flattering cut and a vibrant floral pattern, its ideal for a day out or a casual event. Pair it with sandals or heels to complete the look.',
    images: [womendresss],
    category: "clothing",
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'w2',
    name: "High Waist Jeans",
    price: 799,
    description: 'These high waist jeans provide a sleek and flattering fit, making them perfect for a variety of outfits. The sturdy fabric ensures comfort and durability, while the stylish high-waisted design elongates your legs.',
    images: [wjeans1],
    category: "clothing",
    sizes: ['28', '30', '32', '34'],
  },
  {
    id: 'w3',
    name: "Leather Handbag",
    price: 2500,
    description: 'Elevate your style with this elegant leather handbag. Crafted from high-quality leather, it features a spacious interior and sturdy handles for everyday use. Perfect for both work and weekend outings, it adds a sophisticated touch to any look.',
    images: [wbag],
    category: "accessories",
  },
  {
    id: 'w4',
    name: "Stylish Kurta Set",
    price: 1899,
    description: 'This stylish kurta set includes a beautifully designed kurta paired with matching bottoms, offering both comfort and traditional elegance. Ideal for festivals, parties, or casual outings, the vibrant design will make you stand out.',
    images: [kurtaa1],
    category: "clothing",
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'w5',
    name: "Puffer Jacket",
    price: 1800,
    description: 'Stay warm in style with this puffer jacket. Featuring a lightweight, insulating design, this jacket provides warmth without compromising on fashion. Perfect for cold weather, its versatile enough for both casual and semi-formal occasions.',
    images: [wjackets],
    category: "clothing",
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'w6',
    name: "Casual Shoes",
    price: 399,
    description: 'These casual shoes are designed for everyday wear, offering a comfortable fit and a stylish look. With a simple yet trendy design, they pair well with jeans, skirts, or dresses, making them a perfect addition to any wardrobe.',
    images: [wshoes],
    category: "Accessories",
    sizes: ['7', '8', '9', '10'],
  },
  {
    id: 'w7',
    name: "A-Line Skirt",
    price: 699,
    description: 'The A-Line skirt offers a flattering silhouette for all body types. Its versatile design makes it perfect for casual or semi-formal events. Pair it with a blouse or t-shirt for an effortlessly chic look.',
    images: [womendress],
    category: "clothing",
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'w8',
    name: "Kurta Set",
    price: 1399,
    description: 'This traditional kurta set includes a beautifully designed kurta with matching pants, making it a perfect choice for cultural events or casual gatherings. The comfortable fit and vibrant colors ensure a stylish and relaxed look.',
    images: [kurtaa3],
    category: "clothing",
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'w9',
    name: "High Waist Jeans",
    price: 999,
    description: 'These high waist jeans are designed for a perfect fit, offering both comfort and style. Made from durable fabric, they are ideal for everyday wear and can be paired with a variety of tops for a stylish, modern look.',
    images: [wjeans],
    category: "clothing",
    sizes: ['28', '30', '32', '34'],
  },
  {
    id: 'w10',
    name: "Tote Bag",
    price: 1499,
    description: 'This spacious tote bag is perfect for everyday use. With a stylish design and ample storage space, its perfect for carrying your essentials and more. Whether you are heading to work or a weekend getaway, this bag is both practical and chic.',
    images: [wbags],
    category: "accessories",
  },
  {
    id: 'w11',
    name: "Women Watch",
    price: 899,
    description: 'This elegant womens watch is a stylish accessory for any outfit. With a sleek design and a comfortable band, its perfect for both casual and formal occasions. The timeless design ensures it will never go out of style.',
    images: [wwatch1],
    category: "accessories",
  },
  {
    id: 'w12',
    name: "Kurta Set",
    price: 1999,
    description: 'This kurta set combines modern style with traditional charm. The kurta features a unique design, and the matching pants provide the perfect fit. Whether for a festival or a family gathering, this set will make you look both elegant and fashionable.',
    images: [kurtaa4],
    category: "clothing",
    sizes: ['S', 'M', 'L', 'XL'],
  },

  //kids products
  {
    id: 'k1',
    name: "Superhero T-Shirt",
    price: 499,
    images: [kshirtk],
    category: "clothing",
    sizes: ['S', 'M', 'L'],
    description: "A fun and vibrant superhero-themed t-shirt that brings excitement and color to your child's wardrobe. Perfect for casual outings or playtime."
  },
  {
    id: 'k2',
    name: "Boy Watch",
    price: 249,
    images: [kwatch],
    category: "accessories",
    description: "A stylish and durable boy's watch, ideal for daily wear. Featuring a comfortable band and easy-to-read face, it makes telling time fun and simple."
  },
  {
    id: 'k3',
    name: "Animal Print Dress",
    price: 399,
    images: [kshirts],
    category: "clothing",
    sizes: ['S', 'M', 'L'],
    description: "A playful and fashionable animal print dress that adds an adventurous spirit to any child's wardrobe. Great for both casual and special occasions."
  },
  {
    id: 'k4',
    name: "Winter Jacket",
    price: 459,
    images: [kjacket],
    category: "clothing",
    sizes: ['S', 'M', 'L'],
    description: "Stay warm and stylish with this insulated winter jacket. Designed to protect against the cold while providing comfort, making it perfect for winter adventures."
  },
  {
    id: 'k5',
    name: "Kids Sneakers",
    price: 299,
    images: [kshoe3],
    category: "accessories",
    description: "Comfortable and sturdy sneakers for kids, ideal for outdoor play and casual activities. These sneakers provide support and durability for all-day wear."
  },
  {
    id: 'k6',
    name: "Kids Jacket",
    price: 599,
    images: [kjackets],
    category: "clothing",
    sizes: ['S', 'M', 'L'],
    description: "A versatile kids' jacket that offers both warmth and style. Perfect for cooler weather and layering over your child's favorite outfits."
  },
  {
    id: 'k7',
    name: "Kids Dress",
    price: 599,
    images: [kshirtss],
    category: "clothing",
    sizes: ['S', 'M', 'L'],
    description: "This adorable kids' dress is perfect for any occasion. The soft fabric and beautiful design ensure comfort and style all day long."
  },
  {
    id: 'k8',
    name: "Kids Watch",
    price: 249,
    images: [kwatchs],
    category: "accessories",
    description: "A charming and durable kids' watch that combines fun and functionality. The perfect accessory for teaching kids how to tell time."
  },
  {
    id: 'k9',
    name: "Kids Sneakers",
    price: 399,
    images: [kshoe3],
    category: "accessories",
    description: "These trendy kids' sneakers offer a comfortable fit and stylish design, making them ideal for outdoor activities and everyday wear."
  },
  {
    id: 'k10',
    name: "Kid Car Toy",
    price: 599,
    images: [ktoy1],
    category: "accessories",
    description: "A fun and interactive kid's car toy that enhances creativity and motor skills. Perfect for imaginative play and adventures."
  },
  {
    id: 'k11',
    name: "Kids Cap",
    price: 199,
    images: [kcap1],
    category: "accessories",
    description: "A trendy kids' cap that offers both style and sun protection. Ideal for outdoor activities, trips, or casual wear."
  },
  {
    id: 'k12',
    name: "Kids Shoes",
    price: 299,
    images: [kshoe],
    category: "accessories",
    description: "These comfortable kids' shoes are perfect for both indoor and outdoor use. Lightweight and durable, they are designed for all-day wear."
  }

];

function ProductDetail() {
  const { id } = useParams();
  const { user } = useAuth();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = mockProducts.find((p) => p.id === id);

    if (foundProduct) {
      setProduct(foundProduct);
      if (foundProduct.sizes && foundProduct.sizes.length > 0) {
        setSelectedSize(foundProduct.sizes[0]);
      }
    }
  }, [id]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Product not found
        </h2>
      </div>
    );
  }

  const handleBuyNow = () => {
    if (!user) {
      alert('Please login to purchase items');
      navigate('/login');
      return;
    }

    if (!selectedSize && product.category === 'clothing') {
      setError('Please select a size');
      return;
    }

    const cartItem = {
      ...product,
      size: selectedSize,
      quantity,
    };

    addToCart(cartItem);
    navigate('/checkout');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {Array.isArray(product.images) && product.images.length > 0 ? (
            product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} View ${index + 1}`}
                className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
            {product.name}
          </h1>
          <p className="text-2xl font-semibold text-gray-800">
            ₹{product.price}
          </p>

          {/* Size Selection */}
          <div>
            <h3 className="text-lg font-medium text-gray-900">Select Size:</h3>
            <div className="flex space-x-2 mt-2">
              {Array.isArray(product.sizes) && product.sizes.length > 0 ? (
                product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded-full border border-gray-300 transition-transform duration-300 ${selectedSize === size
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'bg-gray-100 text-gray-900 hover:shadow-md hover:-translate-y-1'
                      }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))
              ) : (
                <p>No sizes available</p>
              )}
            </div>
          </div>

          <div className="flex space-x-4 mt-6">
            <button
              onClick={() => alert('Add to Cart functionality is disabled.')}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Buy Now
            </button>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-2">Product Description</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {product.description ||
                `High-quality ${product.name.toLowerCase()} perfect for any occasion. 
                Made with premium materials for comfort and durability.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



export default ProductDetail;
