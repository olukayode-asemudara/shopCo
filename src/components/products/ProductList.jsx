import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <section className="py-10 w-full">
      <h2 className="text-center text-5xl font-bold">New Arrivals</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-4 max-w-7xl mx-auto">
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductList;
