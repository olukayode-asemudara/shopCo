import Banner from "../components/Banner";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
import Hero from "../components/home/Hero";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import ProductList from "../components/products/ProductList";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <Brands />
      <ProductList />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
