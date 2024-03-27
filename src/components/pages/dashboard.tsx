import { useEffect, useState } from "react";
import { getAllPassengerDetails } from "../../utils/helpers/get-passengers";
import { PassengersType } from "../../utils/types";
import { Ghost } from "lucide-react";
import PassengerCard from "../passenger-card";

const Dashboard = () => {
  const [passengers, setPassengers] = useState<PassengersType[]>([]);
  console.log(passengers);

  useEffect(() => {
    const passengerDetails = getAllPassengerDetails();
    setPassengers(passengerDetails);
  }, []);

  // console.log(passengers);
  
  return (
    <div>
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
          <div className="flex flex-wrap gap-4">
            {passengers.map((passenger, index) => (
              <PassengerCard data={passenger} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
