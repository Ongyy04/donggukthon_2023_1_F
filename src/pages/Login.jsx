import React, { useState, useEffect } from 'react';
import styles from './Home.module.scss';
import { loginState } from '../stores/user';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigator = useNavigate();
  const isLoggedin = useRecoilValue(loginState);
  const [imageLoaded, setImageLoaded] = useState(true);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleClickGoogleLogin = async () => {
    window.location.href = process.env.REACT_APP_SERVER_URL + '/auth/login';
  };

  useEffect(() => {
    if (isLoggedin) {
      console.log('이미 로그인 하셨습니다.');
      navigator('/home');
    }
  }, [isLoggedin, navigator]);

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
            <img src="/assets/Google-Logo.png" alt="Google login" className={styles.googleLogo} />
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
