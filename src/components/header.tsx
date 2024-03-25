import { Link } from "react-router-dom";
import { headerDropdownItems } from "../utils/constants";
import DropdownMenu from "./dropdown-menu";

const Header = () => {
  return (
    <header className="h-14 bg-slate-50 px-3 md:px-6 border-b">
      <nav className="flex items-center justify-between h-full">
        <Link to="/">
          <h1 className="text-3xl font-bold text-slate-800">
            Ticket
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              booking
            </span>
            .com
          </h1>
        </Link>
        <DropdownMenu items={headerDropdownItems} />
      </nav>
    </header>
  );
};

export default Header;
