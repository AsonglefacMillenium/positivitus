import React, { useState } from "react";
import styles from "./styles.module.css";


interface ProcessCardProps{
  title: string;
  text: string;
  number: string
}
const ProcessCard = ({...props}:ProcessCardProps) => {
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
          <h3>{props.number}</h3>
          <p>{props.title}</p>
        </div>

        <div className={styles.action_btn}>{details ? <p>-</p> : <p>+</p>}</div>
      </div>

      {details && (
        <div className={styles.details_elements}>
          <div className={styles.divider}></div>
          <div className={styles.card_body}>
            <p>
              {props.text}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcessCard;
