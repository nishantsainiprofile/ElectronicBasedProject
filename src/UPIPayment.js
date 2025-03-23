// import React, { useState } from "react";

// function UPIPayment() {
//   const [selectedUPI, setSelectedUPI] = useState(null);

//   const handleUPISelection = (upiApp) => {
//     setSelectedUPI(upiApp);
//   };

//   const upiApps = ["Google Pay", "PhonePe", "Paytm", "BHIM"];

//   const upiPaymentUrl = (upiApp) => {
//     // const upiId = "your-merchant@upi"; // replace with your merchant UPI ID
//     const upiId = "nishantkrj25@okhdfcbank"; // replace with your merchant UPI ID
//     const amount = 500; // Example amount
//     const txnNote = "Electronics Purchase";
//     const yourName = "Nishant Saini";

//     // return `upi://pay?pa=${upiId}&pn=YourBusinessName&am=${amount}&tn=${txnNote}&cu=INR`;
    // return `upi://pay?pa=${upiId}&pn=${yourName}&am=${amount}&tn=${txnNote}&cu=INR`;

//   };

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h2>Select Your UPI App</h2>
//       <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
//         {upiApps.map((app) => (
//           <button
//             key={app}
//             onClick={() => handleUPISelection(app)}
//             style={{
//               padding: "10px 20px",
//               border: "1px solid #ccc",
//               borderRadius: "8px",
//               cursor: "pointer",
//               backgroundColor: selectedUPI === app ? "#4CAF50" : "#fff",
//               color: selectedUPI === app ? "#fff" : "#000",
//               transition: "0.3s"
//             }}
//           >
//             {app}
//           </button>
//         ))}
//       </div>

//       {selectedUPI && (
//         <div style={{ marginTop: "30px" }}>
//           <h3>Proceed to Pay with {selectedUPI}</h3>
//           <a href={upiPaymentUrl(selectedUPI)}>
//             <button
//               style={{
//                 marginTop: "10px",
//                 padding: "10px 30px",
//                 backgroundColor: "#4CAF50",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "8px",
//                 fontSize: "16px",
//                 cursor: "pointer"
//               }}
//             >
//               Pay Now via {selectedUPI}
//             </button>
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UPIPayment;

import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";

function UPIPayment({
  upiId = "nishantkrj25@okhdfcbank",
  amount = "1",
  txnNote = "Electronics Purchase",
  yourName = "Nishant Saini" // Add your name here directly
}) {
  const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(yourName)}&am=${amount}&tn=${encodeURIComponent(txnNote)}&cu=INR`;
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const navigate = useNavigate();

  const handlePayment = () => {
    if (isMobile) {
      window.location.href = upiUrl;
    } else {
      alert("Scan the QR code with your UPI app to complete the payment.");
    }
  };
  const handleConfirmPayment = () => {
    navigate("/payment-status");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ marginBottom: "10px", color: "#333" }}>Pay using UPI</h2>
      <p style={{ color: "#666", marginBottom: "20px" }}>Amount: ₹{amount}</p>

      <button
        onClick={handlePayment}
        style={{
          padding: "12px 24px",
          backgroundColor: "#0f9d58",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "30px",
          fontSize: "16px",
          transition: "0.3s"
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#0b7d45"}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#0f9d58"}
      >
        Pay with Google Pay / Paytm / PhonePe
      </button>

      {!isMobile && (
        <div style={{ textAlign: "center" }}>
          <p style={{ marginBottom: "10px" }}>Or scan this QR code using any UPI app:</p>
=          <QRCodeCanvas value={upiUrl} size={200} />

<button
        onClick={handleConfirmPayment}
        style={{
          padding: "10px 20px",
          backgroundColor: "#2196F3",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "20px",
          fontSize: "14px"
        }}
      >
        I have completed the payment
      </button>
</div>
      )}
    </div>
  );
}

export default UPIPayment;

