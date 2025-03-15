import { render, screen } from "@testing-library/react";
import App from "./App";

test("App renders welcome message", () => {
  render(<App />);
  expect(
    screen.getByText(/Start prompting \(or editing\) to see magic happen/i)
  ).toBeInTheDocument();
});
