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
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { CreditCard, CreditCardIcon, QrCode, Smartphone, Wallet } from "lucide-react";

// function Payment() {
//   const navigate = useNavigate();

//   const paymentMethods = [
//     { label: "Credit Card", icon: <CreditCardIcon size={32} />, onClick: () => navigate("/App") },
//     { label: "Debit Card", icon: <CreditCard size={32} />, onClick: () => navigate("/debit-card") },
//     { label: "UPI Payment", icon: <Smartphone size={32} />, onClick: () => navigate("/upi-payment") },
//     { label: "QR Code Scan", icon: <QrCode size={32} />, onClick: () => navigate("/qr-scan") },
//     { label: "Cash On Delivery", icon: <Wallet size={32} />, onClick: () => navigate("/cod") },
//   ];

//   return (
//     <div className="flex flex-col items-center p-8 min-h-screen bg-gray-100">
//       <h1 className="text-3xl font-semibold mb-8">Choose Your Payment Method</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
//         {paymentMethods.map((method, index) => (
//           <div
//             key={index}
//             onClick={method.onClick}
//             className="cursor-pointer bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition"
//           >
//             <div className="mb-4 text-blue-600">{method.icon}</div>
//             <h2 className="text-lg font-medium">{method.label}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Payment;

// import React, { useState, useEffect , useContext} from 'react';
// import { MyContext } from "./UseContext";

// const PaymentComponent = () => {
//   const [razorpayKey, setRazorpayKey] = useState('');
//   const {selectedElectronics ,Email}= useContext(MyContext)
//   console.log(selectedElectronics._id);

//   useEffect(() => {
//     fetch('http://localhost:5002/api/get-razorpay-key')
//       .then((res) => res.json())
//       .then((data) => setRazorpayKey(data.key))
//       .catch((error) => console.error('Error fetching Razorpay key:', error));
//   }, []);

//   const handlePayment = () => {
//     if (!razorpayKey) {
//       alert("Razorpay key not loaded!");
//       return;
//     }

//     const options = {
//       key: razorpayKey, // Use the key from backend
//       amount: 50, 
//       currency: "INR",
//       name: "Electronics website ",
//       description: "Purchase Electronics",
//       image: "https://your-logo-url.com",
//       order_id: selectedElectronics._id, // Get this from backend
//       handler: function (response) {
//         alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
//       },
//       prefill: {
//         name: Email,
//         email: Email,
//         contact: "9876543210",
//       },
//       theme: {
//         color: "#F37254",
//       },
//     };

//     const rzp1 = new window.Razorpay(options);
//     rzp1.open();
//   };

//   return (
//     <div>
//       <h2>Payment Page</h2>
//       <button onClick={handlePayment}>Pay Now</button>
//     </div>
//   );
// };

// export default PaymentComponent;



// import React, { useState, useEffect, useContext } from "react";
// import { MyContext } from "./UseContext";

// const PaymentComponent = () => {
//   const [razorpayKey, setRazorpayKey] = useState("");
//   const { selectedElectronics, Email } = useContext(MyContext);

//   useEffect(() => {
//     fetch("http://localhost:5011/api/get-razorpay-key")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Fetched Razorpay Key:", data.key);
//         setRazorpayKey(data.key);
//       })
//       .catch((error) => console.error("Error fetching Razorpay key:", error));
//   }, []);

//   const handlePayment = async () => {
//     if (!razorpayKey) {
//       alert("Razorpay key not loaded!");
//       return;
//     }

//     if (!selectedElectronics) {
//       alert("No product selected!");
//       return;
//     }

//     try {
//       console.log("Creating order for product:", selectedElectronics);
//       const response = await fetch("http://localhost:5011/api/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: 1 }),
//       });
//       console.log(response)
//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error("Backend Error:", errorData);
//         alert("Error creating order: " + errorData.error);
//         return;
//       }

//       const orderData = await response.json();
//       console.log("Order Created:", orderData);

//       if (!orderData.id) {
//         alert("Order ID not received from backend!");
//         return;
//       }

//       loadRazorpay(orderData.id);
//     } catch (error) {
//       console.error("Payment error:", error);
//       alert("Error processing payment");
//     }
//   };

//   const loadRazorpay = (orderId) => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     script.onload = () => openRazorpay(orderId);
//     document.body.appendChild(script);
//   };

//   const openRazorpay = (orderId) => {
//     const options = {
//       key: razorpayKey,
//       amount: 1 * 100,
//       currency: "INR",
//       name: "Electronics Website",
//       description: "Purchase Electronics",
//       image: "https://your-logo-url.com",
//       order_id: orderId,
//       handler: function (response) {
//         console.log("Payment successful:", response);
//         alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
//       },
//       prefill: {
//         name: Email,
//         email: Email,
//       },
//       theme: { color: "#F37254" },
//     };

//     const rzp1 = new window.Razorpay(options);
//     rzp1.open();
//   };

//   return (
//     <div>
//       <h2>Payment Page</h2>
//       <button onClick={handlePayment}>Pay Now</button>
//     </div>
//   );
// };

// export default PaymentComponent;


// import React, { useState, useEffect, useContext } from "react";
// import { MyContext } from "./UseContext";
// import "./App.css";

// const PaymentComponent = () => {
//   const [razorpayKey, setRazorpayKey] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const { selectedElectronics, Email } = useContext(MyContext);
//    const {OrderBooked,setOrderBooked} = useContext(false);
//   useEffect(() => {
//     fetch("http://localhost:5007/api/get-razorpay-key")
//       .then((res) => res.json())
//       .then((data) => setRazorpayKey(data.key))
//       .catch((error) => console.error("Error fetching Razorpay key:", error));
//   }, []);
//           if (success){
//             setOrderBooked(true);          }
//           axios.post("http://localhost:5007/orderstatus" , {OrderBooked,selectedElectronics})
//           .then((response)=>{
//             console.log(response.data);
//           }).catch((error)=>{
//              console.log(error);
//           })

     

//   const handlePayment = async () => {
//     if (!razorpayKey) {
//       alert("Razorpay key not loaded!");
//       return;
//     }

//     if (!selectedElectronics) {
//       alert("No product selected!");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5007/api/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: selectedElectronics.LaptopPrice }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         alert("Error creating order: " + errorData.error);
//         setLoading(false);
//         return;
//       }

//       const orderData = await response.json();
//       if (!orderData.id) {
//         alert("Order ID not received from backend!");
//         setLoading(false);
//         return;
//       }

//       loadRazorpay(orderData.id);
//     } catch (error) {
//       console.error("Payment error:", error);
//       alert("Error processing payment");
//       setLoading(false);
//     }
//   };

//   const loadRazorpay = (orderId) => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     script.onload = () => openRazorpay(orderId);
//     document.body.appendChild(script);
//   };

//   const openRazorpay = (orderId ) => {
//     const options = {
//       key: razorpayKey,
//       amount: selectedElectronics.LaptopPrice * 100,
//       currency: "INR",
//       Productname:selectedElectronics.series,
//       name: "Electronics Website",
//       description: "Purchase Electronics",
//       order_id: orderId,
//       handler: function (response) {
//         alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
//         setSuccess(true);
//         setLoading(false);
//       },
//       prefill: {
//         name: Email,
//         email: Email,
//       },
//       theme: { color: "#800080" },
//     };

//     const rzp1 = new window.Razorpay(options);
//     rzp1.open();
//   };

//   return (
//     <div className="payment-container">
//       <div className="payment-box">
//         <h2>Payment Page</h2>
//         <button className="pay-button" onClick={handlePayment} disabled={loading}>
//           {loading ? "Processing..." : "Pay Now"}
//         </button>
//         {loading && <p className="loading-text">Processing payment, please wait...</p>}
//         {success && <p className="success-message">Payment Successful!</p>}
//       </div>
//     </div>
//   );
// };
// export default PaymentComponent;




// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { MyContext } from "./UseContext";
// import "./App.css";
// import BeforePayment from "./BeforePayment";

// const PaymentComponent = () => {
//   const [razorpayKey, setRazorpayKey] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const { selectedElectronics, setSelectedElectronics, Email } = useContext(MyContext);
//   const [orderBooked, setOrderBooked] = useState(false);

//   useEffect(() => {
//     fetch("http://localhost:5007/api/get-razorpay-key")
//       .then((res) => res.json())
//       .then((data) => setRazorpayKey(data.key))
//       .catch((error) => console.error("Error fetching Razorpay key:", error));
//   }, []);

//   const handlePayment = async () => {
//     if (!razorpayKey) {
//       alert("Razorpay key not loaded!");
//       return;
//     }
//     if (!selectedElectronics) {
//       alert("No product selected!");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5007/api/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: selectedElectronics.price }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         alert("Error creating order: " + errorData.error);
//         setLoading(false);
//         return;
//       }

//       const orderData = await response.json();
//       if (!orderData.id) {
//         alert("Order ID not received from backend!");
//         setLoading(false);
//         return;
//       }

//       loadRazorpay(orderData.id);
//     } catch (error) {
//       console.error("Payment error:", error);
//       alert("Error processing payment");
//       setLoading(false);
//     }
//   };

//   const loadRazorpay = (orderId) => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     script.onload = () => openRazorpay(orderId);
//     document.body.appendChild(script);
//   };

//   const openRazorpay = (orderId) => {
//     const options = {
//       key: razorpayKey,
//       amount: selectedElectronics.price * 100,
//       currency: "INR",
//       name: "Electronics Website",
//       description: "Purchase Electronics",
//       order_id: orderId,
//       handler: function (response) {
//         alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
//         setSuccess(true);
//         setOrderBooked(true);

//         // Store the order in MongoDB
//         saveOrder(response.razorpay_payment_id);
//       },
//       prefill: { name: Email, email: Email },
//       theme: { color: "#800080" },
//     };

//     const rzp1 = new window.Razorpay(options);
//     rzp1.open();
//   };

//   const saveOrder = (paymentId) => {
//     axios.post("http://localhost:5007/orderstatus", {
//       orderBooked,
//       selectedElectronics,
//       paymentId,
//       email: Email,
//     })
//       .then((response) => {
//         console.log("Order saved:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error saving order:", error);
//       });
//   };

//   return (
//     <div className="payment-container">
//       <div className="payment-box">
//         <BeforePayment/>
//         <h2>Payment Page</h2>
//         <button className="pay-button" onClick={handlePayment} disabled={loading}>
//           {loading ? "Processing..." : "Pay Now"}
//         </button>
//         {loading && <p className="loading-text">Processing payment, please wait...</p>}
//         {success && <p className="success-message">Payment Successful!</p>}
//       </div>
//     </div>
//   );
// };

// export default PaymentComponent;

// import React, { useState, useEffect, useContext, useRef } from "react";
// import axios from "axios";
// import { MyContext } from "./UseContext";
// import { FaPlus, FaMinus, FaCheck, FaTimes, FaSearch, FaMoneyBillWave } from "react-icons/fa";
// import "./App.css";

// const PaymentComponent = () => {
//   const [razorpayKey, setRazorpayKey] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const { selectedElectronics, Email } = useContext(MyContext);
//   const [quantity, setQuantity] = useState(1);
//   const [isLocationVerified, setIsLocationVerified] = useState(false);
//   const [locationMessage, setLocationMessage] = useState("");
//   const DeleiverAddress = useRef();

//   useEffect(() => {
//     // fetch("http://localhost:5007/api/get-razorpay-key")
//     fetch("https://backendwith-frontend.vercel.app/api/get-razorpay-key")
//       .then((res) => res.json())
//       .then((data) => setRazorpayKey(data.key))
//       .catch((error) => console.error("Error fetching Razorpay key:", error));
//   }, []);

//   const handleQuantityChange = (change) => {
//     setQuantity((prev) => Math.max(1, prev + change));
//   };

//   const checkDeliveryAvailability = () => {
//     const address = DeleiverAddress.current.value;
//     if (!address) {
//       alert("Please enter an address.");
//       return;
//     }

//     // axios.post("http://localhost:5007/api/check-delivery", { address })
//     axios.post("https://backendwith-frontend.vercel.app/api/check-delivery", { address })
//       .then((response) => {
//         if (response.data.available) {
//           setLocationMessage("✅ Delivery is available at this location.");
//           setIsLocationVerified(true);
//         } else {
//           setLocationMessage("❌ Delivery is not available at this location.");
//           setIsLocationVerified(false);
//         }
//       })
//       .catch((error) => {
//         console.error("Error checking delivery availability:", error);
//         setLocationMessage("⚠️ Error checking delivery availability.");
//       });
//   };

//   const handlePayment = async () => {
//     if (!razorpayKey || !selectedElectronics || !isLocationVerified) {
//       alert("Please ensure payment requirements are met.");
//       return;
//     }

//     setLoading(true);
//     try {
//       // const response = await fetch("http://localhost:5007/api/create-order", {
//       const response = await fetch("https://backendwith-frontend.vercel.app/api/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: selectedElectronics.price * quantity })
//       });

//       if (!response.ok) {
//         alert("Error creating order");
//         setLoading(false);
//         return;
//       }

//       const orderData = await response.json();
//       loadRazorpay(orderData.id);
//     } catch (error) {
//       alert("Payment processing error");
//       setLoading(false);
//     }
//   };

//   const loadRazorpay = (orderId) => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.onload = () => openRazorpay(orderId);
//     document.body.appendChild(script);
//   };

//   const openRazorpay = (orderId) => {
//     const options = {
//       key: razorpayKey,
//       amount: selectedElectronics.price * quantity * 100,
//       currency: "INR",
//       name: "Electronics Website",
//       description: "Purchase Electronics",
//       order_id: orderId,
//       handler: function (response) {
//         setSuccess(true);
//         setLoading(false);
        
//       },
//       prefill: { name: Email, email: Email },
//       theme: { color: "#28a745" },
//       modal: {
//         ondismiss: function () {
//           console.log("Payment modal closed by user");
//           setLoading(false); // Reset loading state if user cancels
//         },
//       },
//     };
//     const rzp1 = new window.Razorpay(options);
//     rzp1.open();
//   };

//   return (
//     <div className="payment-container">
//       <div className="payment-box">
//         <h2 className="checkout-title">🛒 Checkout</h2>

//         <div className="quantity-control">
//           <button className="qty-btn" onClick={() => handleQuantityChange(-1)}><FaMinus /></button>
//           <span className="qty-display">{quantity}</span>
//           <button className="qty-btn" onClick={() => handleQuantityChange(1)}><FaPlus /></button>
//         </div>

//         <input className="address-input" type="text" placeholder="🏠 Enter delivery address" ref={DeleiverAddress} />
//         <button className="search-btn" onClick={checkDeliveryAvailability}><FaSearch /> Check Availability</button>
//         <p className={isLocationVerified ? "valid" : "invalid"}>{locationMessage}</p>

//         <button className="pay-button" onClick={handlePayment} disabled={loading || !isLocationVerified}>
//           {loading ? "Processing..." : <><FaMoneyBillWave /> Pay Now</>}
//         </button>

//         {success && <p className="success-message"><FaCheck /> Payment Successful!</p>}
//       </div>
//     </div>
//   );
// };

// export default PaymentComponent;
import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { MyContext } from "./UseContext";
import {
  FaPlus,
  FaMinus,
  FaCheck,
  FaTimes,
  FaSearch,
  FaMoneyBillWave,
} from "react-icons/fa";
import "./App.css";

const PaymentComponent = () => {
  const [razorpayKey, setRazorpayKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { selectedElectronics, Email } = useContext(MyContext);
  const [quantity, setQuantity] = useState(1);
  const [isLocationVerified, setIsLocationVerified] = useState(false);
  const [locationMessage, setLocationMessage] = useState("");
  const DeleiverAddress = useRef();

  // ✅ Load Razorpay Key
  useEffect(() => {
    fetch("https://backendwith-frontend.vercel.app/api/get-razorpay-key")
      .then((res) => res.json())
      .then((data) => setRazorpayKey(data.key))
      .catch((error) => console.error("Error fetching Razorpay key:", error));
  }, []);

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  // ✅ Check if delivery available at address
  const checkDeliveryAvailability = () => {
    const address = DeleiverAddress.current.value;
    if (!address) {
      alert("Please enter an address.");
      return;
    }

    axios
      .post("https://backendwith-frontend.vercel.app/api/check-delivery", { address })
      .then((response) => {
        if (response.data.available) {
          setLocationMessage("✅ Delivery is available at this location.");
          setIsLocationVerified(true);
        } else {
          setLocationMessage("❌ Delivery is not available at this location.");
          setIsLocationVerified(false);
        }
      })
      .catch((error) => {
        console.error("Error checking delivery availability:", error);
        setLocationMessage("⚠️ Error checking delivery availability.");
      });
  };

  // ✅ Start Payment Flow
  const handlePayment = async () => {
    if (!razorpayKey || !selectedElectronics || !isLocationVerified) {
      alert("Please ensure payment requirements are met.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://backendwith-frontend.vercel.app/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: selectedElectronics.price * quantity }),
      });

      if (!response.ok) {
        alert("Error creating order");
        setLoading(false);
        return;
      }

      const orderData = await response.json();
      loadRazorpay(orderData.id);
    } catch (error) {
      alert("Payment processing error");
      setLoading(false);
    }
  };

  // ✅ Load Razorpay Script
  const loadRazorpay = (orderId) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => openRazorpay(orderId);
    document.body.appendChild(script);
  };

  // ✅ Razorpay Checkout Configuration
  const openRazorpay = (orderId) => {
    const options = {
      key: razorpayKey,
      amount: selectedElectronics.price * quantity * 100,
      currency: "INR",
      name: "Electronics Website",
      description: "Purchase Electronics",
      order_id: orderId,
      handler: async function (response) {
        setSuccess(true);
        setLoading(false);
        const paymentId = response.razorpay_payment_id;
        const address = DeleiverAddress.current.value;

        try {
          await axios.post("https://backendwith-frontend.vercel.app/api/save-order", {
            productId: selectedElectronics._id,
            productName: selectedElectronics.series,
            price: selectedElectronics.price * quantity,
            email: Email,
            paymentId,
            useraddress: address,
            success:success,
          });

          alert(response.data.message);
        } catch (error) {
          console.error("Error saving order:", error);
          alert("⚠️ Payment successful, but failed to save order.");
        }
      },
      prefill: { name: Email, email: Email },
      theme: { color: "#28a745" },
      modal: {
        ondismiss: function () {
          console.log("Payment modal closed by user");
          setLoading(false);
        },
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="payment-container">
      <div className="payment-box">
        <h2 className="checkout-title">🛒 Checkout</h2>

        <div className="quantity-control">
          <button className="qty-btn" onClick={() => handleQuantityChange(-1)}>
            <FaMinus />
          </button>
          <span className="qty-display">{quantity}</span>
          <button className="qty-btn" onClick={() => handleQuantityChange(1)}>
            <FaPlus />
          </button>
        </div>

        <input
          className="address-input"
          type="text"
          placeholder="🏠 Enter delivery address"
          ref={DeleiverAddress}
        />
        <button className="search-btn" onClick={checkDeliveryAvailability}>
          <FaSearch /> Check Availability
        </button>
        <p className={isLocationVerified ? "valid" : "invalid"}>
          {locationMessage}
        </p>

        <button
          className="pay-button"
          onClick={handlePayment}
          disabled={loading || !isLocationVerified}
        >
          {loading ? "Processing..." : <><FaMoneyBillWave /> Pay Now</>}
        </button>

        {success && (
          <p className="success-message">
            <FaCheck /> Payment Successful!
          </p>
        )}
      </div>
    </div>
  );
};

export default PaymentComponent;
