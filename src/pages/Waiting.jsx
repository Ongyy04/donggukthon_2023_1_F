import React, { useState } from "react";
import styles from "./Home.module.scss";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Waiting() {
  const [imageLoaded, setImageLoaded] = useState(true);
  const navigate = useNavigate();
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const hanedleClickButton = () => {
    navigate("/home");
  };
  const captions = "투표가 \n 완료되었습니다.";
  const miniCaptions =
    "모든 사람의 투표가 완료되면 \n 결과를 확인할 수 있습니다.";
  return (
    <div className={styles.container}>
      {imageLoaded ? (
        <div className={styles.ImgandObjectContainer}>
          <div className={styles.imageContainer}>
            <img
              src="/assets/party.png"
              alt="Decorative Snowflake"
              onLoad={handleImageLoad}
            />
          </div>
          <div className={styles.buttonsContainer}>
            <h1>{captions}</h1>
            <br></br>
            <p>{miniCaptions}</p>
            <Button text={"다음 질문 보기"} onClick={hanedleClickButton} />
          </div>
        </div>
      ) : (
        // 이미지가 로드되는 동안 표시할 로딩 표시기 또는 플레이스홀더
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Waiting;
