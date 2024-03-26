import { mockBusDetails } from "../../utils/constants";
import BusCard from "../bus-card";

const Booking = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Available buses</h1>

      <div className="flex flex-wrap mt-6">
        {mockBusDetails.map((bus, index) => (
          <BusCard busDetails={bus} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Booking;
