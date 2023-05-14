import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from "../components/Pagination";
import "@testing-library/jest-dom/extend-expect";
import React from "react";

test("renders a pagination component", () => {
  const setStateMock = jest.fn();
  const useStateMock: any = (useState: any) => [useState, setStateMock];
  jest.spyOn(React, "useState").mockImplementation(useStateMock);

  const { getByRole } = render(
    <Pagination currentPage={1} pages={5} setPage={setStateMock} />
  );
  let button: HTMLElement = getByRole("right");
  fireEvent.click(button);

  expect(setStateMock).toHaveBeenCalledTimes(1);
  expect(setStateMock).toHaveBeenCalledWith(2);

  const page3 = screen.getByText("3");
  fireEvent.click(page3);
  expect(setStateMock).toHaveBeenCalledWith(3);
});
