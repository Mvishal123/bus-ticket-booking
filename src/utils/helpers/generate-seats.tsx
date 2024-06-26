import BusSeat from "../../components/bus-seat";
import { SeatingDetails } from "../types";

export const generateSeats = (
  seatsArr: SeatingDetails[] | SeatingDetails[][],
  busId: string
) =>
  seatsArr.map((seats, index) => (
    <div key={index} className="flex gap-6 my-2">
      {Array.isArray(seats) ? (
        seats.map((seat) => <BusSeat data={seat} key={seat.id} busId={busId} />)
      ) : (
        <BusSeat data={seats} key={seats.id} busId={busId} />
      )}
    </div>
  ));
