import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { navLinks } from "@/components/organisms/header/linksData";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";

const FooterSection = () => {
  return (
    <footer className={styles.footer_wrapper}>
      <div className={styles.footer_container}>
        <div className={styles.footer_nav}>
          <div className={styles.logo}>
            <img src="/foot_logo.png" />
          </div>

          <div className={styles.nav_links}>
            {navLinks.map((data) => (
              <Link href={""} key={data.id}>
                {data.link}{" "}
              </Link>
            ))}
          </div>

          <div className={styles.foot_social}>
            <TiSocialLinkedinCircular />
            <IoLogoFacebook />
            <AiFillTwitterCircle />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
