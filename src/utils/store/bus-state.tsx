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
    const busdetails = localStorage.getItem("busDetails");
    if (busdetails) {
      setBusdetails(JSON.parse(busdetails));
    } else {
      const bus = localStorage.setItem(
        "busDetails",
        JSON.stringify(mockBusDetails)
      );
      setBusdetails(mockBusDetails as any);
    }
  }, []);
  return (
    <BusContext.Provider value={{ busDetails }}>{children}</BusContext.Provider>
  );
};

export default BusContextProvider;
