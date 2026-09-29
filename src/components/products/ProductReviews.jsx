import { useGetProductQuery } from "../../api/dummJsonApi";

const ProductReviews = () => {
  const { data, isLoading, error } = useGetProductQuery();
  const product = data?.product.reviews;
  console.log(product);

  return <div className="max-w-7xl mx-auto">ProductReviews</div>;
};

export default ProductReviews;
