import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "../../api/fakeStoreApi";

const ProductList = ({ subtitle, start = 0, limit = 4 }) => {
  const { data, isLoading, error } = useGetProductsQuery();

  const products = data?.products?.slice(start, start + limit);

  // console.log(data);

  return (
    <section className="py-20 w-full space-y-20">
      <h2 className="text-center text-5xl font-bold">{subtitle}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-4 max-w-7xl mx-auto">
        {products?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
