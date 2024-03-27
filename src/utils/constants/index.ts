import { HeaderItems } from "../types";

export const headerDropdownItems: HeaderItems[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Booking", href: "/booking" },
];

// Bus details
export const mockBusDetails = [
  {
    id: "1",
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
            { id: 1, type: "lower", seatNumber: 1 },
            { id: 2, type: "lower", seatNumber: 2 },
            { id: 3, type: "lower", seatNumber: 3 },
            { id: 4, type: "lower", seatNumber: 4 },
            { id: 5, type: "lower", seatNumber: 5 },
            { id: 6, type: "lower", seatNumber: 6 },
          ],
          [
            { id: 7, type: "lower", seatNumber: 7 },
            { id: 8, type: "lower", seatNumber: 8 },
            {
              id: 9,
              type: "lower",
              seatNumber: 9,
              booked: {
                firstname: "Vaibhav",
                lastname: "M",
                email: "vaibhav@gmail.com",
                date: new Date(),
                seatNumber: 9,
              },
            },
            { id: 10, type: "lower", seatNumber: 10 },
            { id: 11, type: "lower", seatNumber: 11 },
            { id: 12, type: "lower", seatNumber: 12 },
          ],
        ],
        second: [
          [
            { id: 13, type: "lower", seatNumber: 13 },
            { id: 14, type: "lower", seatNumber: 14 },
            {
              id: 15,
              type: "lower",
              seatNumber: 15,
              booked: {
                firstname: "Vishal",
                lastname: "M",
                email: "vishal@gmail.com",
                date: new Date(),
                seatNumber: 15,
              },
            },
            { id: 16, type: "lower", seatNumber: 16 },
            { id: 17, type: "lower", seatNumber: 17 },
            { id: 18, type: "lower", seatNumber: 18 },
            {
              id: 19,
              type: "lower",
              seatNumber: 19,
              booked: {
                firstname: "John",
                lastname: "Wick",
                email: "john.wick@gmail.com",
                date: new Date(),
                seatNumber: 19,
              },
            },
          ],
        ],
      },
      upper: {
        first: [
          [
            { id: 20, type: "upper", seatNumber: 20 },
            { id: 21, type: "upper", seatNumber: 21 },
            { id: 22, type: "upper", seatNumber: 22 },
            { id: 23, type: "upper", seatNumber: 23 },
            { id: 24, type: "upper", seatNumber: 24 },
            { id: 25, type: "upper", seatNumber: 25 },
            { id: 26, type: "upper", seatNumber: 26 },
          ],
          [
            { id: 27, type: "upper", seatNumber: 27 },
            { id: 28, type: "upper", seatNumber: 28 },
            { id: 29, type: "upper", seatNumber: 29 },
            { id: 30, type: "upper", seatNumber: 30 },
            { id: 31, type: "upper", seatNumber: 31 },
            { id: 32, type: "upper", seatNumber: 32 },
            { id: 33, type: "upper", seatNumber: 33 },
          ],
        ],
        second: [
          { id: 34, type: "upper", seatNumber: 34 },
          { id: 35, type: "upper", seatNumber: 35 },
          { id: 36, type: "upper", seatNumber: 36 },
          { id: 37, type: "upper", seatNumber: 37 },
          { id: 38, type: "upper", seatNumber: 38 },
          { id: 39, type: "upper", seatNumber: 39 },
          { id: 40, type: "upper", seatNumber: 40 },
        ],
      },
    },
  },
];
