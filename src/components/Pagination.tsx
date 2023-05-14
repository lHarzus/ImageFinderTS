interface PaginationProps {
  currentPage: number;
  pages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination = ({
  currentPage,
  pages,
  setPage,
}: PaginationProps) => {
  return (
    <div className="pagination">
      <i
        role="left"
        className={
          currentPage === 1
            ? "bi bi-arrow-left-square-fill blocked"
            : "bi bi-arrow-left-square-fill"
        }
        onClick={() => {
          if (currentPage > 1) setPage(currentPage - 1);
        }}
      ></i>
      {Array.from({ length: pages }, (_, i) => i + 1).map((i) => (
        <span
          key={i}
          onClick={() => setPage(i)}
          className={currentPage === i ? "selected" : ""}
          role={`${i}`}
        >
          {i}
        </span>
      ))}
      <i
        role="right"
        className={
          currentPage === pages
            ? "bi bi-arrow-right-square-fill blocked"
            : "bi bi-arrow-right-square-fill"
        }
        onClick={() => {
          if (currentPage < pages) setPage(currentPage + 1);
        }}
      ></i>
    </div>
  );
};
