import React, { useState } from 'react';
import styles from './Home.module.scss';
import Button from '../components/Button';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useRecoilValue, useRecoilState } from 'recoil';
import { userState } from '../stores/user';
import { getResult } from '../api/vote';
import { themeState } from '../stores/theme';
function QuestionResult() {
  const { groupId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams(); // URL 파라미터를 가져오기 위한 Hook
  const questionIdFromParam = searchParams.get('question');
  const user = useRecoilValue(userState);
  const [imageLoaded, setImageLoaded] = useState(true);
  const [theme, setTheme] = useRecoilState(themeState);
  const navigator = useNavigate();
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const {
    data: resultData,
    error,
    isLoading,
  } = useQuery(
    ['result', user.memberId, groupId, questionIdFromParam],
    () => getResult(user.memberId, groupId, questionIdFromParam),
    {
      select: resultData => resultData.data,
    },
  );

  const hanedleClickNameButton = e => {
    console.log('당신이 누른 사람은', e.target.textContent, '입니다.');
    navigator('/waiting');
  };
  const handleStartQuestionPick = (groupId, questionId) => {
    navigator('/guess/' + groupId + '?question=' + questionId);
  };

  return (
    resultData && (
      <div className={styles.container}>
        {imageLoaded ? (
          <div className={theme === '' ? styles.ImgandObjectContainer : styles.lightImgandObjectContainer}>
            <div className={styles.imageContainer}>
              <img
                src="/assets/snow-character.png"
                alt="Decorative Snowflake"
                onLoad={handleImageLoad}
                style={{ width: '200px', height: '196px' }}
              />
            </div>
            <div className={styles.questionContainer}>
              <h1> Q. {resultData.question} </h1>
            </div>
            <div className={styles.resultContainer}>
              <h2>
                {`${resultData.mostVoted}님이 이 질문에 대해 \n가장 많은 표인 ${resultData.mostVotedCnt}표를 얻었고 \n 당신은 ${resultData.myVoteCnt}표를 얻었습니다.`}
              </h2>
              <Button
                text={'날 뽑은 사람 맞추러 가기'}
                onClick={() => handleStartQuestionPick(groupId, questionIdFromParam)}></Button>
            </div>
          </div>
        ) : (
          // 이미지가 로드되는 동안 표시할 로딩 표시기 또는 플레이스홀더
          <div>Loading...</div>
        )}
      </div>
    )
  );
}

export default QuestionResult;
