import React from "react";
import styles from "./styles.module.css";
import Header from "@/components/organisms/header";
import Button from "@/components/molecules/button";
import { partnerData } from "./partnerData";

const Lander = () => {
  return (
    <div className={styles.lander_wrapper}>
      <Header />

      <div className={styles.lander_content}>
        <div className={styles.lander_left}>
          <h1>Navigating the digital landscape for success</h1>
          <p>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <Button text="Book a consultation" color="#fff" bgColor="#000" />
        </div>

        <div className={styles.lander_right}>
          <img src="/land_img.png" />
        </div>
      </div>

      <div className={styles.lander_partners}>
        {partnerData.map((data) => (
          <img key={data.id} src={data.item} />
        ))}
      </div>
    </div>
  );
};

export default Lander;
