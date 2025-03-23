import React from "react";
import { useSearchParams } from "react-router-dom";

const PaymentStatus = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");

  return (
    <div>
      {orderId ? (
        <h1>Payment Successful! Your Order ID is {orderId}.</h1>
      ) : (
        <h1>Payment Failed. Please try again.</h1>
      )}
    </div>
  );
};

export default PaymentStatus;
