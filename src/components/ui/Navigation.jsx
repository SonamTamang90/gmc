import { NavLink } from "react-router";

const links = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Engage",
    href: "/engage",
  },
  {
    label: "Announcements",
    href: "/announcements",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Navigation = ({ isMobile }) => {
  return (
    <nav>
      <ul
        className={`items-center gap-8 ${isMobile ? "flex-col space-y-8" : "flex"}`}
      >
        {links.map((link) => (
          <li key={link.label}>
            <NavLink
              to={link.href}
              className="text-xs font-semibold text-white uppercase"
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
