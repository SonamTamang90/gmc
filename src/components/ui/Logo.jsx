import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center  gap-2 text-white">
      <img src="/images/logo.png" alt="gmc logo" className="h-14" />
      <span>
        Gelephu <br />
        Mindfulness <br /> City
      </span>
    </Link>
  );
};

export default Logo;
