import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MyContext } from "./UseContext";

const PaymentStatus = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const {Email} =useContext(MyContext);
  console.log(Email);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.post("https://backendwith-frontend.vercel.app/api/order-status", {
        // const response = await axios.post("http://localhost:5007/api/order-status", {
            email: Email,
          });
          console.log(response.data);
        setOrders(response.data);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch orders.");
      } finally {
        setLoading(false);
      }
    };

    if (Email) fetchOrders();
  }, [Email]);

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Payment Status</h2>
      {orders.length === 0 ? (
        <p>No orders found for <strong>{Email}</strong>.</p>
      ) : (
        <div className="grid gap-4">
          {orders.map((order, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-md bg-white">
              <p><strong>Product Name:</strong> {order.productName}</p>
              <p><strong>Product ID:</strong> {order.productId}</p>
              <p><strong>Price:</strong> ₹{order.price}</p>
              <p><strong>Payment ID:</strong> {order.paymentId}</p>
              <p><strong>Address:</strong> {order.useraddress}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span className={`font-bold ${order.status === "Paid" ? "text-green-600" : "text-red-600"}`}>
                  {order.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaymentStatus;
