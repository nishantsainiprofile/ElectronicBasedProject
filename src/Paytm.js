import React from "react";
import axios from "axios";

const Paytm = () => {
  const PaytmPayment = async () => {
    console.log("this is paytmpayment")
    try {
      // Request payment details from the backend
      const response = await axios.post("http://localhost:5002/api/paytm/initiate", {
       
        amount: 50000, // Amount in paisa (₹500)
      }).then((response)=>{
           console.log(response.data);
      }).catch((error) => {
        console.error("Error occurred:", error.response?.data || error.message);
      });

      const { txnToken, orderId, mid } = response.data;

      // Redirect to Paytm Payment Page
      const paytmParams = {
        root: "",
        flow: "DEFAULT",
        data: {
          orderId: orderId,
          token: txnToken,
          tokenType: "TXN_TOKEN",
          amount: "500.00", // Amount in INR
        },
        merchant: {
          mid: mid,
        },
        handler: {
          notifyMerchant: (eventName, data) => {
            console.log("eventName => ", eventName);
            console.log("data => ", data);
          },
        },
      };

      window.Paytm.CheckoutJS.init(paytmParams).then(() => {
        window.Paytm.CheckoutJS.invoke();
      });
    } catch (error) {
      console.error("Error during payment initialization:", error);
    }
  };

  return (
    <div>
      <h1>Buy Laptop</h1>
      <button onClick={PaytmPayment}>Pay with Paytm</button>
    </div>
  );
};

export default Paytm;
