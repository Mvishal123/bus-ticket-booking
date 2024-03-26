import { ArrowRight, Divide } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import {
  BusDetailsType,
  SeatingDetails,
  SeatLayoutType,
} from "../../utils/types";
import BusTypeDropdown from "../dropdown-bus-type";
import BusSeat from "../bus-seat";

const BusBooking = () => {
  const [busDetails, setBusdetails] = useState<BusDetailsType | undefined>(
    undefined
  );
  const [seatLayout, setSeatLayout] = useState<SeatLayoutType>();

  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const busItems = [
    { label: "Upper", href: `/booking/${id}?type=upper` },
    { label: "Lower", href: `/booking/${id}?type=lower` },
    { label: "Clear", href: `/booking/${id}` },
  ];

  useEffect(() => {
    const busses = localStorage.getItem("busDetails");
    if (busses) {
      const parsedBusses: BusDetailsType[] = JSON.parse(busses);
      const bus = parsedBusses.find((b) => b.id == id);
      setBusdetails(bus);
      setSeatLayout(bus?.seatLayout);
    }
  }, []);

  console.log(seatLayout);

  const generateSeats = (seatsArr: SeatingDetails[] | SeatingDetails[][]) =>
    seatsArr.map((seats, index) => (
      <div key={index} className="flex gap-6 my-2">
        {Array.isArray(seats) ? (
          seats.map((seat) => <BusSeat data={seat} key={seat.id} />)
        ) : (
          <BusSeat data={seats} key={seats.id} />
        )}
      </div>
    ));

  return (
    <div>
      <section className="bg-slate-100 px-6 md:px-12 py-2 rounded-lg flex justify-between items-center">
        {/* sec1 */}
        <div className="w-40 md:w-56">
          <h1 className="font-bold text-xl">{busDetails?.busBrand}</h1>
          <div className="flex gap-1 items-center text-slate-600 mt-2">
            <div>
              <h1 className="font-semibold">{busDetails?.from}</h1>
              <h2 className="text-xs md:text-sm">{busDetails?.startTime}</h2>
            </div>

            <ArrowRight className="h-4 w-4 flex-1" />

            <div>
              <h1 className="font-semibold">{busDetails?.to}</h1>
              <h2 className="text-xs md:text-sm">{busDetails?.arrivalTime}</h2>
            </div>
          </div>
        </div>

        {/* sec2 */}
        <div>
          <BusTypeDropdown items={busItems} />
        </div>
      </section>

      <section></section>

      {/* Bus layout */}
      <section className="flex flex-wrap justify-center items-center min-h-screen sm:min-h-[70vh] px-4 -rotate-90 sm:rotate-0">
        {seatLayout &&
          (type === "lower" ? (
            <div>
              <div>{generateSeats(seatLayout.lower.first)}</div>
              <div className="mt-10 flex gap-6">
                {generateSeats(seatLayout.lower.second)}
              </div>
            </div>
          ) : type === "upper" ? (
            <div>
              <div>{generateSeats(seatLayout.upper.first)}</div>
              <div className="mt-10 flex gap-6">
                {generateSeats(seatLayout.upper.second)}
              </div>
            </div>
          ) : (
            "null"
          ))}
      </section>
    </div>
  );
};

export default BusBooking;
