import React from "react";
import styles from "./Setting.module.scss"; // SCSS 모듈을 임포트합니다.

function Setting() {
  const DUMMY_USER_NAME = "김동규";
  const DUMMY_SNOW_DOLLAR = 50;

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.userInfo}>
          <div className={styles.avatar}></div>
          <div className={styles.details}>
            <span className={styles.name}>{`이름: ${DUMMY_USER_NAME}`}</span>
            <span className={styles.name}>{`❄️: ${DUMMY_SNOW_DOLLAR}`}</span>
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
