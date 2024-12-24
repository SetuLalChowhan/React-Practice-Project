import React, { useState } from "react";
import { fetchProducts } from "../../api/allApi";
import { useQuery } from "@tanstack/react-query";
import Card from "../common/Card";

const Products = () => {
  const [limit, setLimit] = useState(10);
  const [skip, setSKip] = useState(0);

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["products", limit, skip],
    queryFn: () => fetchProducts({ limit, skip }),
  });

  if (isLoading) return <div>Loading</div>;

  return (
    <div className=" flex flex-col gap-4 container text-center">
      <h1 className=" text-[24px] font-semibold capitalize">All Products</h1>

      <div className=" grid grid-cols-3 gap-5">
        {data?.map((item, index) => (
          <Card key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
