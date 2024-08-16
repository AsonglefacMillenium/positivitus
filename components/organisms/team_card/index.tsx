import React from "react";
import styles from "./styles.module.css";
import { TiSocialLinkedin, TiSocialLinkedinCircular } from "react-icons/ti";

const TeamCard = () => {
  return (
    <div className={styles.team_card_wrapper}>
      <div className={styles.card_top}>
        <div className={styles.card_img}>
          <img src="/team_image.png" />
        </div>

        <div className={styles.top_right}>
          <a href="">
            <TiSocialLinkedin className={styles.card_icon} />
          </a>

          <div className={styles.card_role}>
            <p className={styles.name}>Jane Smith</p>
            <p className={styles.title}>CEO AND FOUNDER</p>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.card_bottom}>
        <p>
          10+ years of experience in digital marketing. Expertise in SEO, PPC,
          and content strategy
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
