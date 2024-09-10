import React from "react";
import HeroImg from "../../assets/HeroSection.webp";
import secondImg from "../../assets/Gardner.webp";
import "../../index.css"; // Ensure you import the CSS file
import { motion } from "framer-motion";
import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.webp";
import Icon3 from "../../assets/icon3.webp";
import cooking from "../../assets/CookingLogo.webp";
import ThirdImg from "../../assets/high-angle-homemade-salad-with-dark-tableware.webp";
import fourthImg from "../../assets/hand-pouring-sugar-into-cooking-pan (2).webp";
import fifthImg from "../../assets/high-angle-homemade-salad-with-dark-tableware.webp";

const Home = () => {
  const Details = [
    {
      image: Icon1,
      description:
        "Aliquami sem fringilla ut morbi tincidunt augue. Sed euismod porta lorem vitae sapien.",
    },
    {
      image: Icon2,
      description:
        "Bibendum arcu vitae elementum curabitur. Fermentum leo vel porta non pulvinar neque.",
    },
    {
      image: Icon3,
      description:
        "Suspendisse ultrices gravida dictum fusce. Ferment dui faucibus in ornare.",
    },
  ];

  const Ingredient = [
    {
      number: "1.",
      title: "Preparing Chopping Dicing",
      description:
        "• Proin sed libero enim sed do\n• Morbi blandit cursus risus at\n• Ut lectus arcu bibendum",
    },
    {
      number: "2.",
      title: "Slicing, Mincing, Adding, Combining.",
      description:
        "• Proin sed libero enim sed do\n• Morbi blandit cursus risus at\n• Ut lectus arcu bibendum",
    },
    {
      number: "3.",
      title: "Crunching Dripping Drizzeling",
      description:
        "• Proin sed libero enim sed do\n• Morbi blandit cursus risus at\n• Ut lectus arcu bibendum",
    },
    {
      number: "4.",
      title: "Baking Dressing Garnishing",
      description:
        "• Proin sed libero enim sed do\n• Morbi blandit cursus risus at\n• Ut lectus arcu bibendum",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="Hero hero-gradient flex flex-col md:flex-row p-10 md:p-20 space-y-10 md:space-x-20 ">
        <div className="left w-full md:w-[50%] space-y-4 md:px-10 lg:px-28 text-center md:text-left ">
          <p className="tracking-wide text-xl md:text-2xl">ART OF MAKING FOOD</p>
          <h1 className="text-5xl md:text-8xl">Everyone Can Learn to Cook</h1>
          <p className="font-regular text-base md:text-lg">
            "Everyone Can Learn to Cook" invites all to discover the joy of
            cooking, regardless of experience. With easy recipes, clear
            instructions, and practical tips, this approach makes cooking
            accessible and enjoyable for everyone. Whether you're just starting
            or refining your skills, you'll find that creating delicious meals
            is within reach for anyone willing to try.
          </p>
          <div className="second">
            <motion.img
              src={secondImg}
              alt="Gardner"
              className="mt-10 mb-4 mx-auto lg:mx-0 w-full md:w-auto"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
            />
            <h3 className="text-center font-regular text-xl">
              We’ll cover essential basics to help you master cooking and create
              the most flavorful dishes.
            </h3>
          </div>
          <motion.img
            src={cooking}
            alt="Cooking-logo"
            className="pt-10 md:pt-28 mx-auto lg:mx-0 w-full md:w-auto"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
          />
        </div>
        <div className="Right w-full md:w-[50%] text-center">
          <motion.img
            src={HeroImg}
            alt="Hero Section"
            className="w-full"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
          />
          <div className="second mt-10 md:mt-36 mb-10 md:mb-20">
            <p>Love & Food</p>
            <h1 className="text-3xl md:text-6xl font-medium">
              Learn to cook the finest & best dishes
            </h1>
          </div>
          <div className="flex flex-wrap justify-center space-x-4 md:space-x-8 space-y-4 md:space-y-16">
            {Details.map((detail, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center px-4 md:px-20 space-y-5"
              >
                <img src={detail.image} alt="Icon" />
                <p className="text-lg md:text-xl font-regular">
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ingredients Section */}
      <div className="second-sec flex flex-col md:flex-row h-auto md:h-[45vw] mt-10 md:mt-28">
        <div className="left flex flex-wrap w-full md:w-[60%] overflow-y-auto justify-center items-center px-4 md:px-24">
          {Ingredient.map((ingredient, index) => (
            <div
              key={index}
              className="flex flex-col w-full md:w-1/2 space-y-1 p-2"
            >
              <h1 className="text-6xl md:text-8xl font-bold">
                {ingredient.number}
              </h1>
              <p className="text-2xl md:text-3xl font-medium">
                {ingredient.title}
              </p>
              <div className="flex flex-col space-y-1 text-base md:text-lg">
                {ingredient.description.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="right w-full md:w-[40%] flex items-center justify-center flex-col p-10 md:pe-10">
          <motion.img
            src={ThirdImg}
            alt="Salad"
            className="mb-4 w-full"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
          />
        </div>
      </div>

      {/* How-To Section */}
      <div className="howto my-20 md:my-30 flex flex-col md:flex-row p-10">
        <div className="w-full md:w-[50%]">
          <motion.img
            src={fourthImg}
            className="w-full"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
          />
        </div>
        <div className="second flex flex-col items-center justify-center w-full md:w-[50%] text-center space-y-6 py-10">
          <p>ITALY & PASTA</p>
          <h2 className="text-3xl md:text-5xl w-[80%] md:w-[70%]">
            How to cook the most exquisite pasta dish
          </h2>
          <motion.img
            src={fifthImg}
            className="w-[80%] lg:w-[60%]"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
          />
          <p className="text-xl md:text-2xl w-[80%] md:w-[60%]">
            With us learn to develop pasta making and cooking skills
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
