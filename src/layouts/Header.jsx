import { Link } from "react-router";
import Container from "../ui/Container";
import Navigation from "../components/Navigation";
import Button from "../ui/Button";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src="/images/logo.png" alt="Company logo" className="h-14" />
      <h3 className="font-bold tracking-widest">
        Gelephu <br />
        Mindfullness <br />
        City
      </h3>
    </Link>
  );
};

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <Container>
        <div className="flex w-full items-center justify-between py-4">
          <Logo />
          <Navigation />
          <Button className="rounded-full border border-white px-4 py-2.5">
            Join The Journey
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
