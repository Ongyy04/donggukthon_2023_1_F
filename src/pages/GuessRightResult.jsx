import React, { useState } from 'react';
import styles from './Home.module.scss';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { themeState } from '../stores/theme';
function GuessRightResult() {
  const [imageLoaded, setImageLoaded] = useState(true);
  const navigator = useNavigate();
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const DUMMY_MyDollar = 50;
  const DUMMY_QUESIOTN = 'Q. 나는 2024년을 시작하면서, OO이랑 함께 목표를 세우고 싶어';
  const DUMMY_YOURPICK = '고나연';
  const [theme, setTheme] = useRecoilState(themeState);
  const handleClickQuesionList = () => {
    navigator('/questionList');
  };
  return (
    <div className={styles.container}>
      {imageLoaded ? (
        <div className={styles.ImgandObjectContainer}>
          <div className={styles.snowDollarContainer}>
            {/* 나중에 대체되어야 함.*/}
            <img src="/assets/snow-dollar.png" alt="snowDollar" onLoad={handleImageLoad} />
            <span>{` : ${DUMMY_MyDollar}`}</span>
          </div>
          <div className={styles.questionContainer}>
            <h1>{DUMMY_QUESIOTN}</h1>
          </div>
          <div className={styles.resultImgContainer}>
            <img src="/assets/tree-red.png" alt="red-tree" onLoad={handleImageLoad} />
            <p> {`${DUMMY_YOURPICK}님은 당신을\n 해당 질문에 투표했습니다!`}</p>
          </div>
          <div className={styles.resultImgContainer}>
            <span>정답입니다!!</span>{' '}
            <span className={styles.redSpan} onClick={handleClickQuesionList}>
              다른 질문도 맞춰보기
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
