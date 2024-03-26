import { useSeatState } from "../utils/store/seat-state";
import { ReducerActionType, SeatingDetails, SeatingType } from "../utils/types";

interface BusSeatProps {
  data: SeatingDetails;
}
const BusSeat = ({ data }: BusSeatProps) => {
  const isBooked = data.selected;
  // @ts-ignore
  const { dispatch, seatState } = useSeatState();

  return (
    <button
      className={`${
        isBooked && "cursor-not-allowed bg-slate-100"
      } border-2 rounded w-12 sm:w-20 py-2`}
      disabled={isBooked}
      onClick={() =>
        dispatch({
          type: ReducerActionType.TOGGLE_SELECT,
          payload: { seatNumber: data.seatNumber, seatType: data.type },
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
