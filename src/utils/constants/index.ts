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
            { id: 1, type: SeatingType.LOWER, seatNumber: 1, selected: false },
            { id: 2, type: SeatingType.LOWER, seatNumber: 2, selected: false },
            { id: 3, type: SeatingType.LOWER, seatNumber: 3, selected: false },
            { id: 4, type: SeatingType.LOWER, seatNumber: 4, selected: false },
            { id: 5, type: SeatingType.LOWER, seatNumber: 5, selected: false },
            { id: 6, type: SeatingType.LOWER, seatNumber: 6, selected: false },
          ],
          [
            { id: 7, type: SeatingType.LOWER, seatNumber: 7, selected: false },
            { id: 8, type: SeatingType.LOWER, seatNumber: 8, selected: false },
            {
              id: 9,
              type: SeatingType.LOWER,
              seatNumber: 9,
              booked: "customer1",
              selected: false,
            },
            {
              id: 10,
              type: SeatingType.LOWER,
              seatNumber: 10,
              selected: false,
            },
            {
              id: 11,
              type: SeatingType.LOWER,
              seatNumber: 11,
              selected: false,
            },
            {
              id: 12,
              type: SeatingType.LOWER,
              seatNumber: 12,
              selected: false,
            },
          ],
        ],

        second: [
          [
            {
              id: 13,
              type: SeatingType.LOWER,
              seatNumber: 13,
              selected: false,
            },
            {
              id: 14,
              type: SeatingType.LOWER,
              seatNumber: 14,
              selected: false,
            },
            {
              id: 15,
              type: SeatingType.LOWER,
              seatNumber: 15,
              booked: "customer1",
              selected: false,
            },
            {
              id: 16,
              type: SeatingType.LOWER,
              seatNumber: 16,
              selected: false,
            },
            {
              id: 17,
              type: SeatingType.LOWER,
              seatNumber: 17,
              selected: false,
            },
            {
              id: 18,
              type: SeatingType.LOWER,
              seatNumber: 18,
              selected: false,
            },
            {
              id: 19,
              type: SeatingType.LOWER,
              seatNumber: 19,
              booked: "customer2",
              selected: false,
            },
          ],
        ],
      },
      upper: {
        first: [
          [
            {
              id: 20,
              type: SeatingType.UPPER,
              seatNumber: 20,
              selected: false,
            },
            {
              id: 21,
              type: SeatingType.UPPER,
              seatNumber: 21,
              selected: false,
            },
            {
              id: 22,
              type: SeatingType.UPPER,
              seatNumber: 22,
              selected: false,
            },
            {
              id: 23,
              type: SeatingType.UPPER,
              seatNumber: 23,
              selected: false,
            },
            {
              id: 24,
              type: SeatingType.UPPER,
              seatNumber: 24,
              selected: false,
            },
            {
              id: 25,
              type: SeatingType.UPPER,
              seatNumber: 25,
              selected: false,
            },
            {
              id: 26,
              type: SeatingType.UPPER,
              seatNumber: 26,
              selected: false,
            },
          ],
          [
            {
              id: 27,
              type: SeatingType.UPPER,
              seatNumber: 27,
              selected: false,
            },
            {
              id: 28,
              type: SeatingType.UPPER,
              seatNumber: 28,
              selected: false,
            },
            {
              id: 29,
              type: SeatingType.UPPER,
              seatNumber: 29,
              selected: false,
            },
            {
              id: 30,
              type: SeatingType.UPPER,
              seatNumber: 30,
              selected: false,
            },
            {
              id: 31,
              type: SeatingType.UPPER,
              seatNumber: 31,
              selected: false,
            },
            {
              id: 32,
              type: SeatingType.UPPER,
              seatNumber: 32,
              selected: false,
            },
            {
              id: 33,
              type: SeatingType.UPPER,
              seatNumber: 33,
              selected: false,
            },
          ],
        ],

        second: [
          { id: 34, type: SeatingType.UPPER, seatNumber: 34, selected: false },
          { id: 35, type: SeatingType.UPPER, seatNumber: 35, selected: false },
          { id: 36, type: SeatingType.UPPER, seatNumber: 36, selected: false },
          { id: 37, type: SeatingType.UPPER, seatNumber: 37, selected: false },
          { id: 38, type: SeatingType.UPPER, seatNumber: 38, selected: false },
          { id: 39, type: SeatingType.UPPER, seatNumber: 39, selected: false },
          { id: 40, type: SeatingType.UPPER, seatNumber: 40, selected: false },
        ],
      },
    },
  },
];
