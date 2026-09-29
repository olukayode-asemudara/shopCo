import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "../../api/dummJsonApi";
import MainButton from "../MainButton";
import { useState } from "react";

const ProductList = ({ subtitle, start = 0, limit = 4 }) => {
  const { data, isLoading, error } = useGetProductsQuery();
  const [showAll, setShowAll] = useState(false);
  // console.log(data);

  // console.log(error);

  const products = showAll
    ? data?.products
    : data?.products?.slice(start, start + limit);

  return (
    <section className="py-20 w-full space-y-15">
      <h2 className="text-center text-5xl font-bold">{subtitle}</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-4 max-w-7xl mx-auto">
        {products?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>

      <div className="flex justify-center">
        <MainButton
          text={showAll ? "Show Less" : "View More"}
          onClick={() => setShowAll(!showAll)}
        />
      </div>
    </section>
  );
};

export default ProductList;
