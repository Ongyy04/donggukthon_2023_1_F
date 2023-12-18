import React, { useState } from "react";
import styles from "./Home.module.scss";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
function QuestionList() {
  const [imageLoaded, setImageLoaded] = useState(true);
  const navigator = useNavigate();

  const DUMMY_QUESTIONS = [
    "질문 ------------------1",
    "질문 ------------------1",
    "질문 ------------------1",
    "질문 ------------------1",
    "질문 ------------------1",
    "질문 ------------------1",
    "질문 ------------------1",
    "질문 ------------------1",
    "질문 ------------------1",
    "질문 ------------------1",
    "질문 ------------------1",
    //fetching으로 데이터를 받아와야 함.
  ];
  const hanedleClickNameButton = (e) => {
    console.log("당신이 누른 질문은", e.target.textContent, "입니다.");
    navigator("/vote");
  };
  return (
    <div className={styles.container}>
      {imageLoaded ? (
        <div className={styles.ImgandObjectContainer}>
          <div className={styles.imageContainer}>
            <h1>원하는 주제를 Pick! 하세요!</h1>
          </div>
          <div className={styles.questionsContainer}>
            {DUMMY_QUESTIONS.map((quesion) => (
              <Button
                key={quesion}
                text={quesion}
                onClick={hanedleClickNameButton}
              />
            ))}
          </div>
        </div>
      ) : (
        // 이미지가 로드되는 동안 표시할 로딩 표시기 또는 플레이스홀더
        <div>Loading...</div>
      )}
    </div>
  );
}

export default QuestionList;
