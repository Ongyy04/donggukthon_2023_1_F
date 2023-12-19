import React, { useState } from 'react';
import styles from './Home.module.scss';

function Login() {
  const [imageLoaded, setImageLoaded] = useState(true);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleClickGoogleLogin = () => {
    console.log('구글 로그인 실행');
    {
      /*구글 로그인 관련 API 실행 */
    }
  };

  return (
    <div className={styles.container}>
      {imageLoaded ? (
        <div className={styles.ImgandObjectContainer}>
          <h1 className={styles.loginWelcome}>FLIRTING에 오신 것을 환영합니다!</h1>
          <div className={styles.imageContainer}>
            <img src="/assets/snow-character.png" alt="Decorative Snowflake" onLoad={handleImageLoad} />
          </div>
          <div className={styles.googleLoginButton} onClick={handleClickGoogleLogin}>
            {/* 구글 로고 이미지를 여기에 넣을 것입니다 */}
            <img src="/assets/Google-logo.png" alt="Google login" className={styles.googleLogo} />
            <span className={styles.googleLoginText}>구글로 시작하기</span>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Login;
