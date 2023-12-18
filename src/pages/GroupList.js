import React from "react";
import styles from "./GroupList.module.scss";
import Button from "../components/Button";

const buttonsList = [
  { text: "동국대 해커톤" },
  { text: "동국대 해커톤" },
  { text: "동국대 해커톤" },
  { text: "동국대 해커톤" },
];

const GroupList = () => {
  return (
    <div className={styles.container}>
      <img
        src="/assets/snow-character.png"
        alt="Decorative Snowflake"
        className={styles.image}
      />
      <div className={styles.buttonsContainer}>
        {buttonsList.map((button, index) => (
          <Button key={index} text={button.text} />
        ))}
      </div>
    </div>
  );
};

export default GroupList;
