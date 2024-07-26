import React from "react";
import styles from "./styles.module.css";
import { navLinks } from "./linksData";
import Link from "next/link";
import Button from "@/components/molecules/button";

const Header = () => {
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.logo}>
        <img src="/Logo.png" />
      </div>

      <div className={styles.nav_links}>
        {navLinks.map((data) => (
          <Link href={""} key={data.id}>
            {data.link}{" "}
          </Link>
        ))}
        <Link href={""}>
        <Button text="Request a quote" color="#000" bgColor="#fff" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
