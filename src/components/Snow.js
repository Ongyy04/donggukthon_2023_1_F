// Snow.js

import React from "react";
import "./Snow.scss";

const Snow = () => {
  return (
    <div className="my-container">
      {Array.from({ length: 1000 }, (_, index) => (
        <div
          key={index}
          className="flake"
          style={{
            marginLeft: Math.floor(Math.random() * window.innerWidth),
            animationDelay: Math.floor(Math.random() * 150),
          }}
        />
      ))}
    </div>
  );
};

export default Snow;
