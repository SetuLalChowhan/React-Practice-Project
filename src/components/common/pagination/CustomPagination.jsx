import { Pagination } from "@mui/material";
import React from "react";

export default function CustomPagination({
  setSkip,
  numOfPages = 10,
  currentPage = 1,
}) {
  const handlePageChange = (page) => {
    if (page === 1) {
      setSkip(0);
    } else {
      setSkip(page * 9 - 9);
    }

    // Smooth scroll to the top of the page
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Pagination
        style={{
          maxWidth: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "1rem 0rem",
          fontSize: "2rem",
        }}
        count={Math.ceil(numOfPages / 10)}
        page={currentPage}
        onChange={(e) => handlePageChange(e.target.textContent)}
      />
    </div>
  );
}
