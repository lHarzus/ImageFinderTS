import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../components/Search";
import store from "../store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";

test("increment again", () => {
  render(
    <Provider store={store}>
      <Search />
    </Provider>
  );

  const input = screen.getByRole("input");
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("type", "text");
  expect(input).toHaveTextContent("");

  fireEvent.change(input, { target: { value: "ola" } });
  expect(input).toHaveValue("ola");

  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(input).toHaveValue("");
});
