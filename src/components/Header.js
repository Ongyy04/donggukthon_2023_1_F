import React from "react";

const Header = ({ children, theme }) => {
  return (
    <div
      style={{
        backgroundColor: "black",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 0",
        }}
      >
        {/* 로고 이미지나 텍스트를 여기에 삽입 */}
        {theme === "black" ? (
          <img
            src="/assets/HeaderLogo-white.png"
            alt="Logo"
            style={{ width: "200px", height: "50px" }}
          />
        ) : (
          <img
            src="/assets/HeaderLogo-white.png"
            alt="Logo"
            style={{ width: "200px", height: "50px" }}
          />
        )}
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Header;
