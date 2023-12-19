import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { getQuestions } from '../api/question';
import { defaultInstance } from '../api/instance';
import { getGroups } from '../api/group';

function Home() {
  const [imageLoaded, setImageLoaded] = useState(true);
  const [memberID, setMemberID] = useState('');
  const [groupID, setGroupID] = useState('');
  const navigate = useNavigate();
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const hanldMakeRoomButton = () => {
    navigate('/groupMake');
  };
  const handleGroupListButton = () => {
    navigate('/groupList');
  };
  useEffect(() => {
    const storedMemberID = localStorage.getItem();
    const storedGroupID = localStorage.getItem();

    if (storedMemberID && storedGroupID) {
      setMemberID(storedMemberID);
      setGroupID(storedGroupID);

      // 여기에서 로그인이 성공했다고 가정하고 해당 그룹 페이지로 리디렉션할 수 있습니다.
      // 로그인 로직이 성공하면 그룹 페이지로 이동합니다.

      // localStorage에서 memberID와 groupID를 삭제합니다.
      localStorage.removeItem('memberID');
      localStorage.removeItem('GroupID');
    }
  }, []);

  return (
    <div className={styles.container}>
      {imageLoaded ? (
        <div className={styles.ImgandObjectContainer}>
          <div className={styles.imageContainer}>
            <img src="/assets/snow-character.png" alt="Decorative Snowflake" onLoad={handleImageLoad} />
          </div>
          <div className={styles.buttonsContainer}>
            <Button text={'그룹 만들기'} onClick={hanldMakeRoomButton} />
            <Button text={'내 그룹 들어가기'} onClick={handleGroupListButton} />
          </div>
        </div>
      ) : (
        // 이미지가 로드되는 동안 표시할 로딩 표시기 또는 플레이스홀더
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Home;
