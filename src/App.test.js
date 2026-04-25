import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio home content", () => {
  render(<App />);
  expect(screen.getByText(/Chandu Raparthi/i)).toBeInTheDocument();
});
