import React from "react";
import styles from "./styles.module.css";
import Lander from "@/components/templates/lander";

const HomeScreen = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home_wrapper}>
        <Lander />
      </div>
    </div>
  );
};

export default HomeScreen;
