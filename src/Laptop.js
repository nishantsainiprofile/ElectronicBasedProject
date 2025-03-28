import { useContext, useEffect, useState } from "react";
import { MyContext } from "./UseContext";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./App.css";

function Laptop() {
  const { setFindObject,FindObject, setSelectedElectronics, setImageIndex  , LoginState} = useContext(MyContext);
  const [combinedData, setCombinedData] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();
  
  // const API = axios.create({
  //   baseURL: 'https://backendwith-frontend.vercel.app/', // Replace with your actual backend URL
  //   withCredentials: true,  // Required if using cookies/sessions
  // });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          //  axios.get("http://localhost:5002/api/Laptop"),
          // axios.get("http://localhost:5002/api/Mobile"),
          // axios.get("http://localhost:5002/api/ChargingMobileBattery"),
          // axios.get("http://localhost:5002/api/watches"),

          axios.get("https://backendwith-frontend.vercel.app/api/Laptop"),
          axios.get("https://backendwith-frontend.vercel.app/api/Mobile"),
          axios.get("https://backendwith-frontend.vercel.app/api/ChargingMobileBattery"),
          axios.get("https://backendwith-frontend.vercel.app/api/watches"),
        ]);
          //  console.log(responses.data.LaptopObject); 
        const laptopData = responses[0]?.data?.LaptopObject || [];
        const mobileData = responses[1]?.data?.MobileData || [];
        const mobileChargerData = responses[2]?.data?.MobileCharger || [];
        const watchesData = responses[3]?.data?.WatchesData || [];

        let allData = [...laptopData, ...mobileData, ...mobileChargerData, ...watchesData];

        console.log("All Combined Data:", allData);
        
        allData = allData.sort(() => Math.random() - 0.5);
        setCombinedData(allData);
        setFindObject(allData);
        console.log(FindObject)
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setFindObject]);

  const handleImageClick = (item, index) => {
    setSelectedElectronics(item);
    setImageIndex(index);
    console.log(item)
    navigate(`/${item.BrandName}/${item._id}`);
  };

  const SubmitPayment = () => {
    if(LoginState){
      navigate("/Payment");
    }else {
      navigate("/Login")
    }
  };

  if (id) {
    const selectedItem = combinedData.find((item) => item._id === id);
    if (!selectedItem) {
      return <p className="text-center">Item not found</p>;
    }

    return (
      <div className="grid-container">
        <div className="grid-x grid-padding-x align-center">
          <div className="cell medium-5">
            <div className="card">
              <div className="card-divider">
                <h3>{selectedItem.series || selectedItem.Laptop || selectedItem.BrandName || selectedItem.BrandName || selectedItem.BrandName}</h3>
              </div>

              <img
                // src={`https://backendwith-frontend.vercel.app/${selectedItem.laptopImage || selectedItem.MobileImages?.replace(/\\/g, "/") || selectedItem.MobileBatteryImage || selectedItem.WatchImages}`}
                src={
                  selectedItem.laptopImage || 
                  selectedItem.MobileImages || 
                  selectedItem.MobileBatteryImage || 
                  selectedItem.WatchImages
                }
                alt="Product"
                className="thumbnail"
              />
              
              <div className="card-section">
                {Object.entries(selectedItem).map(([key, value], index) => (
                  <p key={index}>
                    <strong>{key}:</strong> {value}
                  </p>
                ))}
                <button className="button success" onClick={SubmitPayment}>
                  Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid-container">
      <div className="grid-x grid-padding-x small-up-1 medium-up-2 large-up-4">
        {combinedData.length > 0 ? (
          combinedData.map((item, index) => {
            // const imagePath = `https://backendwith-frontend.vercel.app/${item.laptopImage || item.MobileImages?.replace(/\\/g, "/") || item.MobileBatteryImage || item.WatchImages}`;
            const imagePath = item.laptopImage || item.MobileImages || item.MobileBatteryImage || item.WatchImages;

            console.log(`Rendering item ${index}:`, item);
            console.log("Image path:", imagePath); // Debugging log

            return (
              <div className="cell" key={index}>
                <div className="card">
                  <img
                    src={imagePath}
                    alt="Product"
                    className="thumbnail"
                    onClick={() => handleImageClick(item, index)}
                  />
                  <div className="card-section">
                    <h4>{item.BrandName}</h4>
                    <p><strong>Price:</strong> {item.LaptopPrice || item.Price || item.Price || item.Price}</p>
                    <p>{item.LaptopInformation || item.MobileInformation || item.TabletInformation || item.WatchInformation}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center">No products available.</p>
        )}
      </div>
    </div>
  );
}

export default Laptop;




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

