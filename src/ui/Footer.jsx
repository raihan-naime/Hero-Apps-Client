import { FaFacebook } from "react-icons/fa6";
import Logo from "../assets/logo.png";
import { BsTwitterX, BsYoutube } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-[#001931] items-center py-10">
      <div className="w-11/12 mx-auto grid gap-10 grid-cols-1 md:grid-cols-12 text-white">
        {/* Logo & Description */}
        <div className="col-span-full md:col-span-6 lg:col-span-4 space-y-5">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Hero Apps Logo" className="w-8" />
            <h2 className="text-xl font-semibold">Hero Apps</h2>
          </div>
          <p className="text-gray-300 text-sm text-justify">
            Hero Apps is your one-stop marketplace to discover, download, and explore the best apps for productivity, entertainment, games, and utilities. Stay updated with the latest releases from top developers.
          </p>
        </div>

        {/* Company */}
        <div className="col-span-full md:col-span-6 lg:col-span-2 space-y-5">
          <h2 className="font-semibold">Company</h2>
          <ul className="text-gray-400 space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press & News</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div className="col-span-full md:col-span-6 lg:col-span-2 space-y-5">
          <h2 className="font-semibold">Support</h2>
          <ul className="text-gray-400 space-y-2">
            <li>Help Center</li>
            <li>FAQ</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Developer Support</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="col-span-full md:col-span-6 lg:col-span-2 space-y-5">
          <h2 className="font-semibold">Follow Us</h2>
          <ul className="flex gap-4 text-white text-xl">
            <li>
              <FaFacebook />
            </li>
            <li>
              <BsYoutube />
            </li>
            <li>
              <BsTwitterX />
            </li>
            <li>
              <ImInstagram />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
