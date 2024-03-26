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

      case ReducerActionType.TOGGLE_SELECT:
        const { seatNumber, seatType } = payload as {
          seatNumber: number;
          seatType: SeatingType;
        };
        const type = seatType === SeatingType.UPPER ? "upper" : "lower";
        const busdetails = localStorage.getItem("busDetails");
        if (busdetails) {
          const parsedBusDetails: BusDetailsType[] = JSON.parse(busdetails);
          const currentBus = parsedBusDetails.find((bus) => bus.id === busId)
            ?.seatLayout!;

          const updatedLayout = currentBus[type];
          console.log(seatNumber);

          const newLayoutFirst = updatedLayout.first?.map((seats) => {
            if (Array.isArray(seats)) {
              return seats.map((seat) => {
                if (seat.seatNumber === seatNumber) {
                  return { ...seat, selected: !seat.selected };
                }
                return seat;
              });
            } else {
              if (seats.seatNumber === seatNumber) {
                return { ...seats, selected: !seats.selected };
              }
              return seats;
            }
          });

          const newLayoutSecond = updatedLayout.second?.map((seats) => {
            if (Array.isArray(seats)) {
              return seats.map((seat) => {
                if (seat.seatNumber === seatNumber) {
                  return { ...seat, selected: !seat.selected };
                }
                return seat;
              });
            } else {
              if (seats.seatNumber === seatNumber) {
                return { ...seats, selected: !seats.selected };
              }
              return seats;
            }
          });
          let finalLayoutChange = currentBus;
          finalLayoutChange[type].first = newLayoutFirst as SeatingDetails[];
          finalLayoutChange[type].second = newLayoutSecond as SeatingDetails[];

          console.log(finalLayoutChange[type]);
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
