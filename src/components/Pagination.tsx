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
          onClick={() => setPage(i)}
          className={currentPage === i ? "selected" : ""}
        >
          {i}
        </span>
      ))}
      <i
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
