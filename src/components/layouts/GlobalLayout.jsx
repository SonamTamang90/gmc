import { Outlet } from "react-router";
import Header from "./Header";

const GlobalLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default GlobalLayout;
