import React, { useState } from 'react';
import styles from './Home.module.scss';
import Button from '../components/Button';
import { useQuery } from 'react-query';
import { getGroups } from '../api/group';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../stores/user';

const GroupList = () => {
  const navigator = useNavigate();
  const user = useRecoilValue(userState);
  const [imageLoaded, setImageLoaded] = useState(true);
  const {
    data: groupsData,
    error,
    isLoading,
  } = useQuery(['groups', user.memberId], () => getGroups(user.memberId), {
    select: groupsData => groupsData.data.groupList,
    onSuccess: data => {
      console.log('그룹 목록 가져오기 성공', data);
    },
  }); // 임시로 1번 멤버의 그룹을 가져옴

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const handleClickGroupName = groupId => {
    navigator('/groupHome/' + groupId);
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
              style={{ width: '150px', height: '150px' }}
            />
          </div>
          <div className={styles.buttonsContainer}>
            {groupsData?.map(group => (
              <Button key={group.groupId} text={group.groupName} onClick={() => handleClickGroupName(group.groupId)} />
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
