import React, { useState } from "react";
import styles from "./Home.module.scss";
import Button from "../components/Button";

function GroupMake() {
  const [groupName, setGroupName] = useState(""); // 그룹명을 저장할 상태
  const [imageLoaded, setImageLoaded] = useState(true);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const handleMakeRoomButton = (e) => {
    console.log("방을 생성하겠습니다. 방 이름:", groupName);
  };
  const handleInputChange = (e) => {
    setGroupName(e.target.value); // 입력값 변경시 상태 업데이트
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
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              placeholder="그룹 명을 설정하세요."
              value={groupName}
              onChange={handleInputChange}
            />
            <Button text={"생성하기"} onClick={handleMakeRoomButton} />
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
