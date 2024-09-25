import React from "react";
import styles from "./FooterSection.module.css";

export default function FooterSection() {
  return (
    <section className={styles.footerSection}>
      <div className={styles.footerContainer}>
        <div className={styles.footerImage}>
          <img src="./restaurant.png" alt="restaurant" />
        </div>
        <div className={styles.footerGrid}>
          <div className={styles.footerNavigationTitle}>
            <h2 className={styles.footerTitle}>Doormat Navigation</h2>
          </div>
          <div className={styles.footerNavigationItems}>
            <ul className={styles.footerList}>
              <li>
                <a href="/" className={styles.footerLink}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className={styles.footerLink}>
                  About
                </a>
              </li>
              <li>
                <a href="/menu" className={styles.footerLink}>
                  Menu
                </a>
              </li>
              <li>
                <a href="/reservations" className={styles.footerLink}>
                  Reservations
                </a>
              </li>
              <li>
                <a href="/order" className={styles.footerLink}>
                  Order Online
                </a>
              </li>
              <li>
                <a href="/login" className={styles.footerLink}>
                  Login
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.contactTitle}>
            <h2 className={styles.footerTitle}>Contact</h2>
          </div>
          <div className={styles.contactItems}>
            <address className={styles.footerList}>
              <p>123 Main St, Chicago, IL 60601</p>
              <p>
                <a href="tel:+13125551234" className={styles.footerLink}>
                  +1 (312) 555-1234
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@littlelemon.com"
                  className={styles.footerLink}
                >
                  info@littlelemon.com
                </a>
              </p>
            </address>
          </div>

          <div className={styles.socialMediaTitle}>
            <h2 className={styles.footerTitle}>Social Media</h2>
          </div>
          <div className={styles.socialMediaItems}>
            <ul className={styles.footerList}>
              <li>
                <a
                  href="https://facebook.com/littlelemon"
                  className={styles.footerLink}
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/littlelemon"
                  className={styles.footerLink}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/littlelemon"
                  className={styles.footerLink}
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
