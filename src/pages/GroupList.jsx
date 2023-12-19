import React, { useState } from 'react';
import styles from './Home.module.scss';
import Button from '../components/Button';
import { useQuery } from 'react-query';
import { getGroups } from '../api/group';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../stores/user';

const DUMMY_GROUPS = [
  '동국대 헤커톤1',
  '동국대 헤커톤2',
  '동국대 헤커톤3',
  '동국대 헤커톤4',
  '동국대 헤커톤5',
  '동국대 헤커톤6',
  '동국대 헤커톤7',
  '동국대 헤커톤8',
];

const GroupList = () => {
  const navigator = useNavigate();
  const user = useRecoilValue(userState);
  const [imageLoaded, setImageLoaded] = useState(true);
  const {
    data: groupsData,
    error,
    isLoading,
  } = useQuery(['groups'], () => getGroups(user.memberId), {
    select: groupsData => groupsData.data.groupList,
  }); // 임시로 1번 멤버의 그룹을 가져옴

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const handleClickGroupName = e => {
    navigator('/groupHome');
  };

  return (
    <div className={styles.container}>
      {imageLoaded ? (
        <div className={styles.ImgandObjectContainer}>
          <div className={styles.imageContainer}>
            <img
              src="/assets/snow-character.png"
              alt="Decorative Snowflake"
              onLoad={handleImageLoad}
              style={{ width: '200px', height: '195px' }}
            />
          </div>
          <div className={styles.buttonsContainer}>
            {DUMMY_GROUPS.map(group => (
              <Button text={group} onClick={handleClickGroupName} />
            ))}{' '}
          </div>
        </div>
      ) : (
        // 이미지가 로드되는 동안 표시할 로딩 표시기 또는 플레이스홀더
        <div>Loading...</div>
      )}
    </div>
  );
};

export default GroupList;
