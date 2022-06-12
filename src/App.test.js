import { getByTestId, render, screen } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("Ecommerce Logo on header", () => {
  render(<App />);

  expect(
    getByTestId(document.documentElement, "header-logo")
  ).toBeInTheDocument();
});
