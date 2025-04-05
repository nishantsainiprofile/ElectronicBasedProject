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
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./UseContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SearchedBlog() {
  const { FilteredProducts, setSelectedElectronicProduct } = useContext(MyContext);
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    setSelectedElectronicProduct(product);
    navigate(`/SelectedElectronicsId/${product.series}`);
  };

  // Helper to get image array from product
  const getImageArray = (product) => {
    return (
      product.laptopImages ||
      product.mobileChargingBatteryImages ||
      product.mobileChargerImages ||
      product.laptopChargerImages ||
      product.mobileimages ||
      product.watchimages ||
      []
    );
  };

  // Carousel settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
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
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  textAlign: "center",
                }}
                onClick={() => handleProductClick(product)}
              >
                {/* Slider for product images */}
                <div style={{ width: "100%", height: "150px" }}>
                  {images.length > 0 ? (
                    <Slider {...sliderSettings}>
                      {images.map((img, idx) => (
                        <div key={idx}>
                          <img
                            src={img}
                            alt={product.series}
                            style={{
                              width: "100%",
                              height: "150px",
                              objectFit: "cover",
                              borderRadius: "6px",
                            }}
                          />
                        </div>
                      ))}
                    </Slider>
                  ) : (
                    <p>No image</p>
                  )}
                </div>

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

