export type HeaderItems = {
  label: string;
  href: string;
};

export interface BusDetails {
  id: number;
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
}
