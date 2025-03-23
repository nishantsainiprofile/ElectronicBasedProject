// import { useState } from "react";
// import axios from "axios";

// function Register() {
//   const [user, setUser] = useState("");
//   const [password, setPassword] = useState("");
//   const [Registered, setRegistered] = useState("");

//   function SubmitRegister() {
//     axios
//       .post("http://localhost:5002/api/Register", { user, password })
//       .then((response) => {
//         console.log(response.data.Information);
//         setRegistered(response.data.Information);
//       })
//       .catch((error) => {
//         console.log(error.response?.data?.Information);
//         setRegistered(error.response?.data?.Information);
//       });
//   }

//   return (
//     <div className="grid-container">
//       <div className="grid-x grid-padding-x align-center-middle">
//         <div className="cell medium-6 large-4">
//           <h2 className="text-center">Register</h2>
//           <div className="callout">
//             <label>
//               Enter the User
//               <input
//                 type="text"
//                 placeholder="Enter the user"
//                 value={user}
//                 onChange={(e) => setUser(e.target.value)} // Update user state
//               />
//             </label>
//             <label>
//               Enter the Password
//               <input
//                 type="password" // Change to "password" type for security
//                 placeholder="Enter the Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)} // Update password state
//               />
//             </label>
//             <p className="text-center">{Registered}</p>
//             <button
//               className="button expanded"
//               onClick={SubmitRegister}
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;

// import { useState } from "react";
// import axios from "axios";

// function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("Customer"); // Default role
//   const [address, setAddress] = useState("");
//   const [registered, setRegistered] = useState("");

//   function SubmitRegister() {
//     axios
//       .post("http://localhost:5002/api/Register", {
//         name,
//         email,
//         password,
//         role,
        
//         address,
//       })
//       .then((response) => {
//         console.log(response.data.Information);
//         setRegistered(response.data.Information);
//       })
//       .catch((error) => {
//         console.log(error.response?.data?.Information);
//         setRegistered(error.response?.data?.Information);
//       });
//   }

//   return (
//     <div className="grid-container">
//       <div className="grid-x grid-padding-x align-center-middle">
//         <div className="cell medium-6 large-4">
//           <h2 className="text-center">Register</h2>
//           <div className="callout">
//             <label>
//               Enter Name
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </label>
//             <label>
//               Enter Email
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </label>
//             <label>
//               Enter Password
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </label>
//             <label>
//               Select Role
//               <select value={role} onChange={(e) => setRole(e.target.value)}>
//                 <option value="Customer">Customer</option>
//                 <option value="Seller">Seller</option>
//               </select>
//             </label>
          
//             <label>
//               Enter Address
//               <input
//                 type="text"
//                 placeholder="Enter your address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               />
//             </label>
//             <p className="text-center">{registered}</p>
//             <button
//               className="button expanded"
//               onClick={SubmitRegister}
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;



import { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Customer"); // Default role
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [registered, setRegistered] = useState("");

  function SubmitRegister() {
    axios
      .post("http://localhost:5002/api/Register", {
        name,
        email,
        password,
        role,
        address,
        country,
        city,
        houseNumber,
        pincode,
      })
      .then((response) => {
        console.log(response.data.Information);
        setRegistered(response.data.Information);
      })
      .catch((error) => {
        console.log(error.response?.data?.Information);
        setRegistered(error.response?.data?.Information);
      });
  }

  return (
    <div className="grid-container">
      <div className="grid-x grid-padding-x align-center-middle">
        <div className="cell medium-6 large-4">
          <h2 className="text-center">Register</h2>
          <div className="callout">
            <label>
              Enter Name
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Enter Email
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Enter Password
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label>
              Select Role
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="Customer">Customer</option>
                <option value="Seller">Seller</option>
              </select>
            </label>
            <label>
              Enter Address
              <input
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
            <label>
              Enter Country
              <input
                type="text"
                placeholder="Enter your country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </label>
            <label>
              Enter City
              <input
                type="text"
                placeholder="Enter your city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
            <label>
              Enter House Number
              <input
                type="text"
                placeholder="Enter your house number"
                value={houseNumber}
                onChange={(e) => setHouseNumber(e.target.value)}
              />
            </label>
            <label>
              Enter Pincode
              <input
                type="text"
                placeholder="Enter your pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </label>
            <p className="text-center">{registered}</p>
            <button
              className="button expanded"
              onClick={SubmitRegister}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
