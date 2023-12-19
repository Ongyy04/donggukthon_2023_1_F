import React, { useState } from "react";
import styles from "./Home.module.scss";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
function Vote() {
  const [imageLoaded, setImageLoaded] = useState(true);
  const navigator = useNavigate();
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const DUMMY_PEOPLES = [
    "홍규진",
    "공소연",
    "김성준",
    "고나연",
    "오은서",
    "최연아",
    "예비1",
    "예비2",
    "예비3",
    //fetching으로 데이터를 받아와야 함.
  ];
  const hanedleClickNameButton = (e) => {
    console.log("당신이 누른 사람은", e.target.textContent, "입니다.");
    navigator("/waiting");
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
              style={{ width: "200px", height: "196px" }}
            />
          </div>
          <div className={styles.questionContainer}>
            <h1> Q. 분위기 메이커의 역할을 하는 사람은? </h1>
          </div>
          <div className={styles.guessPeoplesContainer}>
            {DUMMY_PEOPLES.map((name) => (
              <Button key={name} text={name} onClick={hanedleClickNameButton} />
            ))}{" "}
          </div>
        </div>
      ) : (
        // 이미지가 로드되는 동안 표시할 로딩 표시기 또는 플레이스홀더
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Vote;
