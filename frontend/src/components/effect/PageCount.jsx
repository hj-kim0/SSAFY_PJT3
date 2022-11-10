import React from "react";

const PageCount = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);
  return (
    <div>
      <>
        <div>
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            &lt;
          </button>
          {Array(numPages)
            .fill()
            .map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setPage(i + 1)}
                aria-current={page === i + 1 ? "page" : null}
              >
                {i + 1}
              </button>
            ))}
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === numPages}
          >
            &gt;
          </button>
        </div>
      </>
    </div>
  );
};

export default PageCount;
