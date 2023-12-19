// InvitationCard.js
import React from 'react';
import styles from './InvitationCard.module.scss'; // CSS 모듈 임포트
import Button from '../components/Button';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
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

  // 동적으로 메타 태그 정보를 업데이트하기 위한 state
  const [metaInfo, setMetaInfo] = useState({
    title: '플러팅 초대장',
    description: '투표로 못다 한 진심을 전해보세요!',
    image: 'https://flirting.vercel.app/assets/snow-character.png',
  });

  useEffect(() => {
    if (data) {
      setMetaInfo({
        title: data.inviterName + '의 초대가 도착했어요',
        description: '나에 대한 다른 사람들의 생각을 들어봐요!',
        image: 'https://flirting.vercel.app/assets/snow-character.png',
      });
    }
  }, [data]);

  const navigator = useNavigate();
  const handleAgreeClick = () => {
    localStorage.setItem('InviterID', inviterId);
    localStorage.setItem('GroupID', groupId);
    navigator('/login');
  };
  const handleGoIntoLogin = () => {
    navigator('/login');
  };
  if (error) {
    console.log('쿼리 에러', error);
  }
  return (
    <>
      <Helmet>
        <title>플러팅 초대장</title>
        <meta property="og:title" content={data && data.inviterName + '의 초대가 도착했어요'} />
        <meta
          property="og:description"
          content="투표로 못다 한 진심을 전해보세요! 나에 대한 다른 사람들의 생각을 들어봐요! 누가 나를 선택했는지 맞춰봐요!"
        />
        <meta property="og:image" content="https://flirting.vercel.app/assets/snow-character.png" />
      </Helmet>

      <div className={styles.container}>
        {data ? (
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
        ) : (
          <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
              {/* 이미지 경로는 프로젝트의 구조에 따라 다를 수 있습니다. */}
              <img src="/assets/Logo-white-invite.png" alt="Flirting" />
            </div>
            <div className={styles.textContainer}>
              <p>{`누군가가 \n 당신을 그룹에 \n 초대했습니다!`}</p>
            </div>
            <div className={styles.buttonContainer}>
              <Button text={'로그인 하기'} onClick={handleGoIntoLogin}></Button>{' '}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default InvitationCard;
