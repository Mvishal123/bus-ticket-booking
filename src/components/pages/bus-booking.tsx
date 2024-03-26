import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { BusDetailsType, SeatLayoutType } from "../../utils/types";
import { ArrowRight, ArrowRightFromLine } from "lucide-react";
import DropdownMenu from "../dropdown-menu";
import BusTypeDropdown from "../dropdown-bus-type";

const BusBooking = () => {
  const [busDetails, setBusdetails] = useState<BusDetailsType | undefined>(
    undefined
  );
  const [seatLayout, setSeatLayout] = useState<SeatLayoutType | undefined>();

  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const busItems = [
    { label: "Upper", href: `/booking/${id}?type=upper` },
    { label: "Lower", href: `/booking/${id}?type=lower` },
    { label: "Clear", href: `/booking/${id}` },
  ];

  console.log(searchParams.get("type"));

  useEffect(() => {
    const busses = localStorage.getItem("busDetails");
    if (busses) {
      const parsedBusses: BusDetailsType[] = JSON.parse(busses);
      const bus = parsedBusses.find((b) => b.id == id);
      setBusdetails(bus);
      setSeatLayout(bus?.seatLayout);
    }
  }, []);

  console.log(seatLayout);
  

  return (
    <div>
      <section className="bg-slate-100 px-6 md:px-12 py-2 rounded-lg flex justify-between items-center">
        {/* sec1 */}
        <div className="w-40 md:w-56">
          <h1 className="font-bold text-xl">{busDetails?.busBrand}</h1>
          <div className="flex gap-1 items-center text-slate-600 mt-2">
            <div>
              <h1 className="font-semibold">{busDetails?.from}</h1>
              <h2 className="text-xs md:text-sm">{busDetails?.startTime}</h2>
            </div>

            <ArrowRight className="h-4 w-4 flex-1" />

            <div>
              <h1 className="font-semibold">{busDetails?.to}</h1>
              <h2 className="text-xs md:text-sm">{busDetails?.arrivalTime}</h2>
            </div>
          </div>
        </div>

        {/* sec2 */}
        <div>
          <BusTypeDropdown items={busItems} />
        </div>
      </section>
    </div>
  );
};

export default BusBooking;
