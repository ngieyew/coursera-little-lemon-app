import React, { useState } from "react";
import BookingForm from "../BookingForm/BookingForm";
import styles from "./ReservationSection.module.css";

function ReservationSection() {
  const [timeSlots, setTimeSlots] = useState([
    { isAvailable: false, time: "17:00" },
    { isAvailable: true, time: "18:00" },
    { isAvailable: false, time: "19:00" },
    { isAvailable: false, time: "20:00" },
    { isAvailable: true, time: "21:00" },
    { isAvailable: true, time: "22:00" },
  ]);

  return (
    <section className={styles.reservationSection}>
      <div className={styles.reservationContainer}>
        <BookingForm timeSlots={timeSlots} />
      </div>
    </section>
  );
}

export default ReservationSection;
