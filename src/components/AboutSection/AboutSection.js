import React from "react";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutLeftContent}>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </div>

        <div className={styles.aboutRightContent}>
          <div className={styles.imageStack}>
            <img
              className={styles.topImage}
              src="./Mario and Adrian A.png"
              alt="Mario and Adrian"
            />
            <img
              className={styles.bottomImage}
              src="./Mario and Adrian b.png"
              alt="Mario and Adrian"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
