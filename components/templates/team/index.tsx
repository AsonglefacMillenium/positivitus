import React from "react";
import styles from "./styles.module.css";
import SectionHeader from "@/components/molecules/section_header";
import TeamCard from "@/components/organisms/team_card";

const TeamSection = () => {
  return (
    <div className={styles.team_section}>
      <SectionHeader
        title="Team"
        text="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />

      <div className={styles.cards_wrapper}>
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
};

export default TeamSection;
