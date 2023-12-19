import React from "react";
//모든 화면 상단에 들어가게 될 Headaer파일입니다.
const Header = ({ children, theme }) => {
  
  return (
    <div

    >
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 0px 15px 0px",
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
