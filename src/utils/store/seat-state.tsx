import {
  createContext,
  useReducer,
  Dispatch,
  PropsWithChildren,
  useContext,
} from "react";
import { ReducerAction, ReducerActionType, SeatLayoutType } from "../types";

const SeatContext = createContext<
  | {
      dispatch: Dispatch<ReducerAction>;
      seatState: SeatLayoutType;
    }
  | undefined
>(undefined);

const SeatContextProvider = ({ children }: PropsWithChildren) => {
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
    <SeatContext.Provider value={{ dispatch, seatState }}>
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
