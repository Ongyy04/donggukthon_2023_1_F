// InvitationCard.js
import React from 'react';
import styles from './InvitationCard.module.scss'; // CSS 모듈 임포트
import Button from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';

const InvitationCard = () => {
  const { memberId, groupId } = useParams();
  {
    /*멤버 아이디랑, groupID를 보내면, 이름이랑, 그룹 이름을 받아옴 */
  }

  const navigator = useNavigate();
  const handleAgreeClick = () => {
    navigator('/login');
    {
      /* 정보 계쏙 전달해야함. */
      localStorage.setItem('memberID', memberId);
      localStorage.setItem('GroupID', groupId);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          {/* 이미지 경로는 프로젝트의 구조에 따라 다를 수 있습니다. */}
          <img src="/assets/Logo-white-invite.png" alt="Flirting" />
        </div>
        <div className={styles.textContainer}>
          <p>{`${memberId}님이 \n‘${groupId}’ 그룹에 \n초대하셨습니다!`}</p>
        </div>
        <div className={styles.buttonContainer}>
          <Button text={'수락하고 가입하기'} onClick={handleAgreeClick}></Button>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;
