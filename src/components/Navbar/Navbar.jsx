import { useState } from "react";
import "./Navbar.css";
import gsap from "gsap";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="website-content">
        <div className="header">
          <img
            src="/Assets/Images/Navbar/logo-main.png"
            alt="Logo Main"
          />
        </div>
      </div>

      <nav>
        <div className="logo">
          <img src="/Assets/Images/Navbar/logo.png" alt="Logo" />
        </div>
        <div className="logo-main">
          <img src="/Assets/Images/Navbar/logo-main.png" alt="Logo Main" />
        </div>
        <div className="toggle-btn">
          <button
            className={`burger ${isActive ? "active" : ""}`}
            onClick={handleToggle}
          >
            Toggle
          </button>
        </div>
      </nav>
      <div className="overlay">
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
      </div>

      <div className={`overlay-menu ${isActive ? "active" : ""}`}>
        <div className="menu-title">
          <p>[menu]</p>
        </div>

        {Array.from({ length: 8 }).map((_, index) => (
          <div className="menu-item" key={index}>
            <div className="menu-item-year">
              <p>2023</p>
            </div>
            <div className="menu-item-name">
              <p>Digital Art Collecting</p>
            </div>
            <div className="menu-item-link">
              <a href="#">[explore]</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
