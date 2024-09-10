import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Img2 from "../../assets/contactwomen.webp";
import BanIMg from "../../assets/contactBanner.webp";

const BannerImg = {
  backgroundImage: `url(${BanIMg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

export const Contact = () => {
  return (
    <div>
      {/* Banner Section */}
      <div
        style={BannerImg}
        className="h-[60vw] md:h-[30vw] flex justify-center items-center"
      >
        <motion.div
          className="bg-black bg-opacity-50 p-10 rounded-lg"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            Contact Us
          </h1>
        </motion.div>
      </div>

      {/* Intro Section */}
      <motion.div
        className="flex flex-col justify-center items-center py-16 md:py-20"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <p className="text-black text-lg md:text-xl">LEARN WELL</p>
        <h2 className="text-3xl md:text-5xl w-[80vw] md:w-[30vw] text-center text-black">
          Enroll in some of our many courses
        </h2>
      </motion.div>

      {/* Contact Info and Form Section */}
      <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12 px-4 md:px-12">
        <motion.div
          className="w-full md:w-[60%]"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <img src={Img2} className="w-full" alt="Contact" />
        </motion.div>

        <motion.div
          className="flex flex-col justify-center space-y-12 items-start w-full md:w-[40%] px-4 md:px-12 bg-blue-200 py-6 md:py-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Online Registration
            </h2>
            <p className="text-base md:text-lg">
              Nulla at volutpat diam ut venenatis tellus. Eget duis at in tellus
              at urna. Auctor augue mauris augue.
            </p>
          </div>
          <div className="flex flex-col w-full space-y-6">
            <input
              type="text"
              name="Your Name"
              placeholder="Enter your name"
              className="p-3 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="Your Email"
              placeholder="Enter your email"
              className="p-3 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="Your Phone Number"
              placeholder="Enter your phone number"
              className="p-3 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Enter your Message"
              className="p-3 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="text-center text-md bg-slate-700 hover:bg-green-900 text-white w-full md:w-[30%] p-3 rounded"
            >
              Send Message
            </button>
          </div>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        className="px-4 md:px-12 py-16 md:py-20"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Find Us Here
        </h2>
        <div className="relative w-full h-[40vh]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.327473793445!2d-122.41941558468188!3d37.77492927975988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a1c5895b3%3A0x5241b021dc9461f!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1636514902115!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};
