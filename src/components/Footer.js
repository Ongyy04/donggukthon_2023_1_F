import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  const [activeButton, setActiveButton] = useState("home");

  const navigate = useNavigate();

  // 이미지 로드 상태를 업데이트하는 함수

  // 모든 이미지가 로드되었는지 확인하는 함수

  const handleMenuClick = () => {
    setActiveButton("menu");
    navigate("/groupList");
  };

  const handleHomeClick = () => {
    setActiveButton("home");
    navigate("/home");
  };

  const handleSettingsClick = () => {
    setActiveButton("settings");
    navigate("/setting");
  };

  return (
    <footer className="footer">
      (
      <>
        <button onClick={handleMenuClick} className="footer-btn">
          <img
            src={
              activeButton === "menu"
                ? "/assets/elements-red.png"
                : "/assets/elements-green.png"
            }
            alt="elements"
          />
        </button>
        <button onClick={handleHomeClick} className="footer-btn home">
          <img
            src={
              activeButton === "home"
                ? "/assets/home-red.png"
                : "/assets/home-green.png"
            }
            alt="home"
          />
        </button>
        <button onClick={handleSettingsClick} className="footer-btn">
          <img
            src={
              activeButton === "settings"
                ? "/assets/setting-red.png"
                : "/assets/setting-green.png"
            }
            alt="setting"
          />
        </button>
      </>
      )
    </footer>
  );
}

export default Footer;
