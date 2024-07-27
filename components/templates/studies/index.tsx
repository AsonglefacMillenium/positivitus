import React from "react";
import styles from "./styles.module.css";
import SectionHeader from "@/components/molecules/section_header";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";

const StudiesSection = () => {
  return (
    <div className={styles.study_wrapper}>
      <SectionHeader
        title="Case Studies"
        text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />

      <div className={styles.cards}>
      <div className={styles.cards_wrapper}>
        <div className={styles.study_card}>
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <Link href="">
            <p>Learn More</p>
            <RiArrowRightUpLine />
          </Link>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.study_card}>
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <Link href="">
            <p>Learn More</p>
            <RiArrowRightUpLine />
          </Link>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.study_card}>
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <Link href="">
            <p>Learn More</p>
            <RiArrowRightUpLine />
          </Link>
        </div>
      </div>
      </div>

      
    </div>
  );
};

export default StudiesSection;
