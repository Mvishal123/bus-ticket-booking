import { HeaderItems } from "../types";

export const headerDropdownItems: HeaderItems[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Booking", href: "/booking" },
];

// Bus details
export const mockBusDetails = {
  from: "Bangalore",
  to: "Chennai",
  busBrand: "ExpressTravel",
  duration: "6 hours",
  pickup: "Majestic Bus Stand, Bangalore",
  arrival: "Koyambedu Bus Terminal, Chennai",
  seatsLeft: 30,
  busType: "A/C Sleeper (2+1)",
  busNumber: 123,
  ratings: 4.5,
  startTime: "10:00 PM",
  arrivalTime: "4:00 AM",
  price: "1499"
};
