import { ArrowRight, Bus } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { generateSeats } from "../../utils/helpers/generate-seats";
import { useSeatState } from "../../utils/store/seat-state";
import { BusDetailsType, ReducerActionType } from "../../utils/types";
import BusTypeDropdown from "../dropdown-bus-type";

const BusBooking = () => {
  const [busDetails, setBusdetails] = useState<BusDetailsType | undefined>(
    undefined
  );

  // @ts-ignore
  const { dispatch, seatState, selectedSeats } = useSeatState();

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
      dispatch({
        type: ReducerActionType.SET_SEAT,
        payload: { seatLayout: bus?.seatLayout! },
      });
    }
  }, []);
  console.log(seatState);

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

      <section className="bg-slate-100 px-6 md:px-12 py-2 rounded-lg flex flex-col md:flex-row md:justify-between md:items-center mt-4 min-h-32 md:min-h-20">
        <div className="order-2 md:order-1 mt-4 md:mt-0">
          <h4 className="font-semibold">Selected seats</h4>
          <ul className="flex gap-2">
            {selectedSeats.map((seat: number, index: number) => (
              <li key={seat} className="font-bold">
                {seat}
                {index !== selectedSeats.length - 1 && ","}
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex items-center gap-4 order-1 md:order-2">
          <li>
            <div className="h-6 w-6 border-green-500 bg-green-400/50 rounded"></div>
            Selected
          </li>
          <li>
            <div className="h-6 w-6 bg-white border rounded"></div>Available
          </li>
          <li>
            <div className="h-6 w-6 border bg-slate-300 rounded"></div>
            N/A
          </li>
        </ul>
      </section>

      {/* Bus layout */}
      <section className="flex flex-wrap justify-center items-center min-h-screen sm:min-h-[70vh] px-4 -rotate-90 sm:rotate-0">
        {seatState &&
          (type === "lower" ? (
            <div>
              <div>{generateSeats(seatState.lower.first, busDetails?.id!)}</div>
              <div className="mt-10 flex gap-6">
                {generateSeats(seatState.lower.second, busDetails?.id!)}
              </div>
            </div>
          ) : type === "upper" ? (
            <div>
              <div>{generateSeats(seatState.upper.first, busDetails?.id!)}</div>
              <div className="mt-10 flex gap-6">
                {generateSeats(seatState.upper.second, busDetails?.id!)}
              </div>
            </div>
          ) : (
            <div className="rotate-90 sm:rotate-0 flex flex-col items-center text-slate-400">
              <Bus className="h-16 w-16" />
              <h1 className="text-4xl font-semibold  italic">
                Please select a deck
              </h1>
            </div>
          ))}
      </section>
    </div>
  );
};

export default BusBooking;
