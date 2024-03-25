import { BusFront } from "lucide-react";
import { mockBusDetails } from "../utils/constants";
import { Link } from "react-router-dom";

const BusCard = () => {
  const busDetails = mockBusDetails;
  return (
    <Link
      className="inline-block w-[350px]  px-4 py-2 rounded-lg border-t cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
      to={`/booking`}
    >
      <div className="flex justify-between items-center">
        <div className="text-center">
          <h3 className="text-lg font-semibold">{busDetails.startTime}</h3>
          <span className="text-sm text-slate-500 font-semibold">
            {busDetails.from}
          </span>
        </div>
        <div className="flex-1 px-6">
          <h5 className="text-center mb-2 font-semibold text-slate-500 text-sm">
            {busDetails.duration}
          </h5>
          <div className="w-full border-2 border-slate-300 border-dashed" />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold">{busDetails.arrivalTime}</h3>
          <span className="text-sm text-slate-500 font-semibold">
            {busDetails.to}
          </span>
        </div>
      </div>

      {/* next section */}
      <div className="mt-4">
        <div className="flex items-center gap-1">
          <BusFront strokeWidth={1} className="h-4 w-4" />
          <span className="text-xs font-semibold">{busDetails.busBrand}</span>
        </div>
        <p className="text-xs text-slate-400">{busDetails.busType}</p>
      </div>

      {/* next section */}
      <div className="h-[1px] w-full bg-slate-300/50 mt-4" />

      {/* next section */}
      <div className="flex justify-between items-center h-14">
        <h4 className="font-bold">₹{busDetails.price}</h4>
        <button className="px-3 py-1 text-sm bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full">
          Book
        </button>
      </div>
    </Link>
  );
};

export default BusCard;
