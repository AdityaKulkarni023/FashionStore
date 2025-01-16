import React from 'react';

function Contact() {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-8 animate-fadeIn">Contact Us</h1>
        <p className="text-center text-lg text-gray-600 mb-12 animate-slideUp">
          Have questions or need assistance? We’d love to hear from you!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section: Contact Info */}
          <div className="space-y-8 animate-slideUp">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-3">Email</h2>
              <p className="text-lg text-gray-700">support@fashionstore.com</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-3">Phone</h2>
              <p className="text-lg text-gray-700">(+91) 123-4567890</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-3">Address</h2>
              <p className="text-lg text-gray-700">123 Fashion city, India</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-3">Follow Us</h2>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <i className="fab fa-facebook-f text-3xl"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <i className="fab fa-twitter text-3xl"></i>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700"
                >
                  <i className="fab fa-instagram text-3xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  <i className="fab fa-linkedin-in text-3xl"></i>
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-800"
                >
                  <i className="fab fa-youtube text-3xl"></i>
                </a>
              </div>
            </div>
          </div>
          {/* Right Section: Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg animate-fadeIn">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xl text-gray-800 font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name" required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xl text-gray-800 font-medium">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email" required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xl text-gray-800 font-medium">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xl px-6 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-700 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
