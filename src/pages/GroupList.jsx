import React, { useState } from 'react';
import styles from './Home.module.scss';
import Button from '../components/Button';
import { useQuery } from 'react-query';
import { getGroups } from '../api/group';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../stores/user';

const DUMMY_GROUPS = [
  { groupId: 1, groupName: '그룹1' },
  { groupId: 2, groupName: '그룹2' },
  { groupId: 3, groupName: '그룹3' },
  { groupId: 4, groupName: '그룹4' },
  { groupId: 5, groupName: '그룹5' },
];

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
              style={{ width: '200px', height: '195px' }}
            />
          </div>
          <div className={styles.buttonsContainer}>
            {DUMMY_GROUPS.map(group => (
              <Button text={group.groupName} onClick={() => handleClickGroupName(group.groupId)} />
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
