import { Link } from "react-router-dom";

const links = [
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

const Footer = () => {
  return (
    <footer className="bg-neutral-300/20 p-3">
      {/* container */}
      <div className="md:w-[80%] w-[90%] mx-auto p-3">
        {/* write up  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:place-items-end">
          <div className="space-y-6">
            <h4 className="text-xl font-body uppercase tracking-wider text-blue-700">
              Glovoshipping
            </h4>
            <p className="text-sm font-body leading-loose">
              Our mission at GlovoShipping is to provide unparalleled shipping
              services that bridge continents, connect communities, and
              facilitate the flow of goods worldwide. We strive to be the
              leading force in global logistics, offering innovative solutions
              tailored to meet the unique needs of our diverse clientele.
            </p>
            <p className="text-sm font-body leading-loose">
              Choose GlovoShipping for a reliable, efficient, and
              customer-focused shipping partner. Experience the difference with
              a company that values your shipments as much as you do.
            </p>
          </div>
          <div>
            <h4 className="font-body uppercase underline tracking-wider">
              Quick Links
            </h4>
            <div className="flex flex-col md:flex-row gap-4 my-2">
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
          </div>
        </div>
        {/* copyright */}
        <div className="my-8 py-4">
          <p className="font-body text-sm text-center text-neutral-400">
            Copyright Glovoshipping 2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
