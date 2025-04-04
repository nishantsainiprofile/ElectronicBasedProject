// import {Link} from "react-router-dom"
// const Footer = () => {
//     return (
//       <footer className="footer-bg padding-vertical-3">
//         <div className="grid-container">
//           <div className="grid-x grid-padding-x align-center-middle">
  
//             {/* Column 1: Logo & Description */}
//             <div className="cell medium-4">
//               <h3 className="footer-title">TechStore</h3>
//               <p className="footer-text">
//                 Your one-stop destination for the latest electronics and gadgets.
//               </p>
//             </div>
  
//             {/* Column 2: Quick Links */}
//             <div className="cell medium-4">
//               <h4 className="footer-title">Quick Links</h4>
//               <ul className="menu vertical">
//                 <Link to ="/AboutUs" className="footer-link">AboutUs</Link>
//                 <li><a href="/products" className="footer-link">Products</a></li>
//                 <li><a href="/contact" className="footer-link">Contact</a></li>
//                 <li><a href="/faq" className="footer-link">FAQ</a></li>
//               </ul>
//             </div>
  
//             {/* Column 3: Social Media */}
//             <div className="cell medium-4">
//               <h4 className="footer-title">Follow Us</h4>
//               <ul className="menu align-center">
//                 <li><a href="#" className="footer-icon"><i className="fi-social-facebook"></i></a></li>
//                 <li><a href="#" className="footer-icon"><i className="fi-social-twitter"></i></a></li>
//                 <li><a href="#" className="footer-icon"><i className="fi-social-instagram"></i></a></li>
//                 <li><a href="#" className="footer-icon"><i className="fi-social-linkedin"></i></a></li>
//               </ul>
//             </div>
  
//           </div>
//         </div>
  
//         {/* Copyright */}
//         <div className="grid-x grid-padding-x align-center">
//           <div className="cell text-center">
//             <p className="footer-text">© {new Date().getFullYear()} TechStore. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     );
//   };
  
//   export default Footer;
  



import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Back to Top Section */}
      <div className="back-to-top-container">
        <a href="#" className="back-to-top">Back to Top</a>
      </div>

      {/* Main Footer Content */}
      <div className="grid-container">
        <div className="grid-x grid-margin-x footer-links">
          
          {/* Column 1 */}
          <div className="cell small-6 medium-3">
            <h4>Get to Know Us</h4>
            <ul>
              <Link to ="/AboutUs" className="footer-link">AboutUs</Link>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press Releases</a></li>
              <li><a href="#">Amazon Science</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="cell small-6 medium-3">
            <h4>Connect with Us</h4>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="cell small-6 medium-3">
            <h4>Make Money with Us</h4>
            <ul>
              <li><a href="#">Sell on Amazon</a></li>
              <li><a href="#">Sell under Amazon Accelerator</a></li>
              <li><a href="#">Protect and Build Your Brand</a></li>
              <li><a href="#">Amazon Global Selling</a></li>
              <li><a href="#">Supply to Amazon</a></li>
              <li><a href="#">Become an Affiliate</a></li>
              <li><a href="#">Fulfilment by Amazon</a></li>
              <li><a href="#">Advertise Your Products</a></li>
              <li><a href="#">Amazon Pay on Merchants</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="cell small-6 medium-3">
            <h4>Let Us Help You</h4>
            <ul>
              <li><a href="#">Your Account</a></li>
              <li><a href="#">Returns Centre</a></li>
              <li><a href="#">Recalls and Product Safety Alerts</a></li>
              <li><a href="#">100% Purchase Protection</a></li>
              <li><a href="#">Amazon App Download</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 ElectroMart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
