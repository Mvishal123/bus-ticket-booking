import { selectedSeatType } from "./store/seat-state";

export type HeaderItems = {
  label: string;
  href: string;
};

export interface SeatLayoutType {
  lower: {
    first: SeatingDetails[];
    second: SeatingDetails[];
  };
  upper: {
    first: SeatingDetails[];
    second: SeatingDetails[];
  };
}

export interface BusDetailsType {
  id: string;
  from: string;
  to: string;
  busBrand: string;
  duration: string;
  pickup: string;
  arrival: string;
  totalSeats: number;
  seatsLeft: number;
  busType: string;
  ratings: number;
  startTime: string;
  arrivalTime: string;
  price: string;
  seatLayout: SeatLayoutType;
}

export interface SeatingDetails {
  id: string;
  type: "lower" | "upper";
  seatNumber: number;
  booked?: CustomerDetails;
  selected?: boolean;
}

export interface CustomerDetails {
  firstname: string;
  lastname: string;
  email: string;
  date: Date;
  seatNumber: number;
  busId: string;
}

// Seat layout
export enum ReducerActionType {
  SELECT_SEAT = "SELECT_SEAT",
  SET_SEAT = "SET_SEAT",
  TOGGLE_SELECT = "TOGGLE_SELECT",
  BOOK_TICKETS = "BOOK_TICKETS",
}

export type bookingDetails = {
  firstname: string;
  lastname: string;
  email: string;
  date: Date;
  seatNumber: number;
  busId: string;
};

export type ReducerPayload =
  | { seatNumber: number }
  | { seatLayout: SeatLayoutType }
  | selectedSeatType
  | bookingDetails[];

export type ReducerAction = {
  type: ReducerActionType;
  payload: ReducerPayload;
  busId?: string;
};

export type PassengersType = {
  busBrand: string;
  date: Date;
  email: string;
  firstname: string;
  from: string;
  lastname: string;
  seatNumber: number;
  to: string;
};
