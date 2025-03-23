// import { useState } from "react";
// import LaptopComponent from "./LaptopComponent";
// import ChargingMobileComponent from "./ChargingMobileComponent";
// import EarbudsComponent from "./EarbudsComponent";
// import SmartWatchComponent from "./SmartWatchComponent";

// const products = [
//   { name: "Laptop", component: LaptopComponent },
//   { name: "Charging Mobile", component: ChargingMobileComponent },
//   { name: "Earbuds", component: EarbudsComponent },
//   { name: "Smart Watch", component: SmartWatchComponent },
// ];

// function SearchProducts() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredProduct, setFilteredProduct] = useState(null);

//   function handleSearch(event) {
//     setSearchQuery(event.target.value);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     // Find the matching product
//     const foundProduct = products.find((product) =>
//       product.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     // Set the component to render
//     setFilteredProduct(foundProduct ? foundProduct.component : null);
//   }

//   return (
//     <div>
//       <h2>Search Electronics</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Search for electronics..."
//           value={searchQuery}
//           onChange={handleSearch}
//         />
//         <button type="submit">Search</button>
//       </form>

//       {/* Render the component dynamically if found */}
//       <div>
//         {filteredProduct ? (
//           <filteredProduct />
//         ) : searchQuery && <p>No matching product found.</p>}
//       </div>
//     </div>
//   );
// }

// export default SearchProducts;
