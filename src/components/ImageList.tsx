import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
  page: number;
  perPage: number;
}

export const ImageList = <T,>({
  items,
  render,
  page,
  perPage,
}: ListProps<T>) => {
  const temp = Array.from(
    { length: perPage },
    (_, i) => i + (page - 1) * perPage
  );
  return (
    <div className="images-grid">
      {temp.map((i) => (
        <div key={i} role="contentinfo">
          {items[i] ? render(items[i]) : ""}
        </div>
      ))}
    </div>
  );
};
