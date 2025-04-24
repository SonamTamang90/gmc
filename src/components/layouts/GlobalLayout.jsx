import { Outlet } from "react-router";
import Header from "./Header";

const GlobalLayout = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default GlobalLayout;
