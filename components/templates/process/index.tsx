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
<ProcessCard />
<ProcessCard />
<ProcessCard />
<ProcessCard />
<ProcessCard />
<ProcessCard />

      </div>
    </div>
  );
};

export default ProcessSection;
