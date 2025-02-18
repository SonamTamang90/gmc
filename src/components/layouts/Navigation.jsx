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

const Navigation = () => {
  return (
    <nav>
      <ul className="flex items-center gap-8">
        {links.map((link) => (
          <li key={link.label}>
            <NavLink to={link.href} className="text-white uppercase text-xs">
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
