import React, { useState } from 'react';
import styles from './Home.module.scss';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
function QuestionResult() {
  const [imageLoaded, setImageLoaded] = useState(true);
  const navigator = useNavigate();
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const winnerName = '사용자 이름';
  const winnerVotes = 4;
  const yourVotes = 1;
  //나중에 fetching으로 대체되어야 함.

  const hanedleClickNameButton = e => {
    console.log('당신이 누른 사람은', e.target.textContent, '입니다.');
    navigator('/waiting');
  };
  const handleStartQuestionPick = () => {
    navigator('/guess');
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
              style={{ width: '200px', height: '196px' }}
            />
          </div>
          <div className={styles.questionContainer}>
            <h1> Q. 분위기 메이커의 역할을 하는 사람은? </h1>
          </div>
          <div className={styles.resultContainer}>
            <h2>
              {`${winnerName}님이 이 질문에 대해 \n가장 많은 표인 ${winnerVotes}표를 얻었고 \n 당신은 ${yourVotes}표를 얻었습니다.`}
            </h2>
            <Button text={'날 뽑은 사람 맞추러 가기'} onClick={handleStartQuestionPick}></Button>
          </div>
        </div>
      ) : (
        // 이미지가 로드되는 동안 표시할 로딩 표시기 또는 플레이스홀더
        <div>Loading...</div>
      )}
    </div>
  );
}

export default QuestionResult;
