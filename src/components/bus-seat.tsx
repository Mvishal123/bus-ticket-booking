import { useSeatState } from "../utils/store/seat-state";
import { ReducerActionType, SeatingDetails, SeatingType } from "../utils/types";

interface BusSeatProps {
  data: SeatingDetails;
  busId: string;
}
const BusSeat = ({ data, busId }: BusSeatProps) => {
  const isBooked = !!data.booked;
  // @ts-ignore
  const { dispatch, seatState, selectedSeats } = useSeatState();

  const selected = selectedSeats.includes(data.seatNumber);
  return (
    <button
      className={`${isBooked && "cursor-not-allowed bg-slate-100"} ${
        selected && "border-green-500 bg-green-400/50"
      } border-2 rounded w-12 sm:w-20 py-2`}
      disabled={isBooked}
      onClick={() =>
        dispatch({
          type: ReducerActionType.SELECT_SEAT,
          payload: { seatNumber: data.seatNumber, seatType: data.type },
          busId: busId,
        })
      }
    >
      <div className="flex justify-between px ">
        <div className="flex-1 text-center font-semibold text-xs sm:text-lg rotate-90 sm:rotate-0">
          {data.seatNumber}
          {data.type == SeatingType.LOWER ? "L" : "U"}
        </div>
        <div className="w-[10px]  border-2  mr-2"></div>
      </div>
    </button>
  );
};

export default BusSeat;
