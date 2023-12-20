import React, { useState } from 'react';
import styles from './Home.module.scss';
import Button from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../stores/user';
import { getQuestion } from '../api/question';
import { useMutation, useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { vote } from '../api/vote';

function Vote() {
  const user = useRecoilValue(userState);
  const { groupId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams(); // URL 파라미터를 가져오기 위한 Hook
  const questionIdFromParam = searchParams.get('question') || -1; // URL에서 질문 ID 가져오기
  const [imageLoaded, setImageLoaded] = useState(true);
  const navigator = useNavigate();

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const {
    data: questionData,
    error,
    isLoading,
  } = useQuery(
    ['question', user.memberId, groupId, questionIdFromParam],
    () => getQuestion(user.memberId, groupId, questionIdFromParam),
    {
      select: questionData => questionData.data,
      onError: () => {
        console.log('질문 가져오기 실패');
      },
    },
  );

  const { mutate: voteMember } = useMutation(args =>
    vote(args.questionId, args.voterId, args.selectedMemberId, args.groupId),
  );

  const handleClickNameButton = selectedMemberId => {
    // console.log('당신이 누른 사람은', e.target.textContent, '입니다.');
    // 다음 질문으로 넘어가기 위한 로직
    if (questionData?.questionIdList) {
      const currentQuestionIndex = questionData.questionIdList.indexOf(parseInt(questionIdFromParam));
      const nextQuestionId =
        currentQuestionIndex !== -1
          ? questionData.questionIdList[currentQuestionIndex + 1]
          : questionData.questionIdList[1];

      // 투표하기
      voteMember({
        questionId: questionIdFromParam === -1 ? 0 : questionIdFromParam,
        voterId: user.memberId,
        selectedMemberId: selectedMemberId,
        groupId: groupId,
      });

      if (nextQuestionId !== undefined) {
        setSearchParams({ question: nextQuestionId });
      } else {
        console.log('질문이 더 이상 없습니다.');
        navigator('/waiting/' + groupId);
      }
    }
  };

  return (
    <div className={styles.container}>
      {imageLoaded && !isLoading ? (
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
            <h1>{questionData?.question}</h1>
          </div>
          <div className={styles.guessPeoplesContainer}>
            {questionData?.optionList.map(option => (
              <Button
                key={option.memberId}
                text={option.memberName}
                onClick={() => handleClickNameButton(option.memberId)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Vote;
