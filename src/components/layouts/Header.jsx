import Logo from "../ui/Logo";
import Container from "./Container";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <Navigation />
          <div>&nbsp;</div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
