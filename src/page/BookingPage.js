import React from "react";
import Navbar from "../components/Navbar/Navbar";
import FooterSection from "../components/FooterSection/FooterSection";
import ReservationSection from "../components/ReservationSection/ReservationSection";

function BookingPage() {
  return (
    <>
      <Navbar />
      <ReservationSection />
      <FooterSection />
    </>
  );
}

export default BookingPage;
