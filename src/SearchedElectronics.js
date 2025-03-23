// SearchedBlog.js
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./UseContext";

function SearchedBlog() {
  const { FilteredProducts ,setSelectedElectronicProduct } = useContext(MyContext);
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    setSelectedElectronicProduct(product);
    navigate(`/SelectedElectronicsId/${product.series}`);
  };

  return (
    <div>
      <h2>Search Results:</h2>
      {FilteredProducts && FilteredProducts.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
          {FilteredProducts.map((product, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "8px",
                cursor: "pointer",
                textAlign: "center",
              }}
              onClick={() => handleProductClick(product)}
            >
              <img
                src={`http://localhost:5002/${product.laptopImage}`}
                alt={product.series}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <h4 style={{ margin: "10px 0" }}>{product.series}</h4>
              <p><strong>Price:</strong> ₹{product.price || "N/A"}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found!</p>
      )}
    </div>
  );
}

export default SearchedBlog;
