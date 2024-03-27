import {
    BusDetailsType,
    PassengersType,
    SeatingDetails
} from "../types";
  
  export const deletePassenger = (details: PassengersType): boolean => {
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
                        booked: null
                      }
                    : seat
                )
              : seats.seatNumber === details.seatNumber && seats.booked
              ? {
                  ...seats,
                  booked: null
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
                        booked: null
                      }
                    : seat
                )
              : seats.seatNumber === details.seatNumber && seats.booked
              ? {
                  ...seats,
                  booked: null
                }
              : seats
          ) as SeatingDetails[];
  
          return { ...bus, seatLayout: updatedSeatLayout };
        }
        return bus;
      });
  
      localStorage.setItem("busDetails", JSON.stringify(updatedBusDetails));
      console.log("DELETED_SUCCESSFULLY");
  
      return true;
    }
    console.log("DELETE_FAILED");
  
    return false;
  };
  