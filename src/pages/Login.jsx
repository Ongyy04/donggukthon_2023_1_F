import React, {useState}from "react";
import styles from "./Home.module.scss";

function Login() {
  const [imageLoaded, setImageLoaded] = useState(true);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleClickGoogleLogin =() => {
    console.log("구글 로그인 실행");
    {/*구글 로그인 관련 API 실행 */}
  }

  return (
  <div className={styles.container}>
      {imageLoaded ? (
        <div className={styles.ImgandObjectContainer}>
          <h1>FLIRTING에 오신 것을 환영합니다!</h1>
          <div className={styles.imageContainer}>
            <img
              src="/assets/snow-character.png"
              alt="Decorative Snowflake"
              onLoad={handleImageLoad}
            />
          </div>
          <div className={styles.Login} onClick={handleClickGoogleLogin}>
            <img src="/assets/GoogleLogin.png" alt="GoogleLogin"></img>
          </div>
        </div>
      ) : (
        // 이미지가 로드되는 동안 표시할 로딩 표시기 또는 플레이스홀더
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Login;
