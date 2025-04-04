import React, { useState } from "react";

const TestRazorpayAuth = () => {
  const [responseMessage, setResponseMessage] = useState("");

  const testRazorpayAuth = async () => {
    try {
      const response = await fetch("http://localhost:5002/api/test-razorpay-auth");
      const data = await response.json();

      if (data.success) {
        setResponseMessage(`Test successful! Order ID: ${data.order.id}`);
      } else {
        setResponseMessage("Razorpay authentication failed.");
      }
    } catch (error) {
      console.error("Error testing Razorpay authentication:", error);
      setResponseMessage("Error connecting to backend.");
    }
  };

  return (
    <div>
      <h2>Test Razorpay Authentication</h2>
      <button onClick={testRazorpayAuth}>Test Razorpay</button>
      <p>{responseMessage}</p>
    </div>
  );
};

export default TestRazorpayAuth;
