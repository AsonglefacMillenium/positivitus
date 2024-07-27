import React from "react";
import styles from "./styles.module.css";
import Lander from "@/components/templates/lander";
import Services from "@/components/templates/service";
import ProposeSection from "@/components/templates/propose";
import StudiesSection from "@/components/templates/studies";

const HomeScreen = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home_wrapper}>
        <Lander />
        <Services />
        <ProposeSection />
        <StudiesSection />
      </div>
    </div>
  );
};

export default HomeScreen;
