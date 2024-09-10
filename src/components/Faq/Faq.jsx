import React, { useState } from "react";
import FAQBackground from "../../assets/faqBackground.webp"; // Replace with your background image
import { FaPlus, FaMinus } from "react-icons/fa";

// Updated FAQ Data with More Items
const faqData = [
  {
    question: "What is your return policy?",
    answer:
      "Our return policy allows you to return items within 30 days of purchase. Items must be in original condition and packaging.",
    isOpen: true, // Set the first item to open by default
  },
  {
    question: "How can I track my order?",
    answer:
      "You can track your order using the tracking number sent to your email after shipment. Enter the tracking number on our website for updates.",
    isOpen: false,
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to most countries. Shipping costs and times may vary depending on the destination.",
    isOpen: false,
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact our customer support team via email at support@example.com or by calling 1-800-123-4567.",
    isOpen: false,
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit cards, debit cards, and PayPal. All transactions are securely processed.",
    isOpen: false,
  },
  {
    question: "How do I change my account details?",
    answer:
      "You can update your account details by logging into your account and navigating to the 'Account Settings' section. Here, you can change your personal information and password.",
    isOpen: false,
  },
  {
    question: "Can I modify or cancel my order after placing it?",
    answer:
      "Once an order is placed, it is processed quickly. You may be able to modify or cancel your order within a short period after placing it by contacting our customer support team.",
    isOpen: false,
  },
  {
    question: "What do I do if I receive a damaged item?",
    answer:
      "If you receive a damaged item, please contact our customer support team with your order number and a photo of the damaged item. We will assist you with a replacement or refund.",
    isOpen: false,
  },
];

const FAQAccordion = ({ faq, toggleAccordion, isOpen }) => {
  return (
    <div className="border-b border-gray-300 mb-4">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center p-4 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none"
      >
        <span className="text-lg font-semibold">{faq.question}</span>
        {isOpen ? <FaMinus /> : <FaPlus />}
      </button>
      {isOpen && (
        <div className="p-4 text-gray-700">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Open the first item by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${FAQBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[60vw] md:h-[30vw] flex justify-center items-center"
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg">
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row py-12 px-4 md:px-12   space-x-1 md:space-x-10">
        {/* Left Side: Subtitle, Title, Description */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <p className="text-lg font-semibold text-gray-700 mb-2">
            Most Asked Questions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find answers here
          </h2>
          <p className="text-base text-gray-600">
            We’ve compiled answers to some of the most frequently asked
            questions to help you find the information you need quickly and
            easily.
          </p>
        </div>

        {/* Right Side: FAQ Accordion */}
        <div className="md:w-1/2">
          {faqData.map((faq, index) => (
            <FAQAccordion
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              toggleAccordion={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
