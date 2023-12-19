import React, { useState } from "react";
import styles from "./Home.module.scss";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const [imageLoaded, setImageLoaded] = useState(true);
  const navigate = useNavigate();
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const handleVoteButton = () => {
    navigate("/vote");
  };
  const handleShowResult = () => {
    navigate("/quesionList");
  };
  return (
    <div className={styles.container}>
      {imageLoaded ? (
        <div className={styles.ImgandObjectContainer}>
          <div className={styles.imageContainer}>
            <img
              src="/assets/snow-character.png"
              alt="Decorative Snowflake"
              onLoad={handleImageLoad}
            />
          </div>
          <div className={styles.buttonsContainer}>
            <Button text={"투표하기"} onClick={handleVoteButton} />
            <Button text={"결과보기"} onClick={handleShowResult} />
          </div>
        </div>
      ) : (
        // 이미지가 로드되는 동안 표시할 로딩 표시기 또는 플레이스홀더
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Home;
