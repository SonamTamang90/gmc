import { Outlet } from "react-router";
import Header from "./Header";

const RootLayout = () => {
  return (
    <div className="size-full">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default RootLayout;
