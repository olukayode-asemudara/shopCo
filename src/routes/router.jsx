import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Categories from "../pages/Categories";
import LoginForm from "../components/auth/LoginForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: `/product/:id`,
    element: <ProductDetails />,
  },
  {
    path: `/cart`,
    element: <Cart />,
  },
  {
    path: `/categories`,
    element: <Categories />,
  },
  {
    path: `/login`,
    element: <LoginForm />,
  },
]);

export default router;
