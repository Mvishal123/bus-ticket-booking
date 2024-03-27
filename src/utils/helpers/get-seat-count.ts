import { BusDetailsType, SeatingDetails, SeatLayoutType } from "../types";

export const getSeatCount = (busId: string): number => {
  const busDetails = localStorage.getItem("busDetails");
  let count = 0;
  if (busDetails) {
    const parsedBusDetails = JSON.parse(busDetails);

    const currentBus: BusDetailsType = parsedBusDetails.find(
      (bus: BusDetailsType) => bus.id == busId
    );

    if (currentBus) {
      currentBus.seatLayout.lower.first?.forEach((seats) => {
        if (Array.isArray(seats)) {
          seats.forEach((seat: SeatingDetails) => {
            if (seat.booked) {
              count++;
            }
          });
        } else {
          if (seats.booked) {
            count++;
          }
        }
      });
      currentBus.seatLayout.lower.second?.forEach((seats) => {
        if (Array.isArray(seats)) {
          seats.forEach((seat: SeatingDetails) => {
            if (seat.booked) {
              count++;
            }
          });
        } else {
          if (seats.booked) {
            count++;
          }
        }
      });
      currentBus.seatLayout.upper.first?.forEach((seats) => {
        if (Array.isArray(seats)) {
          seats.forEach((seat: SeatingDetails) => {
            if (seat.booked) {
              count++;
            }
          });
        } else {
          if (seats.booked?.email) {
            count++;
          }
        }
      });
      currentBus.seatLayout.upper.second?.forEach((seats) => {
        if (Array.isArray(seats)) {
          seats.forEach((seat: SeatingDetails) => {
            if (seat.booked) {
              count++;
            }
          });
        } else {
          if (seats.booked) {
            count++;
          }
        }
      });
    }
  }

  return count;
};
