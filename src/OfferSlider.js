// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import "./images/debitcard.png"
// import "./images/laptop.jpg"
// import "./images/Camera.jpg"
// import "./images/LaptopCamera.jpg"
// import { useNavigate } from "react-router-dom";

// const OfferSlider = () => {
//   const [offers, setOffers] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setOffers([
//       {
//         id: 1,
//         title: "50% Off on Mobile",
//         image: "https://cdn.pixabay.com/photo/2016/11/29/09/08/headphones-1868612_1280.jpg",
//       },
//       {
//         id: 2,
//         title: "Smartwatches Discount",
//         image: "https://cdn.pixabay.com/photo/2016/11/29/09/08/smartwatches-1868612_1280.jpg",
//       },
//       {
//         id: 3,
//         title: "Laptop Deals",
//         image: "https://cdn.pixabay.com/photo/2016/11/29/09/08/headphones-1868612_1280.jpg",
//       },
//       {
//         id: 4,
//         title: "Trimmer Sale",
//         image: "https://cdn.pixabay.com/photo/2016/11/29/09/08/headphones-1868612_1280.jpg",
//       },
//       {
//         id: 5,
//         title: "Headphones Offer",
//         image: "https://cdn.pixabay.com/photo/2016/11/29/09/08/headphones-1868612_1280.jpg",
//       },
//     ]);
//   }, []);

//   const settings = {
//     dots: false,         // No dots, like Amazon
//     infinite: true,      // Infinite loop sliding
//     speed: 700,         // Smooth slide transition
//     slidesToShow: 4,    // Show multiple images
//     slidesToScroll: 1,  // Scroll one by one
//     autoplay: true,     // Auto-slide
//     autoplaySpeed: 2500, // 2.5s per slide
//     arrows: true,       // Show left & right arrows
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 3 },
//       },
//       {
//         breakpoint: 768,
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 480,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto my-7 px-4">
//       <Slider {...settings}>
//         {offers.map((offer) => (
//           <div key={offer.id} className="p-2 cursor-pointer" onClick={() => navigate(`/offer-details/${offer.id}`)}>
//             <img src={offer.image} alt={offer.title} className="w-full h-56 object-cover rounded-lg shadow-md" />
//             <h2 className="text-center mt-2 font-bold">{offer.title}</h2>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };
// export default OfferSlider;
// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import { useNavigate } from "react-router-dom";

// // Import images correctly
// import laptop from "./images/laptop.jpg";
// // import camera from "./images/Camera.jpg";
// import laptopCamera from "./images/LaptopCamera.jpg";
// import Keyboard from "./images/Keyboard.jpg";
// // import speaker from "./images/speaker.jpg";
// import headphone from "./images/headphone.jpg";
// import camera1 from "./images/camera1.jpg";
// import Camera2 from "./images/Camera2.jpg";
// import oldspeaker from "./images/oldspeaker.jpg";
// import VoiceFilter from "./images/VoiceFilter.jpg";
// import minispeaker from "./images/minispeaker.jpg";

// const OfferSlider = () => {
//   const [offers, setOffers] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setOffers([
//       { id: 2, title: "Smartwatches Discount", image: laptop },
//       // { id: 3, title: "Laptop Deals", image: camera },
//       { id: 4, title: " laptopCamera", image: laptopCamera },
//       { id: 4, title: "Keyboard ", image: Keyboard },
//       // { id: 4, title: " speaker", image: speaker },
//       { id: 4, title: "headphone ", image: headphone },
//       { id: 4, title: "camera1 ", image: camera1 },
//       { id: 4, title: "Camera2 ", image: Camera2 },
//       { id: 4, title: "oldspeaker ", image: oldspeaker },
//       { id: 4, title: "VoiceFilter ", image: VoiceFilter },
//       { id: 4, title: "minispeaker ", image: minispeaker },
//     ]);
//   }, []);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 700,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     arrows: true,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 3 } },
//       { breakpoint: 768, settings: { slidesToShow: 2 } },
//       { breakpoint: 480, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto my-7 px-4">
//       <Slider {...settings}>
//         {offers.map((offer) => (
//           <div 
//             key={offer.id} 
//             className="p-2 cursor-pointer flex flex-col items-center" 
//             onClick={() => navigate(`/offer-details/${offer.id}`)}
//           >
//             {/* Image wrapper with fixed height */}
//             <div className="w-full h-[100px] flex justify-center items-center bg-gray-200 rounded-lg overflow-hidden">
//               <img 
//                 src={offer.image} 
//                 alt={offer.title} 
//                 className="h-[100px] max-h-[100px] w-auto max-w-full object-contain" 
//               />
//             </div>
//             <h2 className="text-center mt-2 font-bold">{offer.title}</h2>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default OfferSlider;
import React, { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

// Import local images
import laptop from "./images/laptop.jpg";
import laptopCamera from "./images/LaptopCamera.jpg";
import Keyboard from "./images/Keyboard.jpg";
import headphone from "./images/headphone.jpg";
import camera1 from "./images/camera1.jpg";
import Camera2 from "./images/Camera2.jpg";
import oldspeaker from "./images/oldspeaker.jpg";
import VoiceFilter from "./images/VoiceFilter.jpg";
import minispeaker from "./images/minispeaker.jpg";

const OfferSlider = () => {
  const navigate = useNavigate();

  // ✅ Memoize offers so it doesn't recreate on every render
  const offers = useMemo(() => [
    { id: 1, title: "Smartwatches Discount", image: laptop },
    { id: 2, title: "Laptop Camera", image: laptopCamera },
    { id: 3, title: "Keyboard", image: Keyboard },
    { id: 4, title: "Headphone", image: headphone },
    { id: 5, title: "Camera 1", image: camera1 },
    { id: 6, title: "Camera 2", image: Camera2 },
    { id: 7, title: "Old Speaker", image: oldspeaker },
    { id: 8, title: "Voice Filter", image: VoiceFilter },
    { id: 9, title: "Mini Speaker", image: minispeaker },
  ], []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="max-w-screen-xl mx-auto my-7 px-4">
      <Slider {...settings}>
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="p-2 cursor-pointer flex flex-col items-center will-change-transform"
            onClick={() => navigate(`/offer-details/${offer.id}`)}
          >
            {/* ✅ Fixed height and width to avoid reflow */}
            <div className="w-full h-[100px] flex justify-center items-center bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-contain"
                draggable={false}
              />
            </div>
            <h2 className="text-center mt-2 font-bold">{offer.title}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OfferSlider;
