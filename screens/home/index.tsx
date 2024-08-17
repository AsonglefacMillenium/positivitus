import React from "react";
import styles from "./styles.module.css";
import Lander from "@/components/templates/lander";
import Services from "@/components/templates/service";
import ProposeSection from "@/components/templates/propose";
import StudiesSection from "@/components/templates/studies";
import ProcessSection from "@/components/templates/process";
import TeamSection from "@/components/templates/team";
import ContactSection from "@/components/templates/contact";
import FooterSection from "@/components/templates/footer";

const HomeScreen = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home_wrapper}>
        <Lander />
        <Services />
        <ProposeSection />
        <StudiesSection />
        <ProcessSection />
        <TeamSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default HomeScreen;
