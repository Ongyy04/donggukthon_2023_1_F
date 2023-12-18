import React from "react";
import "./Button.scss"; // SCSS 스타일 파일

const Button = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
