import { useEffect, useState } from "react";
import { getAllPassengerDetails } from "../../utils/helpers/get-passengers";
import { PassengersType } from "../../utils/types";
import { Ghost } from "lucide-react";
import PassengerCard from "../passenger-card";

const Dashboard = () => {
  const [passengers, setPassengers] = useState<PassengersType[]>([]);

  useEffect(() => {
    const passengerDetails = getAllPassengerDetails();
    setPassengers(passengerDetails);
  }, []);

  return (
    <>
      <div>
        <h1 className="text-2xl md:text-4xl font-bold">Admin dashboard</h1>
      </div>
      <div className="mt-6">
        {passengers.length === 0 && (
          <div className="flex flex-col justify-center items-center w-full h-full mt-[10%] text-slate-400">
            <Ghost className="w-10 h-10" />
            <p className="text-lg">No passengers</p>
          </div>
        )}

        {passengers.length > 0 && (
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            {passengers.map((passenger, index) => (
              <PassengerCard data={passenger} key={index} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
