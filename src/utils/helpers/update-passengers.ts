import {
  BusDetailsType,
  PassengersType,
  SeatingDetails,
  SeatLayoutType,
} from "../types";

export const updatePassengers = (details: PassengersType): boolean => {
  const busDetails = localStorage.getItem("busDetails");
  if (busDetails) {
    const parsedBusDetails: BusDetailsType[] = JSON.parse(busDetails);
    const updatedBusDetails = parsedBusDetails.map((bus) => {
      if (bus.id === details.busId) {
        const updatedSeatLayout = { ...bus.seatLayout };
        updatedSeatLayout[details.seatType].first = updatedSeatLayout[
          details.seatType
        ]?.first.map((seats) =>
          Array.isArray(seats)
            ? seats.map((seat) =>
                seat.seatNumber === details.seatNumber && seat.booked
                  ? {
                      ...seat,
                      booked: {
                        ...seat.booked,
                        firstname: details.firstname,
                        lastname: details.lastname,
                        email: details.email,
                      },
                    }
                  : seat
              )
            : seats.seatNumber === details.seatNumber && seats.booked
            ? {
                ...seats,
                booked: {
                  ...seats.booked,
                  firstname: details.firstname,
                  lastname: details.lastname,
                  email: details.email,
                },
              }
            : seats
        ) as SeatingDetails[];

        updatedSeatLayout[details.seatType].second = updatedSeatLayout[
          details.seatType
        ]?.second.map((seats) =>
          Array.isArray(seats)
            ? seats.map((seat) =>
                seat.seatNumber === details.seatNumber && seat.booked
                  ? {
                      ...seat,
                      booked: {
                        ...seat.booked,
                        firstname: details.firstname,
                        lastname: details.lastname,
                        email: details.email,
                      },
                    }
                  : seat
              )
            : seats.seatNumber === details.seatNumber && seats.booked
            ? {
                ...seats,
                booked: {
                  ...seats.booked,
                  firstname: details.firstname,
                  lastname: details.lastname,
                  email: details.email,
                },
              }
            : seats
        ) as SeatingDetails[];

        return { ...bus, seatLayout: updatedSeatLayout };
      }
      return bus;
    });

    localStorage.setItem("busDetails", JSON.stringify(updatedBusDetails));
    console.log("UPDATE_SUCCESSFULL");

    return true;
  }
  console.log("UPDATE_FAILED");

  return false;
};
