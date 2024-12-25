import React, { useState } from "react";
import { fetchProducts } from "../../api/allApi";
import { useQuery } from "@tanstack/react-query";
import Card from "../common/Card";
import { ClockLoader } from "react-spinners";
import CustomPagination from "../common/pagination/CustomPagination";

const Products = () => {
  const [limit, setLimit] = useState(9);
  const [skip, setSkip] = useState(0);

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["products", limit, skip],
    queryFn: () => fetchProducts({ limit, skip }),
  });

  console.log(isLoading);

  const currentPage = Math.floor(skip / limit) + 1;

  return (
    <div className=" flex flex-col gap-4 container text-center">
      <h1 className=" text-[24px] font-semibold capitalize">All Products</h1>

      {isLoading ? (
        <div className=" flex justify-center items-center h-[100vh]">
          <ClockLoader />
        </div>
      ) : (
        <>
          <div className=" grid grid-cols-3 gap-5">
            {data?.products.map((item, index) => (
              <Card key={index} product={item} />
            ))}
          </div>

          {data.total > 1 && (
            <CustomPagination
              setSkip={setSkip}
              numOfPages={data.total}
              currentPage={currentPage}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Products;
