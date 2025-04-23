import { Link } from "react-router";
import Container from "../ui/Container";

const links = [
  {
    id: 1,
    name: "About",
    href: "/about",
  },
  {
    id: 2,
    name: "Engage",
    href: "/engage",
  },
  {
    id: 3,
    name: "Announcements",
    href: "/announcements",
  },
];

const Logo = () => {
  return (
    <Link className="flex items-center gap-2 text-white">
      <img src="/images/logo.png" alt="gmc logo" className="h-14" />
      <span>
        Gelephu <br />
        Mindfulness <br />
        City
      </span>
    </Link>
  );
};

const NavItem = ({ children, href }) => {
  return (
    <li>
      <Link to={href} className="font-medium text-zinc-200 uppercase">
        {children}
      </Link>
    </li>
  );
};

const DesktopNav = () => {
  return (
    <ul className="flex items-center gap-x-6">
      <NavItem href="/">Home</NavItem>
      <NavItem href="/our-partners">Our Partners</NavItem>
      <NavItem href="/announcements">Announcements</NavItem>
      <NavItem href="/faq">FAQ</NavItem>
      <NavItem href="/">Contact</NavItem>
    </ul>
  );
};

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="w-full py-8">
        <Container className="flex w-full items-center justify-between">
          <Logo />
          <DesktopNav />
          <Link
            to="/engage"
            className="rounded-full bg-white px-6 py-2 text-sm uppercase"
          >
            Engage
          </Link>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
