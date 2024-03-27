import { useContext } from "react";
import { BusContext } from "../../utils/store/bus-state";
import BusCard from "../bus-card";

const Booking = () => {
  const {busDetails} = useContext(BusContext)
  return (
    <div>
      <h1 className="text-2xl font-bold">Available buses</h1>

      <div className="flex flex-wrap mt-6">
        {busDetails.map((bus, index) => (
          <BusCard busDetails={bus} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Booking;
