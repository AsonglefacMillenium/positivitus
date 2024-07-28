import React from "react";
import styles from "./styles.module.css";

const ProcessCard = () => {

    
  return (
    <div className={styles.process_card_wrapper}>
      <div className={styles.card_header}>
        <div className={styles.card_text}>
          <h3>01</h3>
          <p>Consulting</p>
        </div>

        <div className={styles.action_btn}>-</div>
      </div>

      <div className={styles.card_body}>
        <p>
          During the initial consultation, we will discuss your business goals
          and objectives, target audience, and current marketing efforts. This
          will allow us to understand your needs and tailor our services to best
          fit your requirements.
        </p>
      </div>
    </div>
  );
};

export default ProcessCard;
