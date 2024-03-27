import { BusFront } from "lucide-react";
import { Link } from "react-router-dom";
import { BusDetailsType } from "../utils/types";
import { getSeatCount } from "../utils/helpers/get-seat-count";

interface BusCardProps {
  busDetails: BusDetailsType;
}
const BusCard = ({ busDetails }: BusCardProps) => {
  const seatsLeft = busDetails.totalSeats - getSeatCount(busDetails.id);
  return (
    <Link
      className="inline-block w-[350px]  px-4 py-2 rounded-lg border-t cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
      to={`/booking/${busDetails.id}`}
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
            {}
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
      <div className="mt-4 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-1">
            <BusFront strokeWidth={1} className="h-4 w-4" />
            <span className="text-xs font-semibold">{busDetails.busBrand}</span>
          </div>
          <p className="text-xs text-slate-400">{busDetails.busType}</p>
        </div>
        <div className="flex items-center gap-1 text-slate-400">
          <h4 className="text-xs">
            <span
              className={`text-lg font-semibold ${
                seatsLeft > 20
                  ? "text-green-600"
                  : seatsLeft > 15
                  ? "text-orange-600"
                  : "text-red-600"
              }`}
            >
              {seatsLeft}
            </span>{" "}
            seats
          </h4>
          <span className="text-xs">/{busDetails.totalSeats}</span>
        </div>
      </div>

      {/* next section */}
      <div className="h-[1px] w-full bg-slate-300/50 mt-4" />

      {/* next section */}
      <div className="flex justify-between items-center h-14">
        <h4 className="font-bold">₹{busDetails.price}</h4>
        <button className="px-3 py-1 text-sm custom-red text-white font-semibold rounded-full">
          Book
        </button>
      </div>
    </Link>
  );
};

export default BusCard;
