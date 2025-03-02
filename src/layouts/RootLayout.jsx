import { Outlet } from "react-router";
const RootLayout = () => {
  return (
    <div className="size-full">
      <main>
        <Outlet />
      </main>
      {/* <footer>Footer</footer> */}
    </div>
  );
};

export default RootLayout;
