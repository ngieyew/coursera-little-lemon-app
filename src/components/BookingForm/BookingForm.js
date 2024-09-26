import React, { useEffect, useState } from "react";
import styles from "./BookingForm.module.css";
import Button from "../Button/Button";

function BookingForm({ availableTimes, updateTimes }) {
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];

  const [date, setDate] = useState(formattedDate);
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const availableSlot = availableTimes[0];
    if (availableSlot) {
      setTime(availableSlot);
    } else {
      setTime("");
    }
  }, [availableTimes]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    updateTimes(selectedDate);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!date) {
      newErrors.date = "Date is required.";
    }
    if (!time) {
      newErrors.time = "Time is required.";
    }
    if (guests < 1 || guests > 10) {
      newErrors.guests = "Number of guests must be between 1 and 10.";
    }
    if (!occasion) {
      newErrors.occasion = "Occasion is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const reservationDetails = {
        date,
        time,
        guests,
        occasion,
      };

      const returnApi = window.submitAPI(reservationDetails);
      console.log("returnApi", returnApi);
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h1>Book Now</h1>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />
      {errors.date && <p className={styles.error}>{errors.date}</p>}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.length === 0 ? (
          <option disabled>No available time slots</option>
        ) : (
          availableTimes.map((timeSlot) => (
            <option key={timeSlot} value={timeSlot}>
              {timeSlot}
            </option>
          ))
        )}
      </select>
      {errors.time && <p className={styles.error}>{errors.time}</p>}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      {errors.guests && <p className={styles.error}>{errors.guests}</p>}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      {errors.occasion && <p className={styles.error}>{errors.occasion}</p>}

      <Button aria-label="On Click" type="submit">
        Make Your reservation
      </Button>
    </form>
  );
}

export default BookingForm;
