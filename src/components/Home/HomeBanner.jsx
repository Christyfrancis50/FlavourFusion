import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeBanner() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the JSON file
    axios
      .get("/list.json") // Use the correct path to the JSON file
      .then((response) => {
        console.log("Slides data fetched successfully:", response.data);
        setSlides(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the slides data:", error);
        setError("Failed to load slides");
        setLoading(false);
      });
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div
          key={slide.id}
          className="bg-cover bg-center h-72"
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="text-black text-center pt-12">
            <h3 className="text-2xl font-bold">{slide.name}</h3>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
}
