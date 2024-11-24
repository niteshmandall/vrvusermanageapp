import React from "react";
import "./Pagination.css";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxVisiblePages = 5; // Maximum number of visible page buttons

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  // Create an array to hold the page numbers to display
  const pageNumbers = [];
  if (totalPages <= maxVisiblePages) {
    // If total pages are less than or equal to maxVisiblePages, show all
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    // Show first page
    pageNumbers.push(1);

    // Show ellipsis if needed
    if (currentPage > 3) {
      pageNumbers.push("...");
    }

    // Show pages around the current page
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    // Show ellipsis if needed
    if (currentPage < totalPages - 2) {
      pageNumbers.push("...");
    }

    // Show last page
    pageNumbers.push(totalPages);
  }

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-button"
      >
        Previous
      </button>
      {pageNumbers.map((number, index) => (
        <button
          key={index}
          onClick={() => typeof number === "number" && handlePageChange(number)}
          className={`pagination-button ${
            currentPage === number ? "active" : ""
          }`}
          disabled={typeof number === "string"} // Disable ellipsis
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-button"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
