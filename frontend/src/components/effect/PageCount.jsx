import React from "react";
import "./PageCount.scss";


const PageCount = ({ total, limit, page, setPage }) => {
  
  const numPages = Math.ceil(total / limit);

  return (
    <div>
      <>
        <div className="p-3">
          <button className="pagebtn" onClick={() => setPage(page - 1)} disabled={page === 1}>
            <b className="fs-24">&#10094;</b>
          </button>
          {Array(numPages)
            .fill()
            .map((_, i) => (
              <button className={`pagebtn ${page == i+1?'on':''}`}
                key={i + 1}
                onClick={() => setPage(i + 1)}
                aria-current={page === i + 1 ? "page" : null}
              >
                <b className="fs-24">{i + 1}</b>
              </button>
            ))}
          <button className="pagebtn"
            onClick={() => setPage(page + 1)}
            disabled={page === numPages}
          >
            <b className="fs-24">&#10095;</b>
            
          </button>
        </div>
      </>
    </div>
  );
};

export default PageCount;
