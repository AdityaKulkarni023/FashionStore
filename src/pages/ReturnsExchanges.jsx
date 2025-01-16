import React from 'react';
import returnimg from '../img/exchange.jpg';
import { Link } from 'react-router-dom';
function ReturnsExchanges() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 animate-fadeIn">
            Returns & Exchanges
          </h1>
          <p className="text-lg text-gray-600 animate-slideUp">
            Your satisfaction is our priority. Learn more about our easy return and exchange policy.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section: Text Details */}
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed animate-slideUp">
              At <span className="font-semibold text-gray-800">FashionStore</span>, we want you to love your purchase. If for any reason you're not completely satisfied, our hassle-free return and exchange policy has you covered.
            </p>
            <ul className="list-disc ml-6 text-gray-700 text-lg animate-slideUp delay-200">
              <li>Items can be returned or exchanged within <span className="font-semibold text-gray-800">30 days</span> of purchase.</li>
              <li>Products must be unused, in original condition, and with all tags intact.</li>
              <li>Sale items are non-returnable unless defective.</li>
              <li>Refunds will be processed within <span className="font-semibold text-gray-800">7-10 business days</span> after receiving the returned item.</li>
            </ul>
            <p className="text-gray-700 text-lg animate-slideUp delay-400">
              For exchanges, simply let us know the product and size you'd like in return, and we'll process your request as quickly as possible!
            </p>
          </div>

          {/* Right Section: Image */}
          <div className="animate-fadeIn">
            <img src={returnimg}
              alt="Returns and Exchanges"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Steps Section */}
        <div className="mt-16 space-y-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center animate-fadeIn">
            How to Return or Exchange
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center bg-white p-6 rounded-lg shadow-lg animate-slideUp">
              <div className="mb-4">
              <img src={returnimg}
                  alt="Step 1"
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 1: Request</h3>
              <p className="text-gray-600 text-sm">
                Log in to your account and request a return or exchange under the “Orders” section.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center bg-white p-6 rounded-lg shadow-lg animate-slideUp delay-200">
              <div className="mb-4">
              <img src={returnimg}
                  alt="Step 2"
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 2: Pack</h3>
              <p className="text-gray-600 text-sm">
                Carefully pack the item(s) in their original packaging, including tags and receipt.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center bg-white p-6 rounded-lg shadow-lg animate-slideUp delay-400">
              <div className="mb-4">
              <img src={returnimg}
                  alt="Step 3"
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 3: Ship</h3>
              <p className="text-gray-600 text-sm">
                Use the prepaid shipping label we provide to send your package back to us.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center bg-blue-100 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 animate-fadeIn">
            Need Help?
          </h3>
          <p className="text-gray-600 text-lg mb-6 animate-slideUp">
            For any questions or assistance, feel free to contact our support team.
          </p>
          <a
            href="mailto:support@fashionstore.com"
            className="text-white bg-blue-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          >
           <Link to="/Contact">Contact Us</Link>
           </a>
        </div>
      </div>
    </div>
  );
}

export default ReturnsExchanges;
