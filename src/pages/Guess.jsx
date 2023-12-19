import React, { useState } from "react";
import styles from "./Home.module.scss";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
function Guess() {
  const [imageLoaded, setImageLoaded] = useState(true);
  const navigator = useNavigate();
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const DUMMY_MyDollar = 50;
  const DUMMY_QUESIOTN =
    "나는 2024년을 시작하면서, OO이랑 함께 목표를 세우고 싶어";
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
    navigator("/guessResult");
  };

  return (
    <div className={styles.container}>
      {imageLoaded ? (
        <div className={styles.ImgandObjectContainer}>
          <div className={styles.snowDollarContainer}>
            {/* 나중에 대체되어야 함.*/}
            <h1>{"나를 뽑을 것 같은 사람은?"}</h1>
            <img src="/assets/snow-dollar.png" alt="snowDollar" />
            <span>{` : ${DUMMY_MyDollar}`}</span>
          </div>
          <div className={styles.questionContainer}>
            <h1>{DUMMY_QUESIOTN}</h1>
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

export default Guess;
