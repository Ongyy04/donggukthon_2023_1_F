import React, { useState } from 'react';
import styles from './Home.module.scss';
import Button from '../components/Button';
import { themeState } from '../stores/theme';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentQuestionState, selectedMemberState } from '../stores/current';
import { useQuery } from 'react-query';
import { getUser } from '../api/auth';
import { userState } from '../stores/user';

function GuessRightResult() {
  const { groupId } = useParams();
  const [imageLoaded, setImageLoaded] = useState(true);
  const navigator = useNavigate();
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const [theme, setTheme] = useRecoilState(themeState);
  const [user, setUser] = useRecoilState(userState);
  const selectedMember = useRecoilValue(selectedMemberState);
  const currentQuestion = useRecoilValue(currentQuestionState);
  const { data: userData } = useQuery(['user'], getUser, {
    select: userData => userData.data,
    onSuccess: userData => {
      setUser({
        memberId: userData.memberId,
        memberName: userData.memberResponse.name,
        snowflakes: userData.snowflake,
      });
      console.log('유저 정보 가져오기 성공', userData);
    },
  });

  const handleClickQuesionList = () => {
    navigator('/questionList/' + groupId);
  };

  return (
    <div className={styles.container}>
      {imageLoaded ? (
        <div className={styles.ImgandObjectContainer}>
          <div className={styles.snowDollarContainer}>
            {/* 나중에 대체되어야 함.*/}
            <img src="/assets/snow-dollar.png" alt="snowDollar" onLoad={handleImageLoad} />
            <span>{` : ${userData?.snowflake}`}</span>
          </div>
          <div className={styles.questionContainer}>
            <h1>{currentQuestion}</h1>
          </div>
          <div className={styles.resultImgContainer}>
            <img src="/assets/tree-red.png" alt="red-tree" onLoad={handleImageLoad} />
            <p> {`${selectedMember}님은 당신을\n 해당 질문에 투표했습니다!`}</p>
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
