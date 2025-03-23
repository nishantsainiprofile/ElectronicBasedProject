import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const OfferSlider = () => {
  const [offers, setOffers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setOffers([
      {
        id: 1,
        title: "50% Off on Mobile",
        image: "https://cdn.pixabay.com/photo/2016/11/29/09/08/headphones-1868612_1280.jpg",
      },
      {
        id: 2,
        title: "Smartwatches Discount",
        image: "https://cdn.pixabay.com/photo/2016/11/29/09/08/smartwatches-1868612_1280.jpg",
      },
      {
        id: 3,
        title: "Laptop Deals",
        image: "https://cdn.pixabay.com/photo/2016/11/29/09/08/headphones-1868612_1280.jpg",
      },
      {
        id: 4,
        title: "Trimmer Sale",
        image: "https://cdn.pixabay.com/photo/2016/11/29/09/08/headphones-1868612_1280.jpg",
      },
      {
        id: 5,
        title: "Headphones Offer",
        image: "https://cdn.pixabay.com/photo/2016/11/29/09/08/headphones-1868612_1280.jpg",
      },
    ]);
  }, []);

  const settings = {
    dots: false,         // No dots, like Amazon
    infinite: true,      // Infinite loop sliding
    speed: 700,         // Smooth slide transition
    slidesToShow: 4,    // Show multiple images
    slidesToScroll: 1,  // Scroll one by one
    autoplay: true,     // Auto-slide
    autoplaySpeed: 2500, // 2.5s per slide
    arrows: true,       // Show left & right arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="max-w-screen-xl mx-auto my-7 px-4">
      <Slider {...settings}>
        {offers.map((offer) => (
          <div key={offer.id} className="p-2 cursor-pointer" onClick={() => navigate(`/offer-details/${offer.id}`)}>
            <img src={offer.image} alt={offer.title} className="w-full h-56 object-cover rounded-lg shadow-md" />
            <h2 className="text-center mt-2 font-bold">{offer.title}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OfferSlider;
