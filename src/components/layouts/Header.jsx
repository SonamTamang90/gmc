import { Link } from "react-router";
import { HiBars2 } from "react-icons/hi2";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="flex w-full items-center justify-between px-6 py-3">
        {/* <Link to="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="GMC Logo" className="h-14" />
          <span className="font-semibold text-white">
            Gelephu
            <br /> Mindfulness <br /> City
          </span>
        </Link> */}
        <div>&nbsp;</div>

        <button className="bg-brand flex cursor-pointer items-center gap-2 rounded-md px-6 py-1 text-white transition-opacity hover:opacity-75">
          <span className="uppercase">Menu</span>
          <HiBars2 className="size-6" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
