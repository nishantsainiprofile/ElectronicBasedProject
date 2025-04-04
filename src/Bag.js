import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaShoppingBag } from "react-icons/fa";

const Bag = ({ email }) => {
  const [bagItems, setBagItems] = useState([]);

  // Fetch bag items on component mount
  useEffect(() => {
    if (email) {
      axios
        .get(`https://backendwith-frontend.vercel.app/api/orderlist/${email.toLowerCase()}`)
        .then((res) => {
          setBagItems(res.data.orderlist || []);
        })
        .catch((err) => console.error("Error fetching bag items:", err));
    }
  }, [email]);

  return (
    <div style={styles.container}>
      <Link to="/bag" style={styles.link}>
        <FaShoppingBag size={28} color="black" />
        {bagItems.length > 0 && <span style={styles.badge}>{bagItems.length}</span>}
      </Link>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    marginRight: "20px",
  },
  link: {
    position: "relative",
    textDecoration: "none",
    color: "black",
  },
  badge: {
    position: "absolute",
    top: "-5px",
    right: "-10px",
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    width: "18px",
    height: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontWeight: "bold",
  },
};

export default Bag;
