import {
  createContext,
  useReducer,
  Dispatch,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import {
  bookingDetails,
  BusDetailsType,
  ReducerAction,
  ReducerActionType,
  SeatingDetails,
  SeatLayoutType,
  SeatType,
} from "../types";

export type selectedSeatType = { seatNumber: number; type: SeatType };
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
          seatType: SeatType;
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

      case ReducerActionType.BOOK_TICKETS:
        const busDetails = localStorage.getItem("busDetails");
        const bookingPayload = payload as bookingDetails[];

        if (busDetails) {
          const parsedBusDetails = JSON.parse(busDetails);
          const currentBus: BusDetailsType = parsedBusDetails.find(
            (bus: SeatingDetails) => bus.id == busId
          );

          let seating = { ...currentBus.seatLayout };

          bookingPayload.map((booking) => {
            const type = booking.seatNumber > 19 ? "upper" : "lower";
            seating[type].first = seating[type].first?.map((seat) =>
              Array.isArray(seat)
                ? seat.map((seats) =>
                    seats.seatNumber === booking.seatNumber
                      ? { ...seats, booked: { ...booking } }
                      : seats
                  )
                : seat.seatNumber === booking.seatNumber
                ? { ...seat, booked: { ...booking } }
                : seat
            ) as SeatingDetails[];

            seating[type].second = seating[type].second?.map((seat) =>
              Array.isArray(seat)
                ? seat.map((seats) =>
                    seats.seatNumber === booking.seatNumber
                      ? { ...seats, booked: { ...booking } }
                      : seats
                  )
                : seat.seatNumber === booking.seatNumber
                ? { ...seat, booked: { ...booking } }
                : seat
            ) as SeatingDetails[];

            const updatedBusLayout = { ...currentBus, seatLayout: seating };
            const currentIndex = parsedBusDetails.findIndex(
              (bus: BusDetailsType) => bus.id === busId
            );
            parsedBusDetails[currentIndex] = updatedBusLayout;

            localStorage.setItem(
              "busDetails",
              JSON.stringify(parsedBusDetails)
            );
          });
          return state;
        }
        return state;

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
