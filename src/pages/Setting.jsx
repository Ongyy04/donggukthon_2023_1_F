import React from 'react';
import styles from './Setting.module.scss'; // SCSS 모듈을 임포트합니다.
import { getSetting } from '../api/setting';
import { useRecoilValue } from 'recoil';
import { userState } from '../stores/user';
import { useQuery } from 'react-query';

function Setting() {
  const user = useRecoilValue(userState);
  const { data, isLoading, error } = useQuery(['setting', user.memberId], () => getSetting(user.memberId), {
    select: responseData => {
      // 'select' 옵션을 사용하여 필요한 데이터만 추출
      return {
        name: responseData.data.name,
        snowflakes: responseData.data.snowflakes,
      };
    },
  });
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.userInfo}>
          <div className={styles.avatar}></div>
          <div className={styles.details}>
            {!isLoading && data && (
              <>
                <span className={styles.name}>{`이름: ${data.name}`}</span>
                <span className={styles.name}>{`❄️: ${data.snowflakes}`}</span>
              </>
            )}
          </div>
        </div>
        <div className={styles.menu}>
          <h2>계정</h2>
          <div className={styles.menuItem}>비밀번호 변경</div>
          <div className={styles.menuItem}>이메일 변경</div>
          <div className={styles.menuItem}>프로필 이미지 변경</div>
        </div>
        <div className={styles.menu}>
          <h2>앱 설정</h2>
          <div className={styles.menuItem}>앱 버전 2.4.1</div>
          <div className={styles.menuItem}>알림 설정</div>
          <div className={styles.menuItem}>암호 잠금</div>
          <div className={styles.menuItem}>캐시 삭제</div>
          <div className={styles.menuItem}>테마 설정</div>
          <div className={styles.menuItem}>개인정보 처리방침</div>
          <div className={styles.menuItem}>서비스 이용약관</div>
          <div className={styles.menuItem}>문의하기</div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
