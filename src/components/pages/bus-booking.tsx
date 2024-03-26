import { ArrowRight, Bus } from "lucide-react";
import { useEffect, useReducer, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { generateSeats } from "../../utils/helpers/generate-seats";
import { BusDetailsType, SeatLayoutType } from "../../utils/types";
import BusTypeDropdown from "../dropdown-bus-type";

export enum ReducerActionType {
  SELECT_SEAT = "SELECT_SEAT",
  SET_SEAT = "SET_SEAT",
}

type ReducerPayload = { seatNumber: number } | { seatLayout: SeatLayoutType };

export interface ReducerAction {
  type: ReducerActionType;
  payload: ReducerPayload;
}

const BusBooking = () => {
  const [busDetails, setBusdetails] = useState<BusDetailsType | undefined>(
    undefined
  );
  // const [seatLayout, setSeatLayout] = useState<SeatLayoutType>();

  //TODO: figure out what's wrong
  const reducer = (
    state: SeatLayoutType,
    action: ReducerAction
  ): SeatLayoutType => {
    const { type, payload } = action;
    switch (type) {
      case ReducerActionType.SELECT_SEAT:
      // return payload;
      case ReducerActionType.SET_SEAT:
        const layoutPayload = payload as { seatLayout: SeatLayoutType };
        return layoutPayload.seatLayout;
      default:
        return initialState;
    }
  };
  const initialState = {
    lower: {
      first: [],
      second: [],
    },
    upper: {
      first: [],
      second: [],
    },
  };
  const [seatLayout, dispatch] = useReducer(reducer, initialState);

  console.log(seatLayout);

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

  console.log(seatLayout);

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
