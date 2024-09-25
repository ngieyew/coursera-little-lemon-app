import { useState } from "react";
import Button from "../Button/Button";
import styles from "./HighlightSection.module.css";

function HeroSection() {
  const [apiSpecialMenus, setApiSpecialMenus] = useState([
    {
      id: "greek-salad",
      name: "Greek salad",
      price: 12.99,
      imageUrl: "./greek salad.jpg",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    },
    {
      id: "bruchetta",
      name: "Bruchetta",
      price: 5.99,
      imageUrl: "./bruchetta.jpg",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    },
    {
      id: "lemon-dessert",
      name: "Lemon Desert",
      price: 5.0,
      imageUrl: "./lemon dessert.jpg",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ]);
  const [specialMenus, setSpecialMenus] = useState([
    {
      id: "greek-salad",
      name: "Greek salad",
      price: "12.99",
      imageUrl: "./greek salad.jpg",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    },
    {
      id: "bruchetta",
      name: "Bruchetta",
      price: "5.99",
      imageUrl: "./bruchetta.jpg",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    },
    {
      id: "lemon-dessert",
      name: "Lemon Desert",
      price: "5.00",
      imageUrl: "./lemon dessert.jpg",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ]);

  return (
    <section className={styles.highlightSection}>
      <div className={styles.highlightContainer}>
        <div className={styles.headerContainer}>
          <h1 className={styles.h1}>Specials</h1>
          <div>
            <Button padding="15px 25px 15px 25px" variant="secondary">
              Online Menu
            </Button>
          </div>
        </div>

        {specialMenus?.length > 0 ? (
          <div className={styles.specialMenuGrid}>
            {specialMenus.map((specialMenu) => (
              <div className={styles.specialMenuItem} key={specialMenu.id}>
                <div className={styles.specialMenuImageWrapper}>
                  <img
                    className={styles.specialMenuImage}
                    src={specialMenu.imageUrl}
                    alt={`${specialMenu.name} special menu`}
                  />
                </div>
                <div className={styles.specialMenuDetails}>
                  <h3 className={styles.specialMenuName}>{specialMenu.name}</h3>
                  <span className={styles.specialMenuPrice}>
                    ${specialMenu.price}
                  </span>
                  <p className={styles.specialMenuDescription}>
                    {specialMenu.description}
                  </p>
                  <div className={styles.specialMenuActions}>
                    <Button variant="link">
                      Order a delivery
                      <span className={styles.buttonIcon}>
                        <svg
                          width="18"
                          height="11"
                          viewBox="0 0 18 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.8035 1.72713C14.8035 0.8993 14.0532 0.221985 13.1363 0.221985H10.6355V1.72713H13.1363V3.72145L10.2354 6.99513H7.3011V3.23227H3.96671C2.12446 3.23227 0.632324 4.57938 0.632324 6.24256V8.50028H2.29952C2.29952 9.74955 3.41654 10.758 4.80031 10.758C6.18408 10.758 7.3011 9.74955 7.3011 8.50028H11.0356L14.8035 4.24825V1.72713ZM4.80031 9.25285C4.34183 9.25285 3.96671 8.91419 3.96671 8.50028H5.63391C5.63391 8.91419 5.25879 9.25285 4.80031 9.25285Z"
                            fill="black"
                          />
                          <path
                            d="M7.30106 0.974548H3.13306V2.47968H7.30106V0.974548Z"
                            fill="black"
                          />
                          <path
                            d="M14.8035 6.24255C13.4198 6.24255 12.3027 7.251 12.3027 8.50026C12.3027 9.74952 13.4198 10.758 14.8035 10.758C16.1873 10.758 17.3043 9.74952 17.3043 8.50026C17.3043 7.251 16.1873 6.24255 14.8035 6.24255ZM14.8035 9.25283C14.345 9.25283 13.9699 8.91417 13.9699 8.50026C13.9699 8.08635 14.345 7.74769 14.8035 7.74769C15.262 7.74769 15.6371 8.08635 15.6371 8.50026C15.6371 8.91417 15.262 9.25283 14.8035 9.25283Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.noMenuMessage}>No special menus available</p>
        )}
      </div>
    </section>
  );
}

export default HeroSection;
