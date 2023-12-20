import React, { useState } from 'react';
import styles from './Home.module.scss';
import Button from '../components/Button';
import { createGroup } from '../api/group';
import { useMutation, useQueryClient } from 'react-query';
import { useRecoilValue } from 'recoil';
import { userState } from '../stores/user';
import { useNavigate } from 'react-router-dom';

function GroupMake() {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);
  const [groupName, setGroupName] = useState(''); // 그룹명을 저장할 상태
  const [imageLoaded, setImageLoaded] = useState(true);

  const { mutate: makeGroup } = useMutation(args => createGroup(args.memberId, args.name), {
    onSuccess: (data, variables) => {
      // 'data'는 'createGroup' 함수의 실행 결과 받는 Response, 'variables'는 'makeGroup' 함수에 전달된 인자, 즉, Request
      const groupId = data.groupId;
      console.log('그룹 만들기 성공');
      navigate(`/shareGroup/${variables.memberId}`, { state: { memberId: variables.memberId, groupId: groupId } });
    },
    onError: () => {
      console.log('그룹 생성 실패');
    },
  });

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const handleMakeRoomButton = e => {
    if (groupName === '') {
      alert('그룹명을 입력해주세요.');
      return;
    }
    makeGroup({ memberId: user.memberId, name: groupName });
    console.log('방을 생성하겠습니다. 방 이름:', groupName);
  };
  const handleInputChange = e => {
    setGroupName(e.target.value); // 입력값 변경시 상태 업데이트
  };

  return (
    <div className={styles.container}>
      {imageLoaded ? (
        <div className={styles.ImgandObjectContainer}>
          <div className={styles.imageContainer}>
            <img src="/assets/snow-character.png" alt="Decorative Snowflake" onLoad={handleImageLoad} />
          </div>
          <div className={styles.inputContainer}>
            <input placeholder="그룹 명을 설정하세요." value={groupName} onChange={handleInputChange} />
            <Button text={'생성하기'} onClick={handleMakeRoomButton} />
          </div>
        </div>
      ) : (
        // 이미지가 로드되는 동안 표시할 로딩 표시기 또는 플레이스홀더
        <div>Loading...</div>
      )}
    </div>
  );
}

export default GroupMake;
