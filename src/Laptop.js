// import { useContext, useEffect, useState } from "react";
// import { MyContext } from "./UseContext";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import "./App.css";

// function Laptop() {
//   const { setFindObject,FindObject, setSelectedElectronics, setImageIndex  , LoginState} = useContext(MyContext);
//   const [combinedData, setCombinedData] = useState([]);
//   const [loading, setLoading] = useState(true);


//   const navigate = useNavigate();
//   const { id } = useParams();
  
//   // const API = axios.create({
//   //   baseURL: 'https://backendwith-frontend.vercel.app/', // Replace with your actual backend URL
//   //   withCredentials: true,  // Required if using cookies/sessions
//   // });
//   useEffect(() => {
    
//     const fetchData = async () => {
//       try {
//         const responses = await Promise.all([
//            axios.get("http://localhost:5001/api/Laptop"),
//           axios.get("http://localhost:5001/api/Mobile"),
//           axios.get("http://localhost:5001/api/ChargingMobileBattery"),
//           axios.get("http://localhost:5001/api/watches"),

//           // axios.get("https://backendwith-frontend.vercel.app/api/Laptop"),
//           // axios.get("https://backendwith-frontend.vercel.app/api/Mobile"),
//           // axios.get("https://backendwith-frontend.vercel.app/api/ChargingMobileBattery"),
//           // axios.get("https://backendwith-frontend.vercel.app/api/watches"),
//         ]);
//           //  console.log(responses.data.LaptopObject); 
//         const laptopData = responses[0]?.data?.LaptopObject || [];
//         const mobileData = responses[1]?.data?.MobileData || [];
//         const mobileChargerData = responses[2]?.data?.MobileCharger || [];
//         const watchesData = responses[3]?.data?.WatchesData || [];

//         let allData = [...laptopData, ...mobileData, ...mobileChargerData, ...watchesData];

//         console.log("All Combined Data:", allData);
        
//         allData = allData.sort(() => Math.random() - 0.5);
//         setCombinedData(allData);
//         setFindObject(allData);
//         console.log(FindObject)
//         setTimeout(() => {
//           setLoading(false);
//         }, 250);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [setFindObject]);

//   const handleImageClick = (item, index) => {
//     setSelectedElectronics(item);
//     setImageIndex(index);
//     console.log(item)
//     navigate(`/${item.BrandName}/${item._id}`);
//   };

//   const SubmitPayment = () => {
//     if(LoginState){
//       navigate("/Payment");
//     }else {
//       navigate("/Login")
//     }
//   };

//   if (loading) {
//     return (
//       <div className="loading-overlay">
//         <div className="spinner"></div>
//       </div>
//     );
//   }

//   if (id) {
//     const selectedItem = combinedData.find((item) => item._id === id);
//     if (!selectedItem) {
//       return <p className="text-center">Item not found</p>;
//     }

//     return (
//       <div className="grid-container">
//         <div className="grid-x grid-padding-x align-center">
//           <div className="cell medium-5">
//             <div className="card">
//               <div className="card-divider">
//                 <h3>{selectedItem.series || selectedItem.Laptop || selectedItem.BrandName || selectedItem.BrandName || selectedItem.BrandName}</h3>
//               </div>

//               <img
//                 // src={`https://backendwith-frontend.vercel.app/${selectedItem.laptopImage || selectedItem.MobileImages?.replace(/\\/g, "/") || selectedItem.MobileBatteryImage || selectedItem.WatchImages}`}
//                 src={
//                   selectedItem.laptopImage || 
//                   selectedItem.MobileImages || 
//                   selectedItem.MobileBatteryImage || 
//                   selectedItem.WatchImages
//                 }
//                 alt="Product"
//                 className="thumbnail"
//               />
              
//               <div className="card-section">
//                 {Object.entries(selectedItem).map(([key, value], index) => (
//                   <p key={index}>
//                     <strong>{key}:</strong> {value}
//                   </p>
//                 ))}
//                 <button className="button success" onClick={SubmitPayment}>
//                   Payment
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="grid-container">
//       <div className="grid-x grid-padding-x small-up-1 medium-up-2 large-up-6">
//         {combinedData.length > 0 ? (
//           combinedData.map((item, index) => {
//             // const imagePath = `https://backendwith-frontend.vercel.app/${item.laptopImage || item.MobileImages?.replace(/\\/g, "/") || item.MobileBatteryImage || item.WatchImages}`;
//             const imagePath = item.laptopImage || item.MobileImages || item.MobileBatteryImage || item.WatchImages;

//             console.log(`Rendering item ${index}:`, item);
//             console.log("Image path:", imagePath); // Debugging log

//             return (
//               <div className="cell" key={index}>
//                 <div className="card">
//                   <img
//                     src={imagePath}
//                     alt="Product"
//                     className="thumbnail"
//                     onClick={() => handleImageClick(item, index)}
//                   />
//                   <div className="card-section">
//                     <h4>{item.BrandName}</h4>
//                     <p><strong>Price:</strong> {item.LaptopPrice || item.Price || item.Price || item.Price}</p>
//                     <p>{item.LaptopInformation || item.MobileInformation || item.TabletInformation || item.WatchInformation}</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <p className="text-center">No products available.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Laptop;




// import { useContext, useEffect, useState, useCallback } from "react";
// import { MyContext } from "./UseContext";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import "./App.css";

// const API = axios.create({
//   baseURL: "https://backendwith-frontend.vercel.app/api/",
//   withCredentials: true,
// });

// const API_ENDPOINTS = ["Laptop", "Mobile", "ChargingMobileBattery", "watches"];

// function Laptop() {
//   const { setFindObject, setSelectedElectronics, setImageIndex, LoginState } =
//     useContext(MyContext);
//   const [combinedData, setCombinedData] = useState([]);

//   const navigate = useNavigate();
//   const { id } = useParams();

//   const fetchData = useCallback(async () => {
//     try {
//       const responses = await Promise.all(
//         API_ENDPOINTS.map((endpoint) => API.get(endpoint))
//       );

//       const allData = responses.flatMap((response, index) => {
//         switch (index) {
//           case 0:
//             return response.data.LaptopObject || [];
//           case 1:
//             return response.data.MobileData || [];
//           case 2:
//             return response.data.MobileCharger || [];
//           case 3:
//             return response.data.WatchesData || [];
//           default:
//             return [];
//         }
//       });

//       setCombinedData(allData.sort(() => Math.random() - 0.5));
//       setFindObject(allData);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }, [setFindObject]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   const handleImageClick = (item, index) => {
//     setSelectedElectronics(item);
//     setImageIndex(index);
//     navigate(`/${item.BrandName}/${item._id}`);
//   };

//   const SubmitPayment = () => {
//     navigate(LoginState ? "/Payment" : "/Login");
//   };

//   if (id) {
//     const selectedItem = combinedData.find((item) => item._id === id);
//     if (!selectedItem) return <p className="text-center">Item not found</p>;

//     return (
//       <div className="grid-container">
//         <div className="grid-x grid-padding-x align-center">
//           <div className="cell medium-5">
//             <div className="card">
//               <div className="card-divider">
//                 <h3>{selectedItem.series || selectedItem.BrandName}</h3>
//               </div>
//               <img src={selectedItem.laptopImage || selectedItem.MobileImages || selectedItem.MobileBatteryImage || selectedItem.WatchImages} alt="Product" className="thumbnail" />
//               <div className="card-section">
//                 {Object.entries(selectedItem).map(([key, value], index) => (
//                   <p key={index}>
//                     <strong>{key}:</strong> {value}
//                   </p>
//                 ))}
//                 <button className="button success" onClick={SubmitPayment}>
//                   Payment
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="grid-container">
//       <div className="grid-x grid-padding-x small-up-1 medium-up-2 large-up-4">
//         {combinedData.length > 0 ? (
//           combinedData.map((item, index) => (
//             <div className="cell" key={index}>
//               <div className="card">
//                 <img src={item.laptopImage || item.MobileImages || item.MobileBatteryImage || item.WatchImages} alt="Product" className="thumbnail" onClick={() => handleImageClick(item, index)} />
//                 <div className="card-section">
//                   <h4>{item.BrandName}</h4>
//                   <p><strong>Price:</strong> {item.LaptopPrice || item.Price}</p>
//                   <p>{item.LaptopInformation || item.MobileInformation || item.TabletInformation || item.WatchInformation}</p>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center">No products available.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Laptop;
// import { useContext, useEffect, useState } from "react";
// import { MyContext } from "./UseContext";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import "./App.css";

// function Laptop() {
//   const { setFindObject, FindObject, setSelectedElectronics, setImageIndex, LoginState } = useContext(MyContext);
//   const [combinedData, setCombinedData] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const responses = await Promise.all([
//           axios.get("http://localhost:5007/api/Laptop"),
//           axios.get("http://localhost:5007/api/Mobile"),
//           axios.get("http://localhost:5007/api/mobileCharger"),
//           axios.get("http://localhost:5007/api/mobileChargingBattery"),
//           axios.get("http://localhost:5007/api/watches"),
//           axios.get("http://localhost:5007/api/laptopCharger"),
//         ]);

//         const laptopData = responses[0]?.data?.LaptopObject || [];
//         const mobileData = responses[1]?.data?.MobileData || [];
//         const mobileChargerData = responses[2]?.data?.MobileCharger || [];
//         const mobileChargingBatteryData = responses[3]?.data?.mobileChargingBatteryData || [];
//         const watchesData = responses[4]?.data?.WatchesData || [];
//         const LaptopChargerData = responses[5]?.data?.LaptopChargerData || [];
//              console.log(LaptopChargerData,"this is laptopcharger");
//         let allData = [...laptopData, ...mobileData, ...mobileChargerData, ...watchesData , ...LaptopChargerData , ...mobileChargingBatteryData];

//         console.log("All Combined Data:", allData);
           
//         allData = allData.sort(() => Math.random() - 0.5);
//         setCombinedData(allData);
//         setFindObject(allData);
//         setTimeout(() => setLoading(false), 250);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [setFindObject]);

//   const handleImageClick = (item, index) => {
//     setSelectedElectronics(item);
//     setImageIndex(index);
//     console.log(item)
//     navigate(`/${item.BrandName}/${item._id}`);
//   };

//   const SubmitPayment = () => {
//     if (LoginState) {
//       navigate("/Payment");
//     } else {
//       navigate("/Login");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="loading-overlay">
//         <div className="spinner"></div>
//       </div>
//     );
//   }
//        if (id) {
//     const selectedItem = combinedData.find((item) => item._id === id);
//     if (!selectedItem) return <p className="text-center">Item not found</p>;

//     return (
//       <div className="grid-container">
//         <div className="grid-x grid-padding-x align-center">
//           <div className="cell medium-5">
//             <div className="card">
//               <div className="card-divider">
//                 <h3>{selectedItem.series || selectedItem.BrandName}</h3>
//               </div>
//  <img
//   src={`http://localhost:5007/${
//     Array.isArray(selectedItem.laptopImages) && selectedItem.laptopImages.length > 0
//       ? selectedItem.laptopImages[0].replace(/\\/g, "/")
//       : Array.isArray(selectedItem.MobileImages) && selectedItem.MobileImages.length > 0
//       ? selectedItem.MobileImages[0].replace(/\\/g, "/")
//       : Array.isArray(selectedItem.mobileChargingBatteryImages) && selectedItem.mobileChargingBatteryImages.length > 0
//       ? selectedItem.mobileChargingBatteryImages[0].replace(/\\/g, "/")
//       : Array.isArray(selectedItem.watchimages) && selectedItem.watchimages.length > 0
//       ? selectedItem.watchimages[0].replace(/\\/g, "/")
//       : Array.isArray(selectedItem.laptopChargerImages) && selectedItem.laptopChargerImages.length > 0
//       ? selectedItem.laptopChargerImages[0].replace(/\\/g, "/")
//       : Array.isArray(selectedItem.mobileChargerImages) && selectedItem.mobileChargerImages.length > 0
//       ? selectedItem.mobileChargerImages[0].replace(/\\/g, "/")
//       : ""
//   }`}
//   alt="Product"
//   className="thumbnail"
// />

//               <div className="card-section">
//                 {Object.entries(selectedItem).map(([key, value], index) => (
//                   <p key={index}>
//                     <strong>{key}:</strong> {value}
//                   </p>
//                 ))}
//                 <button className="button success" onClick={SubmitPayment}>
//                   Payment
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="product-container">
//       {combinedData.length > 0 ? (
//         combinedData.map((item, index) => {
//           const imagePaths = item.laptopImages || item.MobileImages || item.mobileChargingBatteryImages || item.watchimages ||item.laptopChargerImages || [];
//           console.log(imagePaths)
//           const displayedImages = Array.isArray(imagePaths) ? imagePaths.slice(0, 4) : [imagePaths];
//           const fixedImages = displayedImages.map(img => img.replace(/\\/g, "/"));
          

//            console.log(displayedImages);
//           return (
//             <div className="product-card" key={index} onClick={() => handleImageClick(item, index)}>
//               <div className="image-grid">
//                 {fixedImages.map((img, imgIndex) => (
//                   <img key={imgIndex} src={`http://localhost:5007/${img}`} alt="Product" className="product-image" />
                  
//                 ))}
//               </div>
//               <div className="product-info">
//                 <h4>{item.brandname}</h4>
//                 <p><strong>Price:</strong> { item.price}</p>
//                 <p>{item.LaptopInformation || item.MobileInformation || item.TabletInformation || item.WatchInformation}</p>
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <p className="text-center">No products available.</p>
//       )}
//     </div>
//   );
// }
// export default Laptop;
// import { useContext, useEffect, useState } from "react";
// import { MyContext } from "./UseContext";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./App.css";

// function Laptop() {
//   const { setFindObject, setSelectedElectronics, setImageIndex, LoginState } = useContext(MyContext);
//   const [combinedData, setCombinedData] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const responses = await Promise.all([
//           axios.get("http://localhost:5007/api/Laptop"),
//           axios.get("http://localhost:5007/api/Mobile"),
//           axios.get("http://localhost:5007/api/mobileCharger"),
//           axios.get("http://localhost:5007/api/mobileChargingBattery"),
//           axios.get("http://localhost:5007/api/watches"),
//           axios.get("http://localhost:5007/api/laptopCharger"),
//         ]);

//         const allData = [
//           ...(responses[0]?.data?.LaptopObject || []),
//           ...(responses[1]?.data?.MobileData || []),
//           ...(responses[2]?.data?.MobileCharger || []),
//           ...(responses[3]?.data?.mobileChargingBatteryData || []),
//           ...(responses[4]?.data?.WatchesData || []),
//           ...(responses[5]?.data?.LaptopChargerData || [])
//         ];

//         setCombinedData(allData.sort(() => Math.random() - 0.5));
//         setFindObject(allData);
//         setTimeout(() => setLoading(false), 250);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [setFindObject]);

//   const handleImageClick = (item, index) => {
//     setSelectedElectronics(item);
//     setImageIndex(index);
//     navigate(`/${item.BrandName}/${item._id}`);
//   };

//   const SubmitPayment = () => {
//     navigate(LoginState ? "/Payment" : "/Login");
//   };

//   if (loading) {
//     return (
//       <div className="loading-overlay">
//         <div className="spinner"></div>
//       </div>
//     );
//   }

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: true,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 3 } },
//       { breakpoint: 768, settings: { slidesToShow: 2 } },
//       { breakpoint: 480, settings: { slidesToShow: 1 } },
//     ],
//   };

//   if (id) {
//     const selectedItem = combinedData.find((item) => item._id === id);
//     if (!selectedItem) return <p className="text-center">Item not found</p>;

//     const selectedImages = selectedItem.laptopImages || selectedItem.MobileImages || selectedItem.mobileChargingBatteryImages || selectedItem.watchimages|| selectedItem.laptopChargerImages || selectedItem.mobileChargerImages|| [];
//     const validImages = Array.isArray(selectedImages) ? selectedImages.map(img => img.replace(/\\/g, "/")) : [];

//     return (
//       <div className="grid-container">
//         <div className="grid-x grid-padding-x align-center">
//           <div className="cell medium-5">
//             <div className="card">
//               <div className="card-divider">
//                 <h3>{selectedItem.series || selectedItem.BrandName}</h3>
//               </div>
//               {validImages.length > 0 && (
//                 <Slider {...settings}>
//                   {validImages.map((img, index) => (
//                     <div key={index} className="relative p-2">
//                       <img
//                         src={`http://localhost:5007/${img}`}
//                         alt="Product"
//                         className="w-full h-32 object-contain rounded-lg shadow-md"
//                       />
//                     </div>
//                   ))}
//                 </Slider>
//               )}
//               <div className="card-section">
//                 {Object.entries(selectedItem).map(([key, value], index) => (
//                   <p key={index}>
//                     <strong>{key}:</strong> {value}
//                   </p>
//                 ))}
//                 <button className="button success" onClick={SubmitPayment}>
//                   Payment
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="product-container">
//       {combinedData.length > 0 ? (
//         combinedData.map((item, index) => {
//           const imagePaths = item.laptopImages || item.MobileImages || item.mobileChargingBatteryImages || item.watchimages || item.laptopChargerImages || [];
//           const displayedImages = Array.isArray(imagePaths) ? imagePaths.slice(0, 4).map(img => img.replace(/\\/g, "/")) : [];

//           return (
//             <div className="product-card" key={index} onClick={() => handleImageClick(item, index)}>
//               <div className="image-grid">
//                 {displayedImages.map((img, imgIndex) => (
//                   <img key={imgIndex} src={`http://localhost:5007/${img}`} alt="Product" className="product-image" />
//                 ))}
//               </div>
//               <div className="product-info">
//                 <h4>{item.BrandName}</h4>
//                 <p><strong>Price:</strong> {item.price}</p>
//                 <p>{item.LaptopInformation || item.MobileInformation || item.TabletInformation || item.WatchInformation}</p>
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <p className="text-center">No products available.</p>
//       )}
//     </div>
//   );
// }

// export default Laptop;


// import { useContext, useEffect, useState } from "react";
// import { MyContext } from "./UseContext";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./App.css";

// function Laptop() {
//   const { setFindObject, setSelectedElectronics, setImageIndex, LoginState, bagItems, setBagItems } = useContext(MyContext);
//   const [combinedData, setCombinedData] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const responses = await Promise.all([
//           axios.get("http://localhost:5007/api/Laptop"),
//           axios.get("http://localhost:5007/api/Mobile"),
//           axios.get("http://localhost:5007/api/mobileCharger"),
//           axios.get("http://localhost:5007/api/mobileChargingBattery"),
//           axios.get("http://localhost:5007/api/watches"),
//           axios.get("http://localhost:5007/api/laptopCharger"),
//         ]);

//         const allData = [
//           ...(responses[0]?.data?.LaptopObject || []),
//           ...(responses[1]?.data?.MobileData || []),
//           ...(responses[2]?.data?.MobileCharger || []),
//           ...(responses[3]?.data?.mobileChargingBatteryData || []),
//           ...(responses[4]?.data?.WatchesData || []),
//           ...(responses[5]?.data?.LaptopChargerData || [])
//         ];

//         setCombinedData(allData.sort(() => Math.random() - 0.5));
//         setFindObject(allData);
//         setTimeout(() => setLoading(false), 250);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [setFindObject]);

//   const handleImageClick = (item, index) => {
//     setSelectedElectronics(item);
//     setImageIndex(index);
//     navigate(`/${item.BrandName}/${item._id}`);
//   };

//   const toggleBagItem = (item) => {
//     setBagItems((prevBag) => {
//       const isItemInBag = prevBag?.some((bagItem) => bagItem._id === item._id);
//       if (isItemInBag) {
//         return prevBag.filter((bagItem) => bagItem._id !== item._id);
//       } else {
//         return [...prevBag, item];
//       }
//     });
//   };

//   const SubmitPayment = () => {
//     navigate(LoginState ? "/Payment" : "/Login");
//   };

//   if (loading) {
//     return (
//       <div className="loading-overlay">
//         <div className="spinner"></div>
//       </div>
//     );
//   }

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: true,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 3 } },
//       { breakpoint: 768, settings: { slidesToShow: 2 } },
//       { breakpoint: 480, settings: { slidesToShow: 1 } },
//     ],
//   };

//   if (id) {
//     const selectedItem = combinedData.find((item) => item._id === id);
//     if (!selectedItem) return <p className="text-center">Item not found</p>;

//     const selectedImages = selectedItem.laptopImages || selectedItem.MobileImages || selectedItem.mobileChargingBatteryImages || selectedItem.watchimages || selectedItem.laptopChargerImages || selectedItem.mobileChargerImages || [];
//     const validImages = Array.isArray(selectedImages) ? selectedImages.map(img => img.replace(/\\/g, "/")) : [];

//     return (
//       <div className="grid-container">
//         <div className="grid-x grid-padding-x align-center">
//           <div className="cell medium-5">
//             <div className="card">
//               <div className="card-divider">
//                 <h3>{selectedItem.series || selectedItem.BrandName}</h3>
//               </div>
//               {validImages.length > 0 && (
//                 <Slider {...settings}>
//                   {validImages.map((img, index) => (
//                     <div key={index} className="relative p-2">
//                       <img
//                         src={`http://localhost:5007/${img}`}
//                         alt="Product"
//                         className="w-full h-32 object-contain rounded-lg shadow-md"
//                       />
//                     </div>
//                   ))}
//                 </Slider>
//               )}
//               <div className="card-section">
//                 {Object.entries(selectedItem).map(([key, value], index) => (
//                   <p key={index}>
//                     <strong>{key}:</strong> {value}
//                   </p>
//                 ))}
//                 <button className="button success" onClick={SubmitPayment}>
//                   Payment
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="product-container">
//       {combinedData.length > 0 ? (
//         combinedData.map((item, index) => {
//           const imagePaths = item.laptopImages || item.MobileImages || item.mobileChargingBatteryImages || item.watchimages || item.laptopChargerImages || [];
//           const displayedImages = Array.isArray(imagePaths) ? imagePaths.slice(0, 4).map(img => img.replace(/\\/g, "/")) : [];
//           const isInBag = bagItems?.some((bagItem) => bagItem._id === item._id) || false;

//           return (
//             <div className="product-card" key={index} onClick={() => handleImageClick(item, index)}>
//               <div className="image-grid">
//                 {displayedImages.map((img, imgIndex) => (
//                   <img key={imgIndex} src={`http://localhost:5007/${img}`} alt="Product" className="product-image" />
//                 ))}
//               </div>

//               <div className="product-info">
//                 <h4>{item.BrandName}</h4>
//                 <p><strong>Price:</strong> {item.price}</p>
//                 <p>{item.LaptopInformation || item.MobileInformation || item.TabletInformation || item.WatchInformation}</p>
                
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={isInBag}
//                     onClick={(e) => e.stopPropagation()} // Prevent parent click
//                     onChange={(e) => toggleBagItem(item, e)}
//                   />{" "}
//                   Add to Bag
//                 </label>
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <p className="text-center">No products available.</p>
//       )}
//     </div>
//   );
// }

// export default Laptop;
import { useContext, useEffect, useState } from "react";
import { MyContext } from "./UseContext";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function Laptop() {
  const { setFindObject, setSelectedElectronics, setImageIndex, LoginState, Email ,bagItems, setBagItems } = useContext(MyContext);
  const [combinedData, setCombinedData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate();
  const { id } = useParams();
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          // axios.get("http://localhost:5007/api/Laptop"),
          // axios.get("http://localhost:5007/api/Mobile"),
          // axios.get("http://localhost:5007/api/mobileCharger"),
          // axios.get("http://localhost:5007/api/mobileChargingBattery"),
          // axios.get("http://localhost:5007/api/watches"),
          // axios.get("http://localhost:5007/api/laptopCharger"),
          axios.get("https://backendwith-frontend.vercel.app/Laptop"),
          axios.get("https://backendwith-frontend.vercel.app/Mobile"),
          axios.get("https://backendwith-frontend.vercel.app/mobileCharger"),
          axios.get("https://backendwith-frontend.vercel.app/mobileChargingBattery"),
          axios.get("https://backendwith-frontend.vercel.app/api/watches"),
          axios.get("https://backendwith-frontend.vercel.app/laptopCharger"),
        ]);

        const allData = [
          ...(responses[0]?.data?.LaptopObject || []),
          ...(responses[1]?.data?.MobileData || []),
          ...(responses[2]?.data?.MobileCharger || []),
          ...(responses[3]?.data?.mobileChargingBatteryData || []),
          ...(responses[4]?.data?.WatchesData || []),
          ...(responses[5]?.data?.LaptopChargerData || [])
        ];

        setCombinedData(allData.sort(() => Math.random() - 0.5));
        setFindObject(allData);
        setTimeout(() => setLoading(false), 250);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setFindObject]);

  const fetchOrderList = async () => {
    try {
      // const response = await axios.get(`http://localhost:5007/api/orderlist/${Email}`);
      const response = await axios.get(`https://backendwith-frontend.vercel.app/api/orderlist/${Email}`);
      setBagItems(response.data.orderlist || []);
    } catch (error) {
      console.error("Error fetching order list:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (Email) {
      fetchOrderList();
    }
  }, [Email]);

  const handleImageClick = (item, index) => {
    setSelectedElectronics(item);
    setImageIndex(index);
    navigate(`/${item.BrandName}/${item._id}`);
  };

  // const toggleBagItem = (item) => {
  //   setBagItems((prevBag) => {
  //     const isItemInBag = prevBag?.some((bagItem) => bagItem._id === item._id);
  //     return isItemInBag ? prevBag.filter((bagItem) => bagItem._id !== item._id) : [...prevBag, item];
  //   });
  // };
    
  const toggleBagItem = (item) => {
    console.log(Email,item);
    // axios.post("http://localhost:5007/api/orderlist", { email:Email,  item })
    axios.post("https://backendwith-frontend.vercel.app/api/orderlist", { email:Email,  item })
      .then((res) => {
        setBagItems(res.data.orderlist); // Update state with the correct list
      })
      .catch((err) => console.log("Error:", err));
  };
  console.log(bagItems, "this is the bag items");

  const SubmitPayment = () => {
    navigate(LoginState ? "/Payment" : "/Login");
  };

  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="spinner"></div>
      </div>
    );
  }

  if (id) {
    const selectedItem = combinedData.find((item) => item._id === id);
    if (!selectedItem) return <p className="text-center">Item not found</p>;

    const selectedImages = selectedItem.laptopImages || selectedItem.MobileImages || selectedItem.mobileChargingBatteryImages || selectedItem.watchimages || selectedItem.laptopChargerImages || selectedItem.mobileChargerImages || [];
    const validImages = Array.isArray(selectedImages) ? selectedImages.map(img => img.replace(/\\/g, "/")) : [];

    return (
      <div className="grid-container">
        <div className="grid-x grid-padding-x align-center">
          <div className="cell medium-5">
            <div className="card">
              <div className="card-divider">
                <h3>{selectedItem.series || selectedItem.BrandName}</h3>
              </div>
              {validImages.length > 0 && (
                <Slider dots={false} infinite speed={500} slidesToShow={1} slidesToScroll={1} autoplay autoplaySpeed={2000} arrows>
                  {validImages.map((img, index) => (
                    <div key={index} className="relative p-2">
                      {/* <img src={`http://localhost:5007/${img}`} alt="Product" className="w-full h-32 object-contain rounded-lg shadow-md" /> */}
                      <img src={`https://backendwith-frontend.vercel.app/${img}`} alt="Product" className="w-full h-32 object-contain rounded-lg shadow-md" />
                    </div>
                  ))}
                </Slider>
              )}
              <div className="card-section">
                {Object.entries(selectedItem).map(([key, value], index) => (
                  <p key={index}><strong>{key}:</strong> {value}</p>
                ))}
                <button className="button success" onClick={SubmitPayment}>Payment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-container">
      {combinedData.length > 0 ? (
        combinedData.map((item, index) => {
          const imagePaths = item.laptopImages || item.MobileImages || item.mobileChargingBatteryImages || item.watchimages || item.laptopChargerImages || [];
          const displayedImages = Array.isArray(imagePaths) ? imagePaths.slice(0, 4).map(img => img.replace(/\\/g, "/")) : [];

          const isInBag = bagItems?.some((bagItem) => bagItem._id === item._id) || false;

          return (
            <div className="product-card" key={index} onClick={() => handleImageClick(item, index)}>
              <div className="image-grid">
                {displayedImages.map((img, imgIndex) => (
                  <img key={imgIndex} src={`https://backendwith-frontend.vercel.app/${img}`} alt="Product" className="product-image" />
                ))}
              </div>
              <div className="product-info">
                <h4>{item.BrandName}</h4>
                <p><strong>Price:</strong> {item.price}</p>
                <p>{item.LaptopInformation || item.MobileInformation || item.TabletInformation || item.WatchInformation}</p>
                {/* <label onClick={(e) => e.stopPropagation()}>
                  <input type="checkbox" checked={isInBag} onChange={() => toggleBagItem(item)} /> Add to Bag
                </label> */}
                <div className="bag-toggle">
  {isInBag ? (
    <button className="bag-btn remove" onClick={(e) => { e.stopPropagation(); toggleBagItem(item); }}>
      -
    </button>
  ) : (
    <button className="bag-btn add" onClick={(e) => { e.stopPropagation(); toggleBagItem(item); }}>
      +
    </button>
  )}
</div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-center">No products available.</p>
      )}
    </div>
  );
}

export default Laptop;


