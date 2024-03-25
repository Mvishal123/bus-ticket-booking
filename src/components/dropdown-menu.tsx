import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HeaderItems } from "../utils/types";

interface DropdownMenuProps {
  items: HeaderItems[];
}

const DropdownMenu = ({ items }: DropdownMenuProps) => {
  const pathname = useLocation().pathname;

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const dropdownToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    setIsExpanded(false);
  }, [pathname]);
  return (
    <div className="relative">
      <button
        className="w-36 border-2 border-slate-300 px-1 md:px-3 py-1 rounded flex items-center justify-center gap-2"
        onClick={dropdownToggle}
      >
        {pathname === "/"
          ? "Get started"
          : pathname === "/booking"
          ? "booking"
          : "view"}
        {isExpanded && <ChevronDown />}
        {!isExpanded && <ChevronUp />}
      </button>

      {isExpanded && (
        <div className="absolute bg-slate-50 w-full border mt-2">
          {items.map((item) => (
            <Link key={item.label} to={item.href}>
              <div className="w-full rounded cursor-pointer p-1 text-center">
                <p className="bg-slate-200/20 hover:bg-slate-200/50 px-2 py-2 rounded">
                  {item.label}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
