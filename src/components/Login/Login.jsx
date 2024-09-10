import React, { useState } from "react";
import Img2 from "../../assets/Login.webp";
import BanIMg from "../../assets/contactBanner.webp";

const BannerImg = {
  backgroundImage: `url(${BanIMg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "30vw",
};

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send user data to server
    console.log(user);
  };

  return (
    <div style={BannerImg}>
      <div className="h-[30vw] flex justify-center items-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold">Login</h1>
      </div>
      <div className="flex flex-col justify-center items-center py-8 md:py-10">
        <p className="text-black text-lg md:text-xl">LEARN WELL</p>
        <h2 className="text-3xl md:text-5xl w-[80vw] lg:w-[30vw] text-center text-black">
          Enroll in some of our many courses
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 md:space-x-0 lg:space-x-12 px-4 md:px-8 lg:px-12 items-stretch">
        <div className="w-full lg:w-[60%] h-full">
          <img src={Img2} className="w-full h-full object-cover" alt="Contact" />
        </div>
        <div className="flex flex-col justify-center space-y-6 items-start w-full lg:w-[40%] px-4 md:px-8 lg:px-12 bg-blue-200 py-6 md:py-8 lg:py-12">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Online Registration
            </h2>
            <p className="text-base md:text-lg">
              Nulla at volutpat diam ut venenatis tellus. Eget duis at in tellus at urna. Auctor augue mauris augue.
            </p>
          </div>
          <div className="w-full">
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                value={user.email}
                id="email"
                required
                autoComplete="off"
                className="p-3 border border-gray-300 rounded"
                onChange={handleInput}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                value={user.password}
                id="password"
                required
                autoComplete="off"
                className="p-3 border border-gray-300 rounded"
                onChange={handleInput}
              />
              <button
                type="submit"
                className="text-center text-md bg-slate-700 hover:bg-green-900 text-white w-full md:w-[30%] p-3 rounded lg:my-4"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
