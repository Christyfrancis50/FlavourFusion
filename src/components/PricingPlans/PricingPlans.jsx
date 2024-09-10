import React, { useState } from "react";
import { motion } from "framer-motion";
import HeroImg from "../../assets/hero-pricing.webp";
import CarouselImg1 from "../../assets/carousel-image1.webp";
import CarouselImg2 from "../../assets/carousel-image2.webp";
import CarouselImg3 from "../../assets/carousel-image3.webp";

const PricingPlans = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const plans = [
    {
      image: CarouselImg1,
      title: "Basic Plan",
      price: "$15 / month",
      discount: "$10 / month (billed annually)",
      features: [
        "Access to basic recipes",
        "Personalized meal plans",
        "Community support",
        "Monthly updates",
      ],
    },
    {
      image: CarouselImg2,
      title: "Pro Plan",
      price: "$30 / month",
      discount: "$25 / month (billed annually)",
      features: [
        "All Basic Plan features",
        "Access to premium content",
        "Personalized coaching",
        "Weekly updates",
      ],
    },
    {
      image: CarouselImg3,
      title: "Premium Plan",
      price: "$50 / month",
      discount: "$40 / month (billed annually)",
      features: [
        "All Pro Plan features",
        "One-on-one chef sessions",
        "Exclusive recipes",
        "Daily updates",
      ],
    },
  ];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % plans.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + plans.length) % plans.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <motion.div
        className="md:h-[30vw] h-[60vw] bg-cover bg-top flex items-center justify-center"
        style={{ backgroundImage: `url(${HeroImg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="bg-black bg-opacity-50 p-10 rounded-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-5xl font-bold text-white">Our Pricing Plans</h1>
        </motion.div>
      </motion.div>

      {/* Subtitle, Title, and Description */}
      <motion.div
        className="flex flex-col md:flex-row justify-start py-20 px-10 md:p-20 md:py-40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="md:w-[50%] space-y-4 text-left">
          <p className="text-lg tracking-wide text-gray-500">Choose Your Plan</p>
          <h2 className="text-4xl font-bold">Flexible Pricing for Everyone</h2>
          <p className="text-lg">
            Whether you’re a home cook or a professional, we have a plan that fits your needs. Explore our packages and pick the one that's best for you.
          </p>
        </div>
      </motion.div>

      {/* Carousel Section for Desktop and Cards for Mobile */}
      <div className="carousel p-5 lg:p-40 bg-gray-100 py-20">
        <div className="hidden md:flex justify-between items-center ">
          {/* Left Arrow */}
          <button onClick={goToPrev} className="absolute left-2 text-3xl">
            &#8249;
          </button>

          {/* Carousel Cards for Desktop */}
          <div className="flex overflow-hidden w-full relative">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`min-w-full flex-shrink-0 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 bg-white shadow-lg rounded-lg p-4 md:p-10 transition-transform duration-300 ${
                  index === currentIndex ? "block" : "hidden"
                }`}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : 100,
                }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              >
                {/* Left Side - Image */}
                <motion.div
                  className="w-[100%] md:w-[40%] order-1 md:order-none"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full rounded-lg"
                  />
                </motion.div>

                {/* Right Side - Plan Details */}
                <motion.div
                  className="w-[100%] md:w-[40%] flex flex-col items-center text-center space-y-4 order-2 md:order-none"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-3xl font-bold">{plan.title}</h3>
                  <p className="text-2xl font-medium text-gray-600">
                    {plan.price}
                  </p>
                  <p className="text-lg text-gray-500">{plan.discount}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="text-lg">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-800">
                    Get Started
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <button onClick={goToNext} className="absolute right-2 text-3xl">
            &#8250;
          </button>
        </div>

        {/* Cards for Mobile */}
        <div className="md:hidden flex flex-col space-y-5">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Image */}
              <img
                src={plan.image}
                alt={plan.title}
                className="w-full rounded-lg"
              />

              {/* Plan Details */}
              <div className="text-center">
                <h3 className="text-3xl font-bold">{plan.title}</h3>
                <p className="text-2xl font-medium text-gray-600">
                  {plan.price}
                </p>
                <p className="text-lg text-gray-500">{plan.discount}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-lg">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-800">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
