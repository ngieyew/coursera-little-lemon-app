import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  const mockUpdateTimes = jest.fn();
  const mockAvailableTimes = ["17:00"];

  render(
    <BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />
  );

  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
