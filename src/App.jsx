// import './App.css'

import { Navbar } from "../src/components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Error404 } from "./components/Error404/Error404";
import About from "./components/About/About";
import { FAQ } from "./components/Faq/Faq";
import PricingPlans from "./components/PricingPlans/PricingPlans";

function App() {
  return (
    <div className="">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/pricingplans" element={<PricingPlans/>} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
