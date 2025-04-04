import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import debitCardImg from "./images/debitcard.png"; 

const DebitCardPayment = () => {
  const navigate = useNavigate();
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    name: "",
  });
  const [errors, setErrors] = useState({});
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!/^\d{16}$/.test(cardDetails.cardNumber)) {
      newErrors.cardNumber = "Invalid card number";
    }
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardDetails.expiry)) {
      newErrors.expiry = "Invalid expiry format (MM/YY)";
    }
    if (!/^\d{3,4}$/.test(cardDetails.cvv)) {
      newErrors.cvv = "Invalid CVV";
    }
    if (cardDetails.name.trim() === "") {
      newErrors.name = "Cardholder name required";
    }
    if (!isChecked) {
      newErrors.terms = "You must accept the terms";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setTimeout(() => {
      alert("Payment Successful! ✅");
      navigate("/order-success");
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-400 to-blue-200">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-5">
        <h2 className="text-lg font-semibold text-center text-gray-800 mb-3">
          Payment Options
        </h2>
        <p className="text-sm text-center text-gray-600 mb-4">
          Plan - Diamond INR 1500/month
        </p>
        <div className="border border-gray-300 p-3 rounded-md bg-gray-50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold">Credit & Debit Cards</span>
            <div className="flex space-x-1">
              <img src="/debitcard.png" alt="Visa" className="w-6" />
              <img src="/mastercard.png" alt="MasterCard" className="w-6" />
              <img src="/maestro.png" alt="Maestro" className="w-6" />
            </div>
          </div>

          <form
  onSubmit={handleSubmit}
  className="space-y-3"
  style={{
    width: "250px",
    marginLeft: "650px", // ✅ Corrected
  }}
>
         <input
              type="text"
              name="name"
              placeholder="Cardholder Name"
              value={cardDetails.name}
              onChange={handleChange}
              
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
            />
            {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}

            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              maxLength="16"
              value={cardDetails.cardNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
            />
            {errors.cardNumber && <p className="text-xs text-red-500">{errors.cardNumber}</p>}

            <div className="flex gap-2">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                maxLength="5"
                value={cardDetails.expiry}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-1/2 text-sm"
              />
              <input
                type="password"
                name="cvv"
                placeholder="CVV"
                maxLength="4"
                value={cardDetails.cvv}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-1/2 text-sm"
              />
            </div>
            {errors.expiry && <p className="text-xs text-red-500">{errors.expiry}</p>}
            {errors.cvv && <p className="text-xs text-red-500">{errors.cvv}</p>}

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="w-4 h-4"
              />
              <span className="text-xs text-gray-600">
                I have read and accept the terms of use and privacy policy
              </span>
            </div>
            {errors.terms && <p className="text-xs text-red-500">{errors.terms}</p>}

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded-md text-sm font-semibold"
            >
              Pay Now »
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DebitCardPayment;
