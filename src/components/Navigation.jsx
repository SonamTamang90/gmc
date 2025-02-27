import { NavLink } from "react-router";

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
  {
    id: 4,
    name: "Contact",
    href: "/contact",
  },
];

const Navigation = () => {
  return (
    <nav className="">
      <ul className="flex items-center gap-8">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.href}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
