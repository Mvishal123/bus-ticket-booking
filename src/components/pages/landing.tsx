import { ChevronRight } from "lucide-react";
import { useContext } from "react";
import { busImage } from "../../assets";
import { BusContext } from "../../utils/store/bus-state";
import BusCard from "../bus-card";
import { Link } from "react-router-dom";

const Landing = () => {
  const { busDetails } = useContext(BusContext);
  return (
    <div className="">
      <section className="bg-slate-100 h-[50vh] rounded-xl grid grid-cols-1 md:grid-cols-2 ">
        {/* COL 1 */}
        <div className="order-2 md:order-1">
          <img
            src={busImage}
            alt=""
            height={1697}
            width={2400}
            className="object-cover object-center h-full w-full z-10 overflow-visible"
          />
        </div>

        {/* COL 2 */}
        <div className="flex justify-center h-full items-center order-1 md:order-2">
          <h1 className="max-w-[90%] text-4xl font-bold tracking-tight">
            Board the Future: Seamless Bus Ticket{" "}
            <span className="custom-text-red">
              Booking
            </span>{" "}
            Experience
          </h1>
        </div>
      </section>

      <section className="mt-32">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Book now</h1>
          <div className="flex items-center gap-2 cursor-pointer hover:text-red-400">
            <Link to="/booking">See all</Link>
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>

        <div className="mt-6 flex gap-6">
          {busDetails.map((bus, index) => (
            <BusCard key={index} busDetails={bus} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;
