import React from "react";
import { SeatingDetails, SeatingType } from "../utils/types";

interface BusSeatProps {
  data: SeatingDetails;
}
const BusSeat = ({ data }: BusSeatProps) => {
  const isBooked = !!data.booked;

  return (
    <div className={`${""} border-2  rounded w-12 sm:w-20 py-2`}>
      <div className="flex justify-between px ">
        <div className="flex-1 text-center font-semibold text-xs sm:text-lg rotate-90 sm:rotate-0">
          {data.seatNumber}
          {data.type == SeatingType.LOWER ? "L" : "U"}
        </div>
        <div className="w-[10px]  border-2  mr-2"></div>
      </div>
    </div>
  );
};

export default BusSeat;
