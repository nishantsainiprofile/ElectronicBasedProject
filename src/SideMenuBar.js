import { useState } from "react";
import { FaBars, FaTimes, FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import "./App.css";

function SideMenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <div>
      {/* Toggle Button (hamburger) */}
      <div className="menu-toggle" onClick={toggleSidebar}>
        <FaBars size={24} />
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Cross button inside sidebar */}
        <div className="close-btn" onClick={closeSidebar}>
          <FaTimes size={20} />
        </div>
        <h2 className="logo">MyApp</h2>
        <ul>
          <li onClick={closeSidebar}><FaHome /> <span>Home</span></li>
          <li onClick={closeSidebar}><FaUser /> <span>Profile</span></li>
          <li onClick={closeSidebar}><FaCog /> <span>Settings</span></li>
          <li onClick={closeSidebar}><FaSignOutAlt /> <span>Logout</span></li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={closeSidebar}></div>}
    </div>
  );
}

export default SideMenuBar;
