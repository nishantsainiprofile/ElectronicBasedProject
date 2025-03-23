// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Payment() {
//   const navigate = useNavigate();

//   function CardPayment() {
//     navigate("/App");
//   }

//   function PaytmPayment() {
//     navigate("/paytm");
//   }

//   return (
//     <div className="grid-container">
//       <h1 className="text-center">Choose Your Payment Method</h1>
//       <div className="grid-x grid-margin-x align-center">
//         <div className="cell small-12 medium-6">
//           <button
//             className="button success expanded"
//             onClick={CardPayment}
//           >
//             Card Payment
//           </button>
//         </div>
//         <div className="cell small-12 medium-6">
//           <button
//             className="button alert expanded"
//             onClick={PaytmPayment}
//           >
//             Paytm Payment
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Payment;
import React from "react";
import { useNavigate } from "react-router-dom";
import { CreditCard, CreditCardIcon, QrCode, Smartphone, Wallet } from "lucide-react";

function Payment() {
  const navigate = useNavigate();

  const paymentMethods = [
    { label: "Credit Card", icon: <CreditCardIcon size={32} />, onClick: () => navigate("/App") },
    { label: "Debit Card", icon: <CreditCard size={32} />, onClick: () => navigate("/debit-card") },
    { label: "UPI Payment", icon: <Smartphone size={32} />, onClick: () => navigate("/upi-payment") },
    { label: "QR Code Scan", icon: <QrCode size={32} />, onClick: () => navigate("/qr-scan") },
    { label: "Cash On Delivery", icon: <Wallet size={32} />, onClick: () => navigate("/cod") },
  ];

  return (
    <div className="flex flex-col items-center p-8 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold mb-8">Choose Your Payment Method</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {paymentMethods.map((method, index) => (
          <div
            key={index}
            onClick={method.onClick}
            className="cursor-pointer bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition"
          >
            <div className="mb-4 text-blue-600">{method.icon}</div>
            <h2 className="text-lg font-medium">{method.label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Payment;


