import React, { useState } from 'react';
import styles from './Home.module.scss';
import Button from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getQuestions } from '../api/question';

function QuestionList() {
  const { groupId } = useParams();
  const [imageLoaded, setImageLoaded] = useState(true);
  const navigator = useNavigate();
  const {
    data: questionsData,
    error,
    isLoading,
  } = useQuery(['questions'], getQuestions, {
    select: questionsData => questionsData.data.questionList,
  });

  const hanedleClickNameButton = questionId => {
    // console.log('당신이 누른 질문은', e.target.textContent, '입니다.');
    navigator('/questionResult/' + groupId + '?question=' + questionId);
  };

  return (
    <div className={styles.container}>
      {imageLoaded ? (
        <div className={styles.ImgandObjectContainer}>
          <h1>원하는 주제를 Pick! 하세요!</h1>
          <div className={styles.questionsContainer}>
            {questionsData?.map(question => (
              <Button
                key={question.questionId}
                text={question.question}
                onClick={() => hanedleClickNameButton(question.questionId)}
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
