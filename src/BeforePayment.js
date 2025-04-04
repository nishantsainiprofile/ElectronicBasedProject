import React, { useState, useContext, useRef } from "react";
import { FaPlus, FaMinus, FaSearch, FaMoneyBillWave, FaCheck } from "react-icons/fa";
import axios from "axios";
import { MyContext } from "./UseContext";
import "./App.css"; // Ensure styles are applied

const BeforePayment = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { selectedElectronics, Email } = useContext(MyContext);
  const [quantity, setQuantity] = useState(1);
  const [isLocationVerified, setIsLocationVerified] = useState(false);
  const [locationMessage, setLocationMessage] = useState("");
  const DeleiverAddress = useRef();

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const checkDeliveryAvailability = () => {
    const address = DeleiverAddress.current.value;
    if (!address) {
      alert("Please enter an address.");
      return;
    }

    // axios.post("http://localhost:5007/api/check-delivery", { address })
    axios.post("https://backendwith-frontend.vercel.app/api/check-delivery", { address })
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

  const handlePayment = () => {
    if (!isLocationVerified) {
      alert("Please verify the delivery location first.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="payment-container">
      <div className="payment-box">
        <h2 className="checkout-title">🛒 Checkout</h2>

        {/* Quantity Control */}
        <div className="quantity-control">
          <button className="qty-btn" onClick={() => handleQuantityChange(-1)}>
            <FaMinus />
          </button>
          <span className="qty-display">{quantity}</span>
          <button className="qty-btn" onClick={() => handleQuantityChange(1)}>
            <FaPlus />
          </button>
        </div>

        {/* Address Input */}
        <input
          className="address-input"
          type="text"
          placeholder="🏠 Enter delivery address"
          ref={DeleiverAddress}
        />
        <button className="search-btn" onClick={checkDeliveryAvailability}>
          <FaSearch /> Check Availability
        </button>
        <p className={isLocationVerified ? "valid" : "invalid"}>{locationMessage}</p>

        {/* Pay Now Button */}
        <button className="pay-button" onClick={handlePayment} disabled={loading || !isLocationVerified}>
          {loading ? "Processing..." : <><FaMoneyBillWave /> Pay Now</>}
        </button>

        {success && <p className="success-message"><FaCheck /> Payment Successful!</p>}
      </div>
    </div>
  );
};

export default BeforePayment;
