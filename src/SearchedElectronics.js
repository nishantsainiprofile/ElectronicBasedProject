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
// SearchedBlog.js
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./UseContext";

function SearchedBlog() {
  const { FilteredProducts, setSelectedElectronicProduct } = useContext(MyContext);
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const handleProductClick = (product) => {
    setSelectedElectronicProduct(product);
    navigate(`/SelectedElectronicsId/${product.series}`);
  };

  const getImages = (product) => {
    return (
      product.laptopImages ||
      product.laptopImage ||
      product.laptopChargerImages ||
      product.mobileimages ||
      product.watchimages ||
      product.mobileChargingBatteryImages ||
      []
    );
  };

  const handleNext = (productIndex, totalImages) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [productIndex]: (prev[productIndex] + 1) % totalImages,
    }));
  };

  const handlePrev = (productIndex, totalImages) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [productIndex]: (prev[productIndex] - 1 + totalImages) % totalImages,
    }));
  };

  return (
    <div>
      <h2>Search Results:</h2>
      {FilteredProducts && FilteredProducts.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
          {FilteredProducts.map((product, index) => {
            const images = getImages(product);
            const currentIndex = currentImageIndex[index] || 0;
            return (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  textAlign: "center",
                }}
                onClick={() => handleProductClick(product)}
              >
                {images.length > 0 && (
                  <div>
                    <img
                      src={images[currentIndex]}
                      alt={product.series}
                      style={{ width: "100%", height: "150px", objectFit: "cover" }}
                    />
                    {images.length > 1 && (
                      <div style={{ marginTop: "10px" }}>
                        <button onClick={(e) => { e.stopPropagation(); handlePrev(index, images.length); }}>◀️</button>
                        <button onClick={(e) => { e.stopPropagation(); handleNext(index, images.length); }}>▶️</button>
                      </div>
                    )}
                  </div>
                )}
                <h4 style={{ margin: "10px 0" }}>{product.series}</h4>
                <p><strong>Price:</strong> ₹{product.price || "N/A"}</p>
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
