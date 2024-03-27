import React, { createContext, useEffect, useState } from "react";
import { mockBusDetails } from "../constants";
import { BusDetailsType, SeatingDetails } from "../types";

type BusContextType = {
  busDetails: BusDetailsType[];
};

export const BusContext = createContext<BusContextType>({ busDetails: [] });

const BusContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [busDetails, setBusdetails] = useState<BusDetailsType[]>([]);

  useEffect(() => {
    const busdetails = localStorage.getItem("busDetails");
    if (busdetails) {
      setBusdetails(JSON.parse(busdetails));
    } else {
      localStorage.setItem("busDetails", JSON.stringify(mockBusDetails));
      // TODO: Fix this later
      setBusdetails(mockBusDetails as any);
    }
  }, []);
  return (
    <BusContext.Provider value={{ busDetails }}>{children}</BusContext.Provider>
  );
};

export default BusContextProvider;
