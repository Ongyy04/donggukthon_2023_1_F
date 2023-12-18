import React from "react";
import styles from "./GroupList.module.scss";
import Button from "../components/Button";
import { useQuery } from "react-query";
import { getGroups } from "../api/group";

const buttonsList = [
  { text: "동국대 해커톤" },
  { text: "동국대 해커톤" },
  { text: "동국대 해커톤" },
  { text: "동국대 해커톤" },
];

const GroupList = () => {
  const {
    data: groupsData,
    error,
    isLoading,
  } = useQuery(["groups"], () => getGroups(1), {
    select: (groupsData) => groupsData.data.groupList,
  }); // 임시로 1번 멤버의 그룹을 가져옴

  return (
    <div className={styles.container}>
      <img
        src="/assets/snow-character.png"
        alt="Decorative Snowflake"
        className={styles.image}
      />
      <div className={styles.buttonsContainer}>
        {groupsData?.map((button, index) => (
          <Button key={index} text={button.groupName} />
        ))}
      </div>
    </div>
  );
};

export default GroupList;
