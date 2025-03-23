// // import { Link } from "react-router-dom";
// // import "./App.css";
// // import { useContext } from "react";
// // import { MyContext } from "./UseContext";
// // import SideMenuBar from "./SideMenuBar";
// // import SearchElectronics from "./SearchElectronics";

// // function LinkTo() {
// //   const { ImageIndex } = useContext(MyContext);
// //   return (<div>
// //     <div className="RouterPath">
// //       <SideMenuBar />
// //       <div className="nav-links">
// //         <Link to="/">Home</Link>
// //         <Link to="/UploadElectronics">SellElectronicsProducts</Link>
// //         <Link to="/Register">Register</Link>
// //         <Link to="/Login">Login</Link>
// //         <Link to="/Userlogout">Userlogout</Link>
// //         <Link to="/UploadLaptop">UploadLaptop</Link>
        
// //       </div>
// //       </div>
      
// //     </div>
// //   );
// // }


// // export default LinkTo;





// import { Link } from "react-router-dom";
// import "./App.css";
// import { useContext } from "react";
// import { MyContext } from "./UseContext";
// import SideMenuBar from "./SideMenuBar";
// import SearchElectronics from "./SearchElectronics";

// function LinkTo() {
//   const { ImageIndex } = useContext(MyContext);
//   return (
//     <div className="RouterPath">
//       <SideMenuBar />
//       <div className="header-container">
//         <div className="nav-links">
//           <Link to="/">Home</Link>
//           <Link to="/UploadElectronics"></Link>
//           <Link to="/Register">Register</Link>
//           <Link to="/Login">Login</Link>
//           <Link to="/Userlogout">Userlogout</Link>
//           <Link to="/UploadLaptop">UploadLaptop</Link>
//         </div>
//         {/* Search Component added here */}
//         <SearchElectronics />
//       </div>
//     </div>
//   );
// }

// export default LinkTo;

import { Link } from "react-router-dom";
import SideMenuBar from "./SideMenuBar";
import SearchElectronics from "./SearchElectronics";
import { useContext } from "react";
import { MyContext } from "./UseContext";
import "./App.css";
function LinkTo() {
    const { ImageIndex } = useContext(MyContext);
    return (
      <div className="RouterPath">
        <SideMenuBar />
        <div className="header-container">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/UploadElectronics">SellElectronicsProducts</Link>
            <Link to="/Register">Register</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Userlogout">Userlogout</Link>
            <Link to="/UploadLaptop">UploadLaptop</Link>
          </div>
          {/* Search bar inline now */}
          <SearchElectronics />
        </div>
      </div>
    );
  }

export default LinkTo;
  