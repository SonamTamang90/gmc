import Logo from "../ui/Logo";
import Container from "../ui/Container";
import Navigation from "../ui/Navigation";
import Button from "../ui/Button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-4">
      <Container>
        <div className="hidden items-center justify-between lg:flex">
          <Logo />
          <Navigation />
          <Button
            variant="outline"
            size="medium"
            text="Join us"
            className="px-8"
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
