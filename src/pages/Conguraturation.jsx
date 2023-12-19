import React, { useState } from 'react';
import styles from './Home.module.scss';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

function Conguraturation() {
  const [imageLoaded, setImageLoaded] = useState(true);
  const navigate = useNavigate();
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const hanedleClickButton = () => {
    {
      /*링크 공유하고 눈꽃 받기 로직 추가*/
    }
  };
  const DUMMY_GROUPNAME = '동국톤 1팀';
  const captions = `${DUMMY_GROUPNAME} 그룹 개설이 \n 완료되었습니다!`;

  return (
    <div className={styles.container}>
      {imageLoaded ? (
        <div className={styles.ImgandObjectContainer}>
          <div className={styles.imageContainer}>
            <img
              src="/assets/party.png"
              alt="Decorative Snowflake"
              onLoad={handleImageLoad}
              style={{ width: '150px', height: '150px' }}
            />
          </div>
          <div className={styles.buttonsContainer}>
            <h1>{captions}</h1>
            <br></br>
            <Button text={'링크 공유하고 눈꽃 받기'} onClick={hanedleClickButton} />
          </div>
        </div>
      ) : (
        // 이미지가 로드되는 동안 표시할 로딩 표시기 또는 플레이스홀더
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Conguraturation;
