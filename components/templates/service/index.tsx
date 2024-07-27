import React from "react";
import styles from "./styles.module.css";
import SectionHeader from "@/components/molecules/section_header";
import ServiceCard from "@/components/organisms/serviceCard";

const Services = () => {
  return (
    <div className={styles.services_wrapper}>
      <SectionHeader
        title="Services"
        text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
      <div className={styles.service_cards}>
        <ServiceCard title1="Search engine" title2="Optimization" img="/service1.png" bgColor="#B9FF66" color="#000" titleBg="#fff" linkColor="#000" iconColor="#000"/>
        <ServiceCard title1="Search engine" title2="Optimization" img="/service1.png" bgColor="#B9FF66" color="#000" titleBg="#fff" linkColor="#000" iconColor="#000"/>
        <ServiceCard title1="Search engine" title2="Optimization" img="/service1.png" bgColor="#B9FF66" color="#000" titleBg="#fff" linkColor="#000" iconColor="#000"/>
        <ServiceCard title1="Search engine" title2="Optimization" img="/service1.png" bgColor="#B9FF66" color="#000" titleBg="#fff" linkColor="#000" iconColor="#000"/>
        <ServiceCard title1="Search engine" title2="Optimization" img="/service1.png" bgColor="#B9FF66" color="#000" titleBg="#fff" linkColor="#000" iconColor="#000"/>
        <ServiceCard title1="Search engine" title2="Optimization" img="/service1.png" bgColor="#B9FF66" color="#000" titleBg="#fff" linkColor="#000" iconColor="#000"/>
      </div>
    </div>
  );
};

export default Services;
