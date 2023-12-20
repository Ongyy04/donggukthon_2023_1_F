import React, { useState } from 'react';
import styles from './Home.module.scss';
import Button from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../stores/user';
import { getVoteGuess, guess } from '../api/vote';
import { useMutation, useQuery } from 'react-query';
import { currentQuestionState, selectedMemberState } from '../stores/current';

function Guess() {
  const user = useRecoilValue(userState);
  const { groupId } = useParams();
  const searchParams = new URLSearchParams(window.location.search);
  const questionIdFromParam = searchParams.get('question'); // URL에서 질문 ID 가져오기
  const [imageLoaded, setImageLoaded] = useState(true);
  const [guessResult, setGuessResult] = useState(false); // 추측 결과
  const [selectedMember, setSelectedMember] = useRecoilState(selectedMemberState); // 추측한 사람
  const [currentQuestion, setCurrentQuestion] = useRecoilState(currentQuestionState); // 현재 질문
  const navigator = useNavigate();
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const { data: guessData } = useQuery(
    ['guess', user?.memberId, groupId, questionIdFromParam],
    () => getVoteGuess(user.memberId, groupId, questionIdFromParam),
    {
      select: guessData => guessData.data,
      onSuccess: guessData => {
        setCurrentQuestion(guessData.question); // 다음 화면에서도 현재 질문을 사용하기 위해
      },
      onError: () => {
        console.log('질문 가져오기 실패');
      },
    },
  );
  const { mutate: guessMember } = useMutation(
    args => guess(args.memberId, args.selectedMemberId, args.questionId, args.groupId),
    {
      onSuccess: data => {
        console.log('추측하기 성공', data);
        setGuessResult(data.data.isCorrect);
        setSelectedMember(data.data.selectedMember);

        // 상태 업데이트 대신 여기서 바로 navigator를 호출
        if (data.data.isCorrect) {
          navigator('/guessRightResult/' + groupId);
        } else {
          navigator('/guessWrongResult/' + groupId);
        }
      },
    },
  );

  const hanedleClickNameButton = selectedMemberId => {
    // 추측하기
    guessMember({
      memberId: user?.memberId,
      selectedMemberId: selectedMemberId,
      questionId: questionIdFromParam,
      groupId: groupId,
    });
  };

  return (
    guessData && (
      <div className={styles.container}>
        {imageLoaded ? (
          <div className={styles.ImgandObjectContainer}>
            <div className={styles.snowDollarContainer}>
              {/* 나중에 대체되어야 함.*/}
              <h1>{'나를 뽑을 것 같은 사람은?'}</h1>
              <img src="/assets/snow-dollar.png" alt="snowDollar" onLoad={handleImageLoad} />
              <span>{` : ${guessData.snowflakes}`}</span>
            </div>
            <div className={styles.questionContainer}>
              <h1>{`Q. ${guessData.question}`}</h1>
            </div>
            <div className={styles.guessPeoplesContainer}>
              {guessData.optionList.map(option => (
                <Button
                  key={option.memberId}
                  text={option.memberName}
                  onClick={() => hanedleClickNameButton(option.memberId)}
                />
              ))}
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

export default Guess;
