import React, { useState } from "react";
import styles from "./styles.module.css";

const ProcessCard = () => {
  const [details, setDetails] = useState(false);
  return (
    <div
      className={styles.process_card_wrapper}
      onClick={() => setDetails(!details)}
      style={{
        backgroundColor: details? "b9ff66" : "#F3F3F3"
      }}
    >
      <div className={styles.card_header}>
        <div className={styles.card_text}>
          <h3>01</h3>
          <p>Consulting</p>
        </div>

        <div className={styles.action_btn}>{details ? <p>-</p> : <p>+</p>}</div>
      </div>

      {details && (
        <div className={styles.details_elements}>
          <div className={styles.divider}></div>
          <div className={styles.card_body}>
            <p>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcessCard;
