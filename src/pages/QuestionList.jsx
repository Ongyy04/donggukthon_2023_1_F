import React, { useState } from 'react';
import styles from './Home.module.scss';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getQuestions } from '../api/question';

const DUMMY_QUESTIONS = [
  { questionId: 1, question: '당신의 취미는 무엇인가요?' },
  { questionId: 2, question: '당신의 취미는 무엇인가요?' },
  { questionId: 3, question: '당신의 취미는 무엇인가요?' },
  { questionId: 4, question: '당신의 취미는 무엇인가요?' },
  { questionId: 5, question: '당신의 취미는 무엇인가요?' },
  { questionId: 6, question: '당신의 취미는 무엇인가요?' },
  { questionId: 7, question: '당신의 취미는 무엇인가요?' },
  { questionId: 8, question: '당신의 취미는 무엇인가요?' },
  { questionId: 9, question: '당신의 취미는 무엇인가요?' },
  //fetching으로 데이터를 받아와야 함.
];

function QuestionList() {
  const [imageLoaded, setImageLoaded] = useState(true);
  const navigator = useNavigate();
  const {
    data: questionsData,
    error,
    isLoading,
  } = useQuery(['questions'], () => getQuestions(), {
    select: questionsData => questionsData.data.questionList,
  });

  const hanedleClickNameButton = e => {
    console.log('당신이 누른 질문은', e.target.textContent, '입니다.');
    navigator('/questionResult');
  };
  return (
    <div className={styles.container}>
      {imageLoaded ? (
        <div className={styles.ImgandObjectContainer}>
          <h1>원하는 주제를 Pick! 하세요!</h1>
          <div className={styles.questionsContainer}>
            {DUMMY_QUESTIONS.map(question => (
              <Button key={question.quesionId} text={question.question} onClick={hanedleClickNameButton} />
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
