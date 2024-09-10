import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutHero from "../../assets/AboutHero.webp";
import AboutImg from "../../assets/about-image.webp";
import ItemImg1 from "../../assets/ItemImg1.webp";
import ItemImg2 from "../../assets/ItemImg2.webp";
import ItemImg3 from "../../assets/ItemImg3.webp";
import ItemImg4 from "../../assets/ItemImg4.webp";
import SectionImg from "../../assets/section-image.webp";
import CourseImg1 from "../../assets/course-image1.webp";
import CourseImg2 from "../../assets/course-image2.webp";
import CourseImg3 from "../../assets/course-image3.webp";
import { motion } from "framer-motion";
import "../../index.css";

const About = () => {
  const items = [
    {
      image: ItemImg1,
      number: "01",
      title: "Creative Recipes",
      description:
        "Explore a wide range of unique and creative recipes to inspire your next meal.",
    },
    {
      image: ItemImg2,
      number: "02",
      title: "Cooking Tips",
      description:
        "Get expert tips to enhance your cooking skills and techniques.",
    },
    {
      image: ItemImg3,
      number: "03",
      title: "Healthy Options",
      description:
        "Discover delicious recipes that are both healthy and nutritious.",
    },
    {
      image: ItemImg4,
      number: "04",
      title: "Quick Meals",
      description: "Find quick and easy meal ideas for those busy days.",
    },
  ];

  const progressData = [
    { label: "Recipe Creativity", percentage: 80 },
    { label: "Cooking Techniques", percentage: 65 },
    { label: "Healthy Cooking", percentage: 90 },
    { label: "Quick Meal Prep", percentage: 75 },
  ];

  const courses = [
    {
      image: CourseImg1,
      title: "The Ultimate Cooking Course",
      subtitle: "Advanced Culinary Techniques",
      description:
        "Learn advanced cooking skills with this comprehensive course designed for both home cooks and professionals.",
      enrolled: 1200,
      rating: 4.8,
    },
    {
      image: CourseImg2,
      title: "Baking Mastery Course",
      subtitle: "Pastry and Dessert Techniques",
      description:
        "Master the art of baking with our specialized course in pastries and desserts.",
      enrolled: 800,
      rating: 4.7,
    },
    {
      image: CourseImg3,
      title: "Healthy Cooking Course",
      subtitle: "Nutrition and Wellness",
      description:
        "Explore healthy cooking techniques and nutrition advice to maintain a balanced diet.",
      enrolled: 950,
      rating: 4.9,
    },
  ];

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${AboutHero})` }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg">
          <motion.h1
            className="text-white text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            Welcome to CookingApp
          </motion.h1>
          <motion.p
            className="text-white text-lg md:text-xl mt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          >
            Discover the joy of cooking with our curated recipes and tips!
          </motion.p>
        </div>
      </div>

      {/* Second Section */}
      <div
        className="flex flex-col md:flex-row items-center justify-between py-20 px-10 md:px-20 space-y-10 md:space-y-0 space-x-10 w-[100%]"
        id="about-section-2"
      >
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
        >
          <img
            src={AboutImg}
            alt="About Cooking"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.div
          className="md:w-1/2 space-y-6 md:px-12"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold">
            Why Choose CookingApp?
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Expert-curated recipes for all levels</li>
            <li>Step-by-step guides to improve your cooking skills</li>
            <li>Explore a variety of cuisines from around the world</li>
            <li>Exclusive tips from culinary experts</li>
          </ul>
          <button className="bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600">
            Start Cooking Now
          </button>
        </motion.div>
      </div>

      {/* Third Section */}
      <div className="py-16 px-10 md:px-20">
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-10">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg text-center space-y-4 transition-transform transform hover:scale-105 duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 * index,
                type: "spring",
                stiffness: 100,
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-2xl font-semibold">{item.number}</h3>
              <h4 className="text-xl font-medium">{item.title}</h4>
              <p className="text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fourth Section */}
      <div className="flex flex-col md:flex-row items-center justify-between py-20 px-10 md:px-20 space-y-10 md:space-y-0 md:space-x-24">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Cooking Skills Progress
          </h2>
          <p className="text-lg">
            Track your cooking skills with these progress indicators.
          </p>
          <div className="space-y-6">
            {progressData.map((progress, index) => (
              <div key={index}>
                <h3 className="text-lg font-medium mb-2">{progress.label}</h3>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <motion.div
                    className="bg-orange-500 h-4 rounded-full flex justify-center items-center text-white text-xs font-medium"
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${progress.percentage}%` }}
                    transition={{
                      delay: 0.2 * index,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    {progress.percentage}%
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 w-[100%]">
          <motion.img
            src={SectionImg}
            alt="Cooking Progress"
            className="w-full h-auto rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          />
        </div>
      </div>

      {/* Fifth Section */}
      <div className="py-20 bg-gray-100 px-10 md:px-20">
        <div className="text-center space-y-4 mb-12">
          <p className="text-orange-500 font-medium">Join Our Courses</p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Master Cooking Skills
          </h2>
          <p className="text-lg md:px-20">
            Enroll in our professional cooking courses to improve your skills
            and learn from the best!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col space-y-6 group"
            >
              <motion.img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover rounded-lg transition-transform transform group-hover:scale-105 duration-300"
                whileHover={{ scale: 1.05 }}
              />
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{course.title}</h3>
                <h4 className="text-lg font-medium">{course.subtitle}</h4>
                <p className="text-base">{course.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-600">
                    <span className="font-bold">Enrolled Students:</span>{" "}
                    {course.enrolled}
                  </p>
                  <div className="flex items-center">
                    <p className="text-gray-600 font-bold">Rating:</p>
                    <span className="text-yellow-400 ml-2">★★★★★</span>
                    <p className="ml-2 text-gray-600">({course.rating}/5)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
