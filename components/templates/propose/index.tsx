import React from "react";
import styles from "./styles.module.css";
import Button from "@/components/molecules/button";

const ProposeSection = () => {
  return (
    <div className={styles.propose_wrapper}>
      <div className={styles.propose_left}>
        <h3>Let’s make things happen</h3>
        <p>
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <Button text="Get your free proposal" color="#fff" bgColor="#000" />
      </div>

      <div className={styles.propose_right}>
        <img src="/propose.png" />
      </div>
    </div>
  );
};

export default ProposeSection;
