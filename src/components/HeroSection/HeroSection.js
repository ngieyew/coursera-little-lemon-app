import Button from "../Button/Button";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section className={styles.heroSeciton}>
      <div className={styles.heroContainer}>
        <div className={styles.leftContent}>
          <div>
            <h1 className={styles.h1}>Little Lemon</h1>
            <h2 className={styles.h2}>Chicago</h2>
            <p className={styles.p}>
              Lorem ipsum dolor sit amet consectetur. Quam volutpat magna platea
              ornare id. Non pulvinar turpis vitae nullam dictumst pharetra
              consectetur at.
            </p>
          </div>
          <div>
            <Button padding="15px 25px 15px 25px">Reserve a table</Button>
          </div>
        </div>
        <div className={styles.rightContent}>
          <img src="./restauranfood.png" alt="hero" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
