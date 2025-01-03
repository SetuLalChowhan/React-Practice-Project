import React, { useRef, useState } from "react";
import { fetchProducts } from "../../api/allApi";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Card from "../common/Card";
import ReactPaginate from "react-paginate"; // Importing react-paginate
import Animations from "../common/Animations";

const Products = () => {
  const limit = 9;
  const [skip, setSkip] = useState(0);
  const productRef = useRef();

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["products", limit, skip],
    queryFn: () => fetchProducts({ limit, skip }),
    placeholderData: keepPreviousData,
  });

  const currentPage = Math.floor(skip / limit) + 1;
  const isFirstPage = currentPage === 1; // Check if we're on the first page
  const isLastPage = currentPage === Math.ceil(data?.total / limit); // Check if we're on the last page

  const handlePageClick = (event) => {
    const newSkip = event.selected * limit; // Calculate skip based on selected page
    setSkip(newSkip);

    // Calculate the position of the product section and add a dynamic offset
    const elementPosition =
      productRef.current.getBoundingClientRect().top + window.pageYOffset;

    

    console.log(elementPosition)

    // Dynamic offset: adjust based on the viewport height for responsiveness
    const offset = -Math.max(50, window.innerHeight * 0.3); // Minimum offset of 50px or 10% of viewport height

    // Smooth scroll to the calculated position
    window.scrollTo({
      top: elementPosition + offset,
      behavior: "smooth",
    });
  };

  return (
    <div ref={productRef} className="flex flex-col gap-4 container text-center">
      <h1 className="text-[24px] font-semibold capitalize">All Products</h1>

      {isLoading ? (
        <div className="grid grid-cols-3 gap-5">
          {[...Array(9)].map((_, index) => (
            <Animations key={index} />
          ))}
        </div>
      ) : (
        <>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {data?.products.map((item, index) => (
              <Card key={index} product={item} />
            ))}
          </div>

          {/* Pagination Component */}
          {data?.total > 1 && (
            <div className="flex justify-center mt-8">
              <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                previousLabel="Previous"
                pageCount={Math.ceil(data.total / limit)}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName="flex items-center gap-3"
                previousClassName={`px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200 transition ${
                  isFirstPage ? "opacity-50" : ""
                }`}
                nextClassName="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200 transition"
                activeClassName="scale-125 py-2"
                disabledClassName="bg-none cursor-not-allowed"
                breakClassName="px-4 py-2 text-sm font-medium text-gray-700"
                pageLinkClassName="text-base px-2 py-1 border-[1px] rounded-lg border-1"
                pageClassName="hover:scale-125 transition-all duration-300"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Products;
