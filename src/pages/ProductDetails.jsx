import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import ProductList from "../components/products/ProductList";
import { useParams } from "react-router";
import { useGetProductQuery } from "../api/dummJsonApi";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductQuery(id);

  // console.log(data);
  // console.log(error);
  // console.log(id);

  return (
    <>
      <Banner />
      <Navbar />
      <div className="flex justify-center py-20">
        {data && (
          <img
            src={data.thumbnail}
            alt={data.title}
            className="w-80 h-80 object-contain"
          />
        )}
      </div>
      <ProductList subtitle="YOU MIGHT ALSO LIKE" />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default ProductDetails;
