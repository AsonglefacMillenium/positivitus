import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

interface ServiceCardProps {
  title1: string;
  title2: string;
  img: string;
  bgColor: string;
  color: string;
  titleBg: string;
  iconColor: string
  linkColor: string
}
const ServiceCard = ({ ...props }: ServiceCardProps) => {
  return (
    <div
      className={styles.card_wrapper}
      style={{
        backgroundColor: props.bgColor,
      }}
    >
      <div className={styles.card_left}>
        <div
          className={styles.card_title}
          style={{
            color: props.color,
          }}
        >
          <p
            style={{
              backgroundColor: props.titleBg,
            }}
          >
            {props.title1}
          </p>
          <p
            style={{
              backgroundColor: props.titleBg,
            }}
          >
            {props.title2}
          </p>
        </div>

        <Link href={""}>
          <div className={styles.icon}>
            <BsFillArrowUpRightCircleFill style={{
                color: props.iconColor
            }} />
          </div>
          <p style={{
            color: props.linkColor
          }}>Learn more</p>
        </Link>
      </div>

      <div className={styles.card_right}>
        <img src={props.img} />
      </div>
    </div>
  );
};

export default ServiceCard;
