import { BusDetailsType, PassengersType } from "../types";

export const getAllPassengerDetails = (): PassengersType[] => {
  const busDetails = localStorage.getItem("busDetails");
  const passengers: PassengersType[] = [];
  if (busDetails) {
    const parsedBusDetails: BusDetailsType[] = JSON.parse(busDetails);

    parsedBusDetails.forEach((bus) => {
      const busDetails = {
        busBrand: bus.busBrand,
        from: bus.from,
        to: bus.to,
        busId: bus.id,
      };

      bus.seatLayout?.lower?.first?.forEach((seats) => {
        if (Array.isArray(seats)) {
          seats.forEach((seat) => {
            if (seat.booked) {
              const allDetails = {
                ...seat.booked,
                ...busDetails,
                seatType: seat.type,
              };
              passengers.push(allDetails);
            }
          });
        } else {
          if (seats.booked) {
            const allDetails = {
              ...seats.booked,
              ...busDetails,
              seatType: seats.type,
            };

            passengers.push(allDetails);
          }
        }
      });

      bus.seatLayout?.lower?.second?.forEach((seats) => {
        if (Array.isArray(seats)) {
          seats.forEach((seat) => {
            if (seat.booked) {
              const allDetails = {
                ...seat.booked,
                ...busDetails,
                seatType: seat.type,
              };
              passengers.push(allDetails);
            }
          });
        } else {
          if (seats.booked) {
            const allDetails = {
              ...seats.booked,
              ...busDetails,
              seatType: seats.type,
            };
            passengers.push(allDetails);
          }
        }
      });

      bus.seatLayout?.upper?.first?.forEach((seats) => {
        if (Array.isArray(seats)) {
          seats.forEach((seat) => {
            if (seat.booked) {
              const allDetails = {
                ...seat.booked,
                ...busDetails,
                seatType: seat.type,
              };
              passengers.push(allDetails);
            }
          });
        } else {
          if (seats.booked) {
            const allDetails = {
              ...seats.booked,
              ...busDetails,
              seatType: seats.type,
            };
            passengers.push(allDetails);
          }
        }
      });

      bus.seatLayout?.upper?.second?.forEach((seats) => {
        if (Array.isArray(seats)) {
          seats.forEach((seat) => {
            if (seat.booked) {
              const allDetails = {
                ...seat.booked,
                ...busDetails,
                seatType: seat.type,
              };
              passengers.push(allDetails);
            }
          });
        } else {
          if (seats.booked) {
            const allDetails = {
              ...seats.booked,
              ...busDetails,
              seatType: seats.type,
            };
            passengers.push(allDetails);
          }
        }
      });
    });
  }
  return passengers;
};
