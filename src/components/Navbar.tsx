import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";

export const links = [
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/services",
    title: "Services",
  },
  {
    path: "/contact",
    title: "Contact",
  },
  {
    path: "/track-shipment",
    title: "Track Shipment",
  },
];

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <nav className="md:w-[80%] w-[90%] fixed top-0 right-0 left-0  mx-auto p-6 rounded-full bg-neutral-300/80">
        {/* container */}
        <div className="flex justify-between">
          <Link
            to="/"
            className="font-body text-xl tracking-widest uppercase text-blue-700"
          >
            Glovoshipping
          </Link>

          <div className="space-x-6 hidden md:block">
            {links.map((link) => (
              <Link
                to={link.path}
                key={link.title}
                className="font-body hover:text-blue-800 hover:underline"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden block"
            onClick={() => setActive(!isActive)}
          >
            <Menu />
          </button>
        </div>
      </nav>
      <ResponsiveMenu visible={isActive} changeFn={setActive} />
    </>
  );
};

export default Navbar;
