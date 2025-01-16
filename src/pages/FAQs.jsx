import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function FAQs() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is your return policy?",
            answer: "You can return items within 30 days. Please ensure the product is in its original condition with all tags attached.",
        },
        {
            question: "How long does shipping take?",
            answer: "Shipping usually takes 5-7 business days. Expedited options are available at checkout.",
        },

        {
            question: "What payment methods do you accept?",
            answer: "We accept major credit cards, PayPal, and select digital wallets like Google Pay and Apple Pay.",
        },
    ];

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-12">
                <h1 className="text-5xl font-bold text-center text-gray-800 mb-8 animate-fadeIn">Frequently Asked Questions</h1>
                <p className="text-center text-lg text-gray-600 mb-12 animate-slideUp">
                    Have questions? We've got answers! Explore our FAQs below to find what you're looking for.
                </p>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 animate-fadeIn transition-transform transform hover:-translate-y-1"
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAnswer(index)}
                            >
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {faq.question}
                                </h2>
                                <span className="text-gray-600">
                                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            </div>
                            {activeIndex === index && (
                                <p className="mt-4 text-gray-700 animate-slideDown">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-lg text-gray-600 mb-6">
                        Didn't find the answer you were looking for? <br />
                        <a href="/contact" className="text-blue-600 underline hover:text-blue-800">
                            Contact Us
                        </a> and we'll be happy to assist you.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FAQs;
