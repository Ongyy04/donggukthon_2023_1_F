import React, { useState } from "react";
import styles from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
function GuessRightResult() {
  const [imageLoaded, setImageLoaded] = useState(true);
  const navigator = useNavigate();
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const DUMMY_MyDollar = 50;
  const DUMMY_QUESIOTN =
    "나는 2024년을 시작하면서, OO이랑 함께 목표를 세우고 싶어";
  const DUMMY_YOURPICK = "고나연";

  const handleClickGroupMake = () => {
    navigator("/groupMake");
  };
  const handleClickRetry = () => {
    navigator("/questionList");
  };
  return (
    <div className={styles.container}>
      {imageLoaded ? (
        <div className={styles.ImgandObjectContainer}>
          <div className={styles.snowDollarContainer}>
            {/* 나중에 대체되어야 함.*/}

            <img src="/assets/snow-dollar.png" alt="snowDollar" />
            <span>{` : ${DUMMY_MyDollar}`}</span>
          </div>
          <div className={styles.questionContainer}>
            <h1>{DUMMY_QUESIOTN}</h1>
          </div>
          <div className={styles.resultImgContainer}>
            <img
              className={styles.imgSnowman}
              src="/assets/snowman-red.png"
              alt="red-snowman"
              onLoad={handleImageLoad}
            />
            <p>
              {`${DUMMY_YOURPICK}님은 당신을\n 해당 질문에 투표하지 않았습니다!`}
            </p>
          </div>
          <div className={styles.resultImgContainer}>
            <span className={styles.redSpan} onClick={handleClickRetry}>
              다시 골라보기
            </span>
            <br />
            <span>더 많은 눈꽃이 필요한가요?</span>{" "}
            <span className={styles.redSpan} onClick={handleClickGroupMake}>
              그룹 생성하고 눈꽃 받기
            </span>
          </div>
        </div>
      ) : (
        // 이미지가 로드되는 동안 표시할 로딩 표시기 또는 플레이스홀더
        <div>Loading...</div>
      )}
    </div>
  );
}

export default GuessRightResult;
