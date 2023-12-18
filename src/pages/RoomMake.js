import React, { useState } from "react";
import "./RoomMake.scss";
import Button from "../components/Button";

function RoomMake() {
  const [imageLoaded, setImageLoaded] = useState(true);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="container">
      {imageLoaded ? (
        <div className="ImgandButtonContainer">
          <div className="image-container">
            <img
              src="/assets/snow-character.png"
              alt="Decorative Snowflake"
              onLoad={handleImageLoad}
            />
          </div>
          <div className="buttons-container">
            <Button text={"그룹 만들기"} />
            <Button text={"내 그룹 들어가기"} />
          </div>
        </div>
      ) : (
        // 이미지가 로드되는 동안 표시할 로딩 표시기 또는 플레이스홀더
        <div>Loading...</div>
      )}
    </div>
  );
}

export default RoomMake;
