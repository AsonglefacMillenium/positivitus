"use client";
import React from "react";
import styles from "./styles.module.css";
import SectionHeader from "@/components/molecules/section_header";
import ProcessCard from "@/components/organisms/process_card";

const ProcessSection = () => {
  return (
    <div className={styles.process_wrapper}>
      <SectionHeader
        title="Our Working Process"
        text="Step-by-Step Guide to Achieving Your Business Goals"
      />

      <div className={styles.process_cards}>
        <ProcessCard
          number="01"
          text="During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements."
          title="Consulting"
        />
        <ProcessCard
          number="02"
          text="During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements."
          title="Research and Strategy development"
        />
        <ProcessCard
          number="03"
          text="During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements."
          title="Implementation"
        />
        <ProcessCard
          number="04"
          text="During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements."
          title="Monitoring and Optimizing"
        />
        <ProcessCard
          number="05"
          text="During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements."
          title="Reporting and Communcation"
        />
        <ProcessCard
          number="06"
          text="During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements."
          title="Continual Improvement"
        />
      </div>
    </div>
  );
};

export default ProcessSection;
