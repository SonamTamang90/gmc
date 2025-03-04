import { Link } from "react-router";

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
  <Link className="text-white">
    <img src="/images/logo.png" alt="gmc logo" />
    <span>Gelephu Mindfulness City</span>
  </Link>;
};

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
