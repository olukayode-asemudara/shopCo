import { useSelector } from "react-redux";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CartSection from "../components/cart/CartSection";
import NewsLetter from "../components/NewsLetter";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  console.log(items);
  return (
    <>
      <Banner />
      <Navbar />
      <CartSection />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Cart;
