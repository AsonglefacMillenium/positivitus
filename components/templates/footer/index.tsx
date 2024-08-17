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

        <div className={styles.footer_info}>
          <div className={styles.info_left}>
            <div className={styles.info_head}>
              <h4>Contact Us:</h4>
            </div>

            <div className={styles.info_content}>
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
            </div>
          </div>

          <div className={styles.info_right}>
            <input type="text" placeholder="Email" />
            <button type="submit">Subscribe to news</button>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} Positivus. All Rights Reserved.</p>
          <Link href={""}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
