import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { HeaderItems } from "../utils/types";

interface BusTypeDropdownProps {
  items: HeaderItems[];
}

const BusTypeDropdown = ({ items }: BusTypeDropdownProps) => {
  //   const pathname = useLocation().pathname;
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const dropdownToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    setIsExpanded(false);
  }, [searchParams]);
  return (
    <div className="relative">
      <button
        className=" border-2 border-slate-300 px-1 md:px-3 py-1 rounded flex items-center justify-center gap-2"
        onClick={dropdownToggle}
      >
        {type == null ? "Deck" : type === "upper" ? "Upper" : "Lower"}
        {isExpanded && <ChevronDown />}
        {!isExpanded && <ChevronUp />}
      </button>

      {isExpanded && (
        <div className="absolute bg-slate-50 w-full border mt-2 z-10">
          {items.map((item) => (
            <Link key={item.label} to={item.href}>
              <div
                className="w-full rounded cursor-pointer p-1 text-center"
                onClick={dropdownToggle}
              >
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

export default BusTypeDropdown;
