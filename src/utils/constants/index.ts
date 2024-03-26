import { HeaderItems, SeatingType } from "../types";

export const headerDropdownItems: HeaderItems[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Booking", href: "/booking" },
];

// Bus details
export const mockBusDetails = [
  {
    id: 1,
    from: "Bangalore",
    to: "Chennai",
    busBrand: "ExpressTravel",
    duration: "6 hours",
    pickup: "Majestic Bus Stand, Bangalore",
    arrival: "Koyambedu Bus Terminal, Chennai",
    totalSeats: 40,
    seatsLeft: 30,
    busType: "A/C Sleeper (2+1)",
    ratings: 4.5,
    startTime: "10:00 PM",
    arrivalTime: "4:00 AM",
    price: "1499",
    seatLayout: {
      lower: {
        first: [
          [
            { id: 1, type: SeatingType.LOWER, seatNumber: 1 },
            { id: 2, type: SeatingType.LOWER, seatNumber: 2 },
            { id: 3, type: SeatingType.LOWER, seatNumber: 3 },
            { id: 4, type: SeatingType.LOWER, seatNumber: 4 },
            { id: 5, type: SeatingType.LOWER, seatNumber: 5 },
            { id: 6, type: SeatingType.LOWER, seatNumber: 6 },
          ],
          [
            { id: 7, type: SeatingType.LOWER, seatNumber: 7 },
            { id: 8, type: SeatingType.LOWER, seatNumber: 8 },
            {
              id: 9,
              type: SeatingType.LOWER,
              seatNumber: 9,
              booked: "customer1",
            },
            { id: 10, type: SeatingType.LOWER, seatNumber: 10 },
            { id: 11, type: SeatingType.LOWER, seatNumber: 11 },
            { id: 12, type: SeatingType.LOWER, seatNumber: 12 },
          ],
        ],

        second: [
          [
            { id: 13, type: SeatingType.LOWER, seatNumber: 13 },
            { id: 14, type: SeatingType.LOWER, seatNumber: 14 },
            {
              id: 15,
              type: SeatingType.LOWER,
              seatNumber: 15,
              booked: "customer1",
            },
            { id: 16, type: SeatingType.LOWER, seatNumber: 16 },
            { id: 17, type: SeatingType.LOWER, seatNumber: 17 },
            { id: 18, type: SeatingType.LOWER, seatNumber: 18 },
            {
              id: 19,
              type: SeatingType.LOWER,
              seatNumber: 19,
              booked: "customer2",
            },
          ],
        ],
      },
      upper: {
        first: [
          [
            { id: 20, type: SeatingType.UPPER, seatNumber: 20 },
            { id: 21, type: SeatingType.UPPER, seatNumber: 21 },
            { id: 22, type: SeatingType.UPPER, seatNumber: 22 },
            { id: 23, type: SeatingType.UPPER, seatNumber: 23 },
            { id: 24, type: SeatingType.UPPER, seatNumber: 24 },
            { id: 25, type: SeatingType.UPPER, seatNumber: 25 },
            { id: 26, type: SeatingType.UPPER, seatNumber: 26 },
          ],
          [
            { id: 27, type: SeatingType.UPPER, seatNumber: 27 },
            { id: 28, type: SeatingType.UPPER, seatNumber: 28 },
            { id: 29, type: SeatingType.UPPER, seatNumber: 29 },
            { id: 30, type: SeatingType.UPPER, seatNumber: 30 },
            { id: 31, type: SeatingType.UPPER, seatNumber: 31 },
            { id: 32, type: SeatingType.UPPER, seatNumber: 32 },
            { id: 33, type: SeatingType.UPPER, seatNumber: 33 },
          ],
        ],

        second: [
          { id: 34, type: SeatingType.UPPER, seatNumber: 34 },
          { id: 35, type: SeatingType.UPPER, seatNumber: 35 },
          { id: 36, type: SeatingType.UPPER, seatNumber: 36 },
          { id: 37, type: SeatingType.UPPER, seatNumber: 37 },
          { id: 38, type: SeatingType.UPPER, seatNumber: 38 },
          { id: 39, type: SeatingType.UPPER, seatNumber: 39 },
          { id: 40, type: SeatingType.UPPER, seatNumber: 40 },
        ],
      },
    },
  },
];
