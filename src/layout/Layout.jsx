import { Outlet, ScrollRestoration } from "react-router";

const Layout = () => {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default Layout;
