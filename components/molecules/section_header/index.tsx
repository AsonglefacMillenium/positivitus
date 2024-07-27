import React from "react";
import styles from "./styles.module.css";

interface sectionHeadProp {
  title: string;
  text: string;
}
const SectionHeader = ({ ...props }: sectionHeadProp) => {
  return (
    <div className={styles.section_head_wrap}>
      <div className={styles.section_head}>
        <h3>{props.title}</h3>
      </div>

      <div className={styles.section_text}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default SectionHeader;
