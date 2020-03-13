import React from "react";
import {
  render,
  fireEvent,
  getByDisplayValue
} from "@testing-library/react";
import Navigation from "./Navigation";

// ANCHOR Start of Tests
test("nav renders correctly", () => {
  render(<Navigation />);
});

test("button fires correctly and changes darkmode to true", () => {
  const { getByText } = render(<Navigation />);

  const darkModeButton = getByText(/dark mode/i);
  fireEvent.click(darkModeButton);
  expect(window.localStorage.darkMode).toBeTruthy();
});
