import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  BusDetailsType,
  ReducerAction,
  ReducerActionType,
  SeatingType,
  SeatLayoutType,
} from "../types";

const SeatContext = createContext<
  | {
      dispatch: Dispatch<ReducerAction>;
      seatState: SeatLayoutType;
      busDetails: BusDetailsType | undefined;
    }
  | undefined
>(undefined);

const SeatContextProvider = ({ children }: PropsWithChildren) => {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [busDetails, setBusdetails] = useState<BusDetailsType | undefined>(
    undefined
  );

  const id = window.location.pathname.split("/")[2];

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

  const reducer = (
    state: SeatLayoutType,
    action: ReducerAction
  ): SeatLayoutType => {
    const { type, payload } = action;
    switch (type) {
      case ReducerActionType.SELECT_SEAT:
        return state;

      case ReducerActionType.SET_SEAT:
        const layoutPayload = payload as { seatLayout: SeatLayoutType };
        return layoutPayload.seatLayout;

      case ReducerActionType.TOGGLE_SELECT:
        const { seatNumber, seatType } = payload as {
          seatNumber: number;
          seatType: SeatingType;
        };
        const type = seatType === SeatingType.UPPER ? "upper" : "lower";
        const busdetails = localStorage.getItem("busDetails");
        if (busdetails) {
          const parsedBusDetails = JSON.parse(busdetails);
          console.log({ parsedBusDetails });
        }

        return state;
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

  const [seatState, dispatch] = useReducer(reducer, initialState);

  return (
    <SeatContext.Provider value={{ dispatch, seatState, busDetails }}>
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
