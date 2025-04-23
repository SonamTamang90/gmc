import { Outlet } from "react-router";
import Header from "./Header";
const GlobalLayout = () => {
  return (
    <div className="size-full">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default GlobalLayout;
