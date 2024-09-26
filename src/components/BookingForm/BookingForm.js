import React, { useEffect, useState } from "react";
import styles from "./BookingForm.module.css";

function BookingForm({ timeSlots }) {
  // State for form fields
  const [date, setDate] = useState("");
  const [time, setTime] = useState(""); // Initialize as empty
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  useEffect(() => {
    // Set the default time to the first available time slot
    const availableSlot = timeSlots.find((slot) => slot.isAvailable);
    if (availableSlot) {
      setTime(availableSlot.time);
    } else {
      setTime(""); // No available time slots
    }
  }, [timeSlots]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    const reservationDetails = {
      date,
      time,
      guests,
      occasion,
    };
    console.log("Reservation Details:", reservationDetails);
    // Here you can send reservationDetails to your server or API
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {timeSlots.length === 0 ? (
          <option disabled>No available time slots</option>
        ) : (
          timeSlots.map((timeSlot) => (
            <option
              key={timeSlot.time}
              value={timeSlot.isAvailable ? timeSlot.time : ""}
              disabled={!timeSlot.isAvailable}
            >
              {timeSlot.time}
            </option>
          ))
        )}
      </select>
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
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
