import React, { useState } from 'react';
import styles from './Home.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import { getQuestion } from '../api/question';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../stores/user';
import { getUser } from '../api/auth';
import { currentQuestionState, selectedMemberState } from '../stores/current';

function GuessRightResult() {
  const { groupId } = useParams();
  const [imageLoaded, setImageLoaded] = useState(true);
  const navigator = useNavigate();
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
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

  const handleClickGroupMake = () => {
    navigator('/groupMake');
  };
  const handleClickRetry = () => {
    navigator(-1);
  };

  return (
    <div className={styles.container}>
      {imageLoaded ? (
        <div className={styles.ImgandObjectContainer}>
          <div className={styles.snowDollarContainer}>
            {/* 나중에 대체되어야 함.*/}

            <img src="/assets/snow-dollar.png" alt="snowDollar" />
            <span>{` : ${userData?.snowflake}`}</span>
          </div>
          <div className={styles.questionContainer}>
            <h1>{currentQuestion}</h1>
          </div>
          <div className={styles.resultImgContainer}>
            <img
              className={styles.imgSnowman}
              src="/assets/snowman-red.png"
              alt="red-snowman"
              onLoad={handleImageLoad}
            />
            <p>{`${selectedMember}님은 당신을\n 해당 질문에 투표하지 않았습니다!`}</p>
          </div>
          <div className={styles.resultImgContainer}>
            <span className={styles.redSpan} onClick={handleClickRetry}>
              다시 골라보기
            </span>
            <br />
            <span>더 많은 눈꽃이 필요한가요?</span>{' '}
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
