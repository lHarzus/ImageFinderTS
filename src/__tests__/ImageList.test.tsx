import { render, screen } from "@testing-library/react";
import { ImageList } from "../components/ImageList";

test("renders a list", () => {
  const items = [
    {
      name: "test",
      url: "www.test.com",
    },
    {
      name: "test2",
      url: "www.test2.com",
    },
  ];

  const renderer = jest.fn();
  render(<ImageList items={items} render={renderer} page={1} perPage={2} />);

  expect(renderer).toHaveBeenCalledTimes(items.length);
});
