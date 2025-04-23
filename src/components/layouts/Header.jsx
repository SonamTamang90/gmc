import { Link } from "react-router";
import Container from "./Container";
import { HiBars2 } from "react-icons/hi2";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 text-white">
      <img src="/images/logo.png" alt="GMC Logo" className="h-14" />
      <span className="tracking-wider">
        Gelephu <br />
        Mindfulness <br />
        City
      </span>
    </Link>
  );
};

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full pt-6">
      <Container className="flex w-full items-center justify-between">
        <Logo />
        <button className="bg-brand flex items-center gap-2 rounded-md border border-white/10 px-6 py-1 text-white">
          <HiBars2 className="size-6" />
          Menu
        </button>
      </Container>
    </header>
  );
};

export default Header;
