// // SearchedBlog.js
// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { MyContext } from "./UseContext";

// function SearchedBlog() {
//   const { FilteredProducts ,setSelectedElectronicProduct } = useContext(MyContext);
//   console.log(FilteredProducts);
//   const navigate = useNavigate();

//   const handleProductClick = (product) => {
//     setSelectedElectronicProduct(product);
//     navigate(`/SelectedElectronicsId/${product.series}`);
//   };

//   return (
//     <div>
//       <h2>Search Results:</h2>
//       {FilteredProducts && FilteredProducts.length > 0 ? (
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
//           {FilteredProducts.map((product, index) => (
            
//             <div
//               key={index}
//               style={{
//                 border: "1px solid #ddd",
//                 padding: "10px",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 textAlign: "center",
//               }}
//               onClick={() => handleProductClick(product)}
//             >
              
//               <img
//                 // src={`https://backendwith-frontend.vercel.app/${product.laptopImage}`}
//                 src={product.laptopImages||product.mobileChargingBatteryImages|| product.mobileChargerImages
//                      || product.laptopChargerImages || product.mobileimages || product.watchimages
//                 }
//                 alt={product.series}
//                 style={{ width: "100%", height: "150px", objectFit: "cover" }}
//               />
//               <h4 style={{ margin: "10px 0" }}>{product.series}</h4>
//               <p><strong>Price:</strong> ₹{product.price || "N/A"}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No products found!</p>
//       )}
//     </div>
//   );
// }
// export default SearchedBlog;
// SearchedBlog.js
// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { MyContext } from "./UseContext";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function SearchedBlog() {
//   const { FilteredProducts, setSelectedElectronicProduct } = useContext(MyContext);
//   const navigate = useNavigate();

//   const handleProductClick = (product) => {
//     setSelectedElectronicProduct(product);
//     navigate(`/SelectedElectronicsId/${product.series}`);
//   };

//   // Get the first available image array from the product
//   const getImageArray = (product) => {
//     return (
//       product.laptopImages ||
//       product.laptopImage ||
//       product.laptopChargerImages ||
//       product.mobileimages ||
//       product.watchimages ||
//       product.mobileChargingBatteryImages ||
//       []
//     );
//   };

//   // Slider settings
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };

//   return (
//     <div>
//       <h2>Search Results:</h2>
//       {FilteredProducts && FilteredProducts.length > 0 ? (
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
//           {FilteredProducts.map((product, index) => {
//             const images = getImageArray(product);
            

//             return (
//               <div
//                 key={index}
//                 style={{
//                   border: "1px solid #ddd",
//                   padding: "10px",
//                   borderRadius: "8px",
//                   textAlign: "center",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => handleProductClick(product)}
//               >
//                 {/* Image carousel */}
//                 <div style={{ width: "100%", height: "150px" }}>
//                   {Array.isArray(images) && images.length > 0 ? (
//                     <Slider {...sliderSettings}>
//                       {images.map((imgUrl, imgIndex) => (
//                         <div key={imgIndex}>
//                           <img
//                             src={imgUrl}
//                             alt={`${product.series}-${imgIndex}`}
//                             style={{
//                               width: "100%",
//                               height: "150px",
//                               objectFit: "cover",
//                               borderRadius: "6px",
//                             }}
//                           />
//                         </div>
//                       ))}
//                     </Slider>
//                   ) : (
//                     <p>No images</p>
//                   )}
//                 </div>

//                 <h4 style={{ margin: "10px 0" }}>{product.series}</h4>
//                 <p><strong>Price:</strong> ₹{product.price || "N/A"}</p>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <p>No products found!</p>
//       )}
//     </div>
//   );
// }
// export default SearchedBlog;
// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { MyContext } from "./UseContext";

// function SearchedBlog() {
//   const { FilteredProducts, setSelectedElectronicProduct } = useContext(MyContext);
//   const navigate = useNavigate();

//   const [imageIndexes, setImageIndexes] = useState({});

//   // Extracts image array from product
//   const getImageArray = (product) => {
//     return (
//       product.laptopImages ||
//       product.laptopImage ||
//       product.mobileChargingBatteryImages ||
//       product.mobileChargerImages ||
//       product.laptopChargerImages ||
//       product.mobileimages ||
//       product.watchimages ||
//       []
//     );
//   };

//   // Auto update image index every 2 seconds for each product
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setImageIndexes((prevIndexes) => {
//         const updatedIndexes = {};
//         FilteredProducts.forEach((product, index) => {
//           const images = getImageArray(product);
//           const currentIndex = prevIndexes[index] || 0;
//           updatedIndexes[index] = (currentIndex + 1) % images.length;
//         });
//         return updatedIndexes;
//       });
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [FilteredProducts]);

//   const handleProductClick = (product) => {
//     setSelectedElectronicProduct(product);
//     navigate(`/SelectedElectronicsId/${product.series}`);
//   };

//   return (
//     <div>
//       <h2>Search Results:</h2>
//       {FilteredProducts && FilteredProducts.length > 0 ? (
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
//           {FilteredProducts.map((product, index) => {
//             const images = getImageArray(product);
//             const currentIndex = imageIndexes[index] || 0;

//             return (
//               <div
//                 key={index}
//                 onClick={() => handleProductClick(product)}
//                 style={{
//                   border: "1px solid #ddd",
//                   padding: "10px",
//                   borderRadius: "8px",
//                   textAlign: "center",
//                   cursor: "pointer",
//                 }}
//               >
//                 {images.length > 0 ? (
//                   <img
//                     src={images[currentIndex]}
//                     alt={product.series}
//                     style={{
//                       width: "100%",
//                       height: "150px",
//                       objectFit: "cover",
//                       borderRadius: "5px",
//                       transition: "all 0.5s ease-in-out",
//                     }}
//                   />
//                 ) : (
//                   <p>No image available</p>
//                 )}
//                 <h4 style={{ margin: "10px 0" }}>{product.series}</h4>
//                 <p><strong>Price:</strong> ₹{product.price || "N/A"}</p>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <p>No products found!</p>
//       )}
//     </div>
//   );
// }
// export default SearchedBlog;
import React, { useContext } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./UseContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SearchedBlog() {
  const { FilteredProducts, setSelectedElectronicProduct } = useContext(MyContext);
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    setSelectedElectronicProduct(product);
    navigate(`/SelectedElectronicsId/${product.series}`);
  };

  const getImageArray = (product) => {
    return (
      product.laptopImages ||
      product.laptopImage ||
      product.mobileChargingBatteryImages ||
      product.mobileChargerImages ||
      product.laptopChargerImages ||
      product.mobileimages ||
      product.watchimages ||
      []
    );
  };

  // Slick slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div>
      <h2>Search Results:</h2>
      {FilteredProducts && FilteredProducts.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {FilteredProducts.map((product, index) => {
            const images = getImageArray(product);

            return (
              <div
                key={index}
                onClick={() => handleProductClick(product)}
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                {images.length > 0 ? (
                  <Slider {...sliderSettings}>
                    {images.map((img, i) => (
                      <div key={i}>
                        <img
                          src={img}
                          alt={`product-${i}`}
                          style={{
                            height: "180px",
                            width: "100%",
                            objectFit: "cover",
                            borderRadius: "6px",
                          }}
                        />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <p>No images</p>
                )}
                <h4 style={{ margin: "10px 0" }}>{product.series}</h4>
                <p>
                  <strong>Price:</strong> ₹{product.price || "N/A"}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No products found!</p>
      )}
    </div>
  );
}

export default SearchedBlog;

