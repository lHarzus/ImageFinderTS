import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

export const ImageList = <T,>({ items, render }: ListProps<T>) => {
  return (
    <div className="images-grid">
      {items.map((item, i) => (
        <div key={i}>{render(item)}</div>
      ))}
    </div>
  );
};
