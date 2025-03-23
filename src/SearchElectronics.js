// import { useState } from "react";
// import "./App.css";
// import { FaSearch } from "react-icons/fa";
// import axios from "axios";

// function ProductSearch() {
//   const [search, setSearch] = useState("");
  

//   const handleSearch = async () => {
//     console.log(search);
//     try {
//       const response = await axios.post("http://localhost:5002/api/search", { query: search });
//       console.log(response.data); // Handle the response data as you like
//     } catch (error) {
//       console.error("Error while searching:", error);
//     }
//   };

//   return (
//     <div className="product-search-container" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//       <input
//         type="text"
//         placeholder="Search for products..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="search-input"
//       />
//       <button onClick={handleSearch} className="search-btn">
//         <FaSearch />
//       </button>
//     </div>
//   );
// }
// export default ProductSearch;

// import  { useState, useContext } from "react";
// import { MyContext } from "./UseContext";
// import { FaSearch } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// function SearchBlogs() {
//   const navigate = useNavigate();

//   // Single useContext call
//   const { FindObject, setFilteredProducts, FilteredProducts } = useContext(MyContext) || { FindObject: [], setFilteredProducts: () => {}, FilteredProducts: [] };
  
//   const [searchQuery, setSearchQuery] = useState("");
//   console.log(FindObject)

//   const handleSearch = () => {
//     const filtered = FindObject.filter((object) =>
//       object?.series?.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//     console.log( "this is filtered",filtered);
//   };

//   console.log(searchQuery);
//   console.log(FindObject);
//   navigate("/SearchedElectronics");
//   console.log(FilteredProducts);

//   return (
//     <div className="product-search-container" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//       <input
//         type="text"
//         placeholder="Search for products..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="search-input"
//       />
//       <button onClick={handleSearch} className="search-btn">
//         <FaSearch />
//       </button>
//     </div>
//   );
// }

// export default SearchBlogs;

import { useState, useContext } from "react";
import { MyContext } from "./UseContext";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchBlogs() {
  const navigate = useNavigate();
  const { FindObject, setFilteredProducts } = useContext(MyContext);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const filtered = FindObject.filter((object) =>
      object?.series?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
    navigate("/SearchedElectronics"); // <-- moved inside
  };

  return (
    <div className="product-search-container" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-btn">
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBlogs;
