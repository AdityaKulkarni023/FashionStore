import React from 'react';
import sizeguide from '../img/sizeguide.jpg';
import { Link } from 'react-router-dom';

function SizeGuide() {
    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-8 animate-fadeIn">
                    Size Guide
                </h1>
                <p className="text-center text-base sm:text-lg text-gray-600 mb-12 animate-slideUp">
                    Find your perfect fit with our size guide. Follow the instructions below to measure yourself and refer to the chart for the best match.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    <div className="animate-slideUp">
                        <img
                            src={sizeguide}
                            alt="Measuring yourself"
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>
                    <div className="flex flex-col justify-center space-y-6 animate-slideUp">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Chest</h2>
                            <p className="text-sm sm:text-base text-gray-700">
                                Wrap the measuring tape around the fullest part of your chest, keeping it snug but not tight.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Waist</h2>
                            <p className="text-sm sm:text-base text-gray-700">
                                Measure around the narrowest part of your waist, just above your belly button.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Hips</h2>
                            <p className="text-sm sm:text-base text-gray-700">
                                Place the tape measure around the widest part of your hips, ensuring it's level all the way around.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg animate-fadeIn overflow-x-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">Size Chart</h2>
                    <table className="w-full table-auto border-collapse border border-gray-300 text-sm sm:text-lg text-gray-700">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">Size</th>
                                <th className="border border-gray-300 px-4 py-2">Chest (inches)</th>
                                <th className="border border-gray-300 px-4 py-2">Waist (inches)</th>
                                <th className="border border-gray-300 px-4 py-2">Hips (inches)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 text-center">S</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">34-36</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">28-30</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">35-37</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2 text-center">M</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">38-40</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">32-34</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">39-41</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 text-center">L</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">42-44</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">36-38</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">43-45</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-16 text-center animate-slideUp">
                    <p className="text-sm sm:text-lg text-gray-600 mb-6">
                        If you’re still unsure about your size, feel free to{' '}
                        <a href="/Contact" className="text-blue-600 underline">
                            Contact Us
                        </a>{' '}
                        for assistance.
                    </p>
                    <Link to="/men">
                        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 text-base sm:text-xl rounded-lg hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-700 transition-all">
                            Shop Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SizeGuide;
