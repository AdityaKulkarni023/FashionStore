import React from "react";

function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-12 px-6 lg:px-16">
        {/* Header Section */}
        <div className="border-b pb-6 mb-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
            Shipping Policy
          </h1>
          <p className="text-center text-gray-600 text-lg lg:text-xl">
            Learn about our shipping process, delivery timelines, and tracking
            details.
          </p>
        </div>

        {/* Shipping Policy Content */}
        <div className="space-y-10">
          {/* Section 1: Order Processing */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="lg:w-1/4">
              <h2 className="text-xl font-semibold text-gray-800">
                Order Processing
              </h2>
            </div>
            <div className="lg:w-3/4">
              <p className="text-gray-700 text-lg">
                We process all orders within <span className="font-medium">1-3 business days</span>. Orders placed on weekends or public holidays will be processed on the next business day.
              </p>
            </div>
          </div>

          {/* Section 2: Delivery Times */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="lg:w-1/4">
              <h2 className="text-xl font-semibold text-gray-800">
                Delivery Times
              </h2>
            </div>
            <div className="lg:w-3/4">
              <p className="text-gray-700 text-lg">
                Estimated delivery times depend on your shipping location:
              </p>
              <ul className="list-disc pl-6 mt-3 text-gray-700">
                <li>Standard Shipping: 5-7 business days</li>
                <li>Express Shipping: 2-3 business days</li>
                <li>International Shipping: 7-14 business days</li>
              </ul>
            </div>
          </div>

          {/* Section 3: Shipping Partners */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="lg:w-1/4">
              <h2 className="text-xl font-semibold text-gray-800">
                Shipping Partners
              </h2>
            </div>
            <div className="lg:w-3/4">
              <p className="text-gray-700 text-lg">
                We collaborate with trusted shipping partners such as <span className="font-medium">FedEx, UPS, and DHL</span> to ensure your orders are delivered securely and promptly.
              </p>
            </div>
          </div>

          {/* Section 4: Tracking Information */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="lg:w-1/4">
              <h2 className="text-xl font-semibold text-gray-800">
                Tracking Information
              </h2>
            </div>
            <div className="lg:w-3/4">
              <p className="text-gray-700 text-lg">
                After your order has been shipped, you will receive a tracking link via email. Use this link to monitor the status and location of your package.
              </p>
            </div>
          </div>

          {/* Section 5: Shipping Costs */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="lg:w-1/4">
              <h2 className="text-xl font-semibold text-gray-800">
                Shipping Costs
              </h2>
            </div>
            <div className="lg:w-3/4">
              <p className="text-gray-700 text-lg">
                Shipping costs vary based on the destination and weight of your order. Enjoy <span className="font-medium">free shipping</span> on orders over ₹5,000!
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="border-t mt-12 pt-6 text-center">
  <p className="text-gray-600 text-lg">
    Have questions? Check out our{" "}
    <a
      href="/ReturnsExchanges"
      className="text-blue-600 underline hover:text-blue-800"
    >
      Shipping & Exchange Policy
    </a>{" "}
    or{" "}
    <a
      href="/Contact"
      className="text-blue-600 underline hover:text-blue-800"
    >
      Contact Us
    </a>.
  </p>
</div>

      </div>
    </div>
  );
}

export default ShippingPolicy;
