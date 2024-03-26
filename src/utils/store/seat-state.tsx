import {
  createContext,
  useReducer,
  Dispatch,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import {
  BusDetailsType,
  ReducerAction,
  ReducerActionType,
  SeatingDetails,
  SeatingType,
  SeatLayoutType,
} from "../types";

export type selectedSeatType = { seatNumber: number; type: SeatingType };
const SeatContext = createContext<
  | {
      dispatch: Dispatch<ReducerAction>;
      seatState: SeatLayoutType;
      selectedSeats: number[];
    }
  | undefined
>(undefined);

const SeatContextProvider = ({ children }: PropsWithChildren) => {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const reducer = (
    state: SeatLayoutType,
    action: ReducerAction
  ): SeatLayoutType => {
    const { type, payload, busId } = action;
    switch (type) {
      case ReducerActionType.SELECT_SEAT:
        const seatPayload = payload as {
          seatNumber: number;
          seatType: SeatingType;
        };

        if (selectedSeats.includes(seatPayload?.seatNumber)) {
          const filteredArr = selectedSeats.filter(
            (seat) => seat !== seatPayload.seatNumber
          );
          setSelectedSeats(filteredArr);
        } else {
          setSelectedSeats([...selectedSeats, seatPayload.seatNumber]);
        }

        return state;

      case ReducerActionType.SET_SEAT:
        const layoutPayload = payload as { seatLayout: SeatLayoutType };
        return layoutPayload.seatLayout;

      default:
        return state;
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

  const [seatState, dispatch] = useReducer(reducer, initialState);
  console.log(selectedSeats);

  return (
    <SeatContext.Provider value={{ dispatch, seatState, selectedSeats }}>
      {children}
    </SeatContext.Provider>
  );
};

export default SeatContextProvider;

export const useSeatState = () => {
  const context = useContext(SeatContext);
  if (!context) {
    console.log("SEAT_CONTEXT ERROR");
    return;
  }

  return context;
};
