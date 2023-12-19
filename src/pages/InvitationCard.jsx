// InvitationCard.js
import React from 'react';
import styles from './InvitationCard.module.scss'; // CSS 모듈 임포트
import Button from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { getInvitation } from '../api/invitation';
import { useQuery } from 'react-query';

const InvitationCard = () => {
  const { inviterId, groupId } = useParams();
  {
    /*멤버 아이디랑, groupID를 보내면, 이름이랑, 그룹 이름을 받아와야함. */
  }
  const { data, isLoading, error } = useQuery(
    ['invitation', inviterId, groupId],
    () => getInvitation(inviterId, groupId),
    {
      select: responseData => {
        // 'select' 옵션을 사용하여 필요한 데이터만 추출
        return {
          inviterName: responseData.data.inviterName,
          groupName: responseData.data.groupName,
          memberCnt: responseData.data.memberCnt,
        };
      },
    },
  );

  const navigator = useNavigate();
  const handleAgreeClick = () => {
    localStorage.setItem('InviterID', inviterId);
    localStorage.setItem('GroupID', groupId);
    navigator('/login');
  };
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          {/* 이미지 경로는 프로젝트의 구조에 따라 다를 수 있습니다. */}
          <img src="/assets/Logo-white-invite.png" alt="Flirting" />
        </div>
        <div className={styles.textContainer}>
          <p>{`${data.inviterName}님이 \n ${data.memberCnt}명 있는 \n‘${data.groupName}’ 그룹에 \n초대하셨습니다!`}</p>
        </div>
        <div className={styles.buttonContainer}>
          <Button text={'수락하고 가입하기'} onClick={handleAgreeClick}></Button>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;
