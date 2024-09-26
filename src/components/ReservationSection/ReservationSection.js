import React, { useReducer } from "react";
import BookingForm from "../BookingForm/BookingForm";
import styles from "./ReservationSection.module.css";

const initialState = {
  availableTimes: initializeTimes(),
};

function initializeTimes(date = new Date()) {
  return window.fetchAPI(new Date(date));
}

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return { ...state, availableTimes: action.payload };
    default:
      return state;
  }
}

function ReservationSection() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateTimes = (selectedDate) => {
    // For now, return the same available times regardless of the date
    dispatch({ type: "UPDATE_TIMES", payload: initializeTimes(selectedDate) });
  };

  return (
    <section className={styles.reservationSection}>
      <div className={styles.reservationContainer}>
        <BookingForm
          availableTimes={state.availableTimes}
          updateTimes={updateTimes}
        />
      </div>
    </section>
  );
}

export default ReservationSection;
