// import { useContext } from "react";
// import { MyContext } from "./UseContext";

// function SelectedElectronicsId() {
//   const { SelectedElectronicProduct } = useContext(MyContext);

//   if (!SelectedElectronicProduct) {
//     return <p style={{ textAlign: "center", marginTop: "50px" }}>No product details found!</p>;
//   }

//   return (
//     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
//       <div style={{ textAlign: "center", border: "1px solid #ddd", padding: "20px", borderRadius: "12px", maxWidth: "600px", width: "100%" }}>
//         <img
//           src={`http://localhost:5002/${SelectedElectronicProduct.laptopImage}`}
//           alt={SelectedElectronicProduct.series}
//           style={{ width: "100%", height: "300px", objectFit: "contain", marginBottom: "20px" }}
//         />
//         {Object.entries(SelectedElectronicProduct).map(([key, value], index) => (
//           key !== "laptopImage" && ( // we already display the image separately
//             <p key={index} style={{ margin: "8px 0" }}>
//               <strong>{formatKey(key)}:</strong> {value}
//             </p>
//           )
//         ))}
//       </div>
//     </div>
//   );
// }

// // Optional: Format key nicely (e.g., convert camelCase or snake_case to readable text)
// function formatKey(key) {
//   return key
//     .replace(/([A-Z])/g, ' $1') // Add space before capital letters
//     .replace(/_/g, ' ') // Replace underscores with spaces
//     .replace(/^./, (str) => str.toUpperCase()); // Capitalize first letter
// }

// export default SelectedElectronicsId;

import { useContext } from "react";
import { useNavigate } from "react-router-dom"; // for navigation
import { MyContext } from "./UseContext";

function SelectedElectronicsId() {
  const { SelectedElectronicProduct } = useContext(MyContext);
  const navigate = useNavigate();

  if (!SelectedElectronicProduct) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>No product details found!</p>;
  }

  const handlePurchase = () => {
    navigate("/Payment"); // assuming "/payment" route is your Payment.js component
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
      <div style={{ textAlign: "center", border: "1px solid #ddd", padding: "20px", borderRadius: "12px", maxWidth: "600px", width: "100%" }}>
        <img
          src={`http://localhost:5002/${SelectedElectronicProduct.laptopImage}`}
          alt={SelectedElectronicProduct.series}
          style={{ width: "100%", height: "200px", objectFit: "contain", marginBottom: "20px" }}
        />
     {Object.entries(SelectedElectronicProduct).map(([key, value], index) => (
  key !== "laptopImage" && (
    <p key={index} style={{ margin: "8px 0" }}>
      <strong>{formatKey(key)}:</strong> {typeof value === "object" ? JSON.stringify(value) : value}
    </p>
  )
))}


        <button
          onClick={handlePurchase}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Purchase Now
        </button>
      </div>
    </div>
  );
}

function formatKey(key) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/_/g, ' ')
    .replace(/^./, (str) => str.toUpperCase());
}

export default SelectedElectronicsId;
