import { useState } from "react";
import styles from "./Testimonial.module.css";

const StarRating = ({ rating }) => {
  return (
    <div className={styles.starRating}>
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          {index < rating ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={styles.starFilled}
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={styles.starEmpty}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          )}
        </span>
      ))}
    </div>
  );
};

function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([
    {
      id: "1",
      name: "Gabby K",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur. Massa tempus nisl aliquam suspendisse nec egestas odio sed porta. Blandit curabitur convallis faucibus auctor est egestas non.",
      imageUrl: "./pexels-gabby-k-5273717.jpg",
    },
    {
      id: "2",
      name: "Justin Shaifer",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur. Massa tempus nisl aliquam suspendisse nec egestas odio sed porta. Blandit curabitur convallis faucibus auctor est egestas non.",
      imageUrl: "./pexels-justin-shaifer-501272-1222271.jpg",
    },
    {
      id: "3",
      name: "Ono Kosuki",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur. Massa tempus nisl aliquam suspendisse nec egestas odio sed porta. Blandit curabitur convallis faucibus auctor est egestas non.",
      imageUrl: "./pexels-ono-kosuki-5648108.jpg",
    },
    {
      id: "4",
      name: "Lisa",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur. Massa tempus nisl aliquam suspendisse nec egestas odio sed porta. Blandit curabitur convallis faucibus auctor est egestas non.",
      imageUrl: "./pexels-pixabay-415829.jpg",
    },
  ]);

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.testimonialsContainer}>
        <p className={styles.testimonialTitle}>Testimonials</p>
        {testimonials?.length > 0 ? (
          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial) => (
              <div className={styles.testimonialItem} key={testimonial.id}>
                <div className={styles.testimonialImageWrapper}>
                  <img
                    className={styles.testimonialImage}
                    src={testimonial.imageUrl}
                    alt={`${testimonial.name} testimonial`}
                  />
                </div>
                <div className={styles.testimonialRating}>
                  <StarRating rating={testimonial.rating} />
                </div>
                <div className={styles.testimonialName}>{testimonial.name}</div>
                <div className={styles.testimonialText}>{testimonial.text}</div>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.noTestimonialsMessage}>
            No testimonials available
          </p>
        )}
      </div>
    </section>
  );
}

export default TestimonialsSection;
