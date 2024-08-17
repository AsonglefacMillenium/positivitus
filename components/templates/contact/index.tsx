import React from "react";
import styles from "./styles.module.css";
import SectionHeader from "@/components/molecules/section_header";
import Button from "@/components/molecules/button";

const ContactSection = () => {
  return (
    <div className={styles.contact_wrapper}>
      <SectionHeader
        title="Contact Us"
        text="Connect with Us: Let's Discuss Your Digital Marketing Needs"
      />

      <div className={styles.form_container}>
        <div className={styles.form_wrapper}>
          <form action="">
            <div className={styles.form_group}>
              <label htmlFor="">Name</label>
              <input type="text" name="name" placeholder="name" />
            </div>

            <div className={styles.form_group}>
              <label htmlFor="">Email</label>
              <input type="email" name="email" placeholder="email" />
            </div>

            <div className={styles.form_group}>
              <label htmlFor="">Message</label>
              <textarea cols={5} rows={10} name="message" placeholder="message" ></textarea>
            </div>

            <button  type="submit"  className={styles.btn} >Send Message</button>
          </form>
        </div>

        <div className={styles.image}>
          <img src="/contact_img.png" />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
