import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

function CheckoutSuccess() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      <div className="flex justify-center mb-4">
        <CheckCircleIcon className="h-16 w-16 text-green-500" />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Order Placed Successfully!
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Thank you for your purchase. We'll send you an email with your order details shortly.
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
      >
        Continue Shopping
      </Link>
    </div>
  );
}

export default CheckoutSuccess;