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

export enum SeatingType {
  UPPER = "UPPER",
  LOWER = "LOWER",
}
export interface SeatingDetails {
  id: string;
  type: SeatingType;
  seatNumber: number;
  booked?: CustomerDetails;
  selected: boolean;
}

export interface CustomerDetails {
  id: string;
  firstName: string;
  lastName: string;
  tickets?: { busId: string; seatNumber: number }[];
}


// Seat layout 
export enum ReducerActionType {
  SELECT_SEAT = "SELECT_SEAT",
  SET_SEAT = "SET_SEAT",
  TOGGLE_SELECT = "TOGGLE_SELECT", 
}

export type ReducerPayload = { seatNumber: number } | { seatLayout: SeatLayoutType };

export type ReducerAction = {
  type: ReducerActionType;
  payload: ReducerPayload;
  busId?: string
}