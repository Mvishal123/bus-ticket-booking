import React, { createContext, useEffect, useState } from "react";
import { mockBusDetails } from "../constants";
import { BusDetailsType } from "../types";

type BusContextType = {
  busDetails: BusDetailsType[];
};

export const BusContext = createContext<BusContextType>({ busDetails: [] });

const BusContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [busDetails, setBusdetails] = useState<BusDetailsType[]>([]);

  useEffect(() => {
    if (busDetails.length === 0) {
      localStorage.setItem("busDetails", JSON.stringify(mockBusDetails));
      const busses = JSON.parse(localStorage.getItem("busDetails")!);
      setBusdetails(busses);
    }
  }, [busDetails]);
  return (
    <BusContext.Provider value={{ busDetails }}>{children}</BusContext.Provider>
  );
};

export default BusContextProvider;
