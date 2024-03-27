import { ArrowRight, Bus } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { generateSeats } from "../../utils/helpers/generate-seats";
import { useSeatState } from "../../utils/store/seat-state";
import { BusDetailsType, ReducerActionType } from "../../utils/types";
import BusTypeDropdown from "../dropdown-bus-type";
import { getSeatCount } from "../../utils/helpers/get-seat-count";

const BusBooking = () => {
  const [busDetails, setBusdetails] = useState<BusDetailsType | undefined>(
    undefined
  );
  const [isBooking, setIsBooking] = useState<boolean>(false);
  const [bookingForm, setBookingForm] = useState<{
    [key: number]: {
      firstname: string;
      lastname: string;
      email: string;
      seatNumber?: number;
      date?: Date;
    };
  }>({});

  const seatsLeft =
    busDetails?.totalSeats! - getSeatCount(busDetails?.id!) ?? null;

  // @ts-ignore
  const { dispatch, seatState, selectedSeats } = useSeatState();

  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const busItems = [
    { label: "Upper", href: `/booking/${id}?type=upper` },
    { label: "Lower", href: `/booking/${id}?type=lower` },
    { label: "Clear", href: `/booking/${id}` },
  ];

  useEffect(() => {
    const busses = localStorage.getItem("busDetails");
    if (busses) {
      const parsedBusses: BusDetailsType[] = JSON.parse(busses);
      const bus = parsedBusses.find((b) => b.id == id);
      setBusdetails(bus);
      dispatch({
        type: ReducerActionType.SET_SEAT,
        payload: { seatLayout: bus!.seatLayout },
      });
    }
  }, []);

  return (
    <>
      {isBooking && (
        <div className="fixed backdrop-blur-md top-0 left-0 right-0 bottom-0 z-20 flex justify-center">
          <div className="relative w-full md:w-[600px] bg-slate-50 border-x-2 md:border-slate-500 z-30 overflow-auto">
            <div className="flex justify-end p-6">
              <button className="font-bold" onClick={() => setIsBooking(false)}>
                Close
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-6 px-6 md:items-center ">
              {selectedSeats.map((seat: number) => (
                <div
                  key={seat}
                  className="bg-white border-2 px-4 py-2 rounded-lg"
                >
                  <h1 className="text-center font-bold text-lg">
                    Seat: {seat}
                  </h1>
                  <div className="flex flex-col gap-3 mt-3">
                    <div className="flex flex-col">
                      <label htmlFor="fname">Firstname</label>
                      <input
                        type="text"
                        id="fname"
                        placeholder="Name"
                        className="px-2 py-1 border rounded"
                        value={bookingForm[seat]?.firstname || ""}
                        onChange={(e) => {
                          e.preventDefault();
                          const newName = e.target.value;
                          setBookingForm((prevForms) => ({
                            ...prevForms,
                            [seat]: { ...prevForms[seat], firstname: newName },
                          }));
                        }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="fname">Firstname</label>
                      <input
                        type="text"
                        id="lname"
                        placeholder="Lastname"
                        className="px-2 py-1 border rounded"
                        value={bookingForm[seat]?.lastname || ""}
                        onChange={(e) => {
                          e.preventDefault();
                          const newName = e.target.value;
                          setBookingForm((prevForms) => ({
                            ...prevForms,
                            [seat]: { ...prevForms[seat], lastname: newName },
                          }));
                        }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="fname">Firstname</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        className="px-2 py-1 border rounded"
                        value={bookingForm[seat]?.email || ""}
                        onChange={(e) => {
                          e.preventDefault();
                          const newEmail = e.target.value;
                          setBookingForm((prevForms) => ({
                            ...prevForms,
                            [seat]: { ...prevForms[seat], email: newEmail },
                          }));
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}

              <div className="mx-auto">
                <button
                  className="custom-red px-3 py-2 rounded-2xl text-white font-semibold"
                  onClick={() => {
                    const details = Object.values(bookingForm).map(
                      (obj, index) => {
                        const seatNumber = parseInt(
                          Object.keys(bookingForm)[index]
                        );
                        return {
                          ...obj,
                          date: new Date(),
                          seatNumber,
                          busId: id,
                        };
                      }
                    );
                    dispatch({
                      type: ReducerActionType.BOOK_TICKETS,
                      payload: details,
                      busId: id,
                    });

                    setIsBooking(false);
                    alert(
                      `Tickets booked successfully for Seats: ${selectedSeats
                        .map((seat: number, index: number) => {
                          return index !== selectedSeats.length - 1
                            ? seat + ", "
                            : seat;
                        })
                        .join("")}`
                    );
                    window.location.reload();
                  }}
                  disabled={Object.values(bookingForm).some(
                    (form) => !form.firstname || !form.lastname || !form.email
                  )}
                >
                  Book tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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

      <section className="bg-slate-100 px-6 md:px-12 py-2 rounded-lg flex flex-col md:flex-row md:justify-between md:items-center mt-4 min-h-32 md:min-h-20">
        <div className="order-2 md:order-1 mt-4 md:mt-0">
          <h4 className="font-semibold">Selected seats</h4>
          <ul className="flex gap-2">
            {selectedSeats.length === 0 && (
              <p className="text-xs text-slate-500">
                Select atleast 1 seat to proceed
              </p>
            )}
            {selectedSeats.map((seat: number, index: number) => (
              <li key={seat} className="font-bold">
                {seat}
                {index !== selectedSeats.length - 1 && ","}
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex items-center gap-4 order-1 md:order-2">
          <li>
            <div className="h-6 w-6 border-green-500 bg-green-400/50 rounded"></div>
            Selected
          </li>
          <li>
            <div className="h-6 w-6 bg-white border rounded"></div>Available
          </li>
          <li>
            <div className="h-6 w-6 border bg-slate-300 rounded"></div>
            N/A
          </li>
        </ul>
      </section>

      <section className="flex justify-between mt-4 items-center">
        <div>
          <h1 className="text-2xl md:text-3xl ">Select seats</h1>
          {seatsLeft && busDetails && (
            <div className="flex  items-center  gap-2">
              <h3
                className={`text-xl font-bold ${
                  seatsLeft > 20
                    ? "text-green-600"
                    : seatsLeft > 15
                    ? "text-orange-600"
                    : "text-red-600"
                }`}
              >
                {seatsLeft}
              </h3>
              <span className="text-sm">/{busDetails.totalSeats} left</span>
            </div>
          )}
        </div>
        <button
          className="custom-red px-3 py-1 rounded-lg text-white font-bold h-10"
          disabled={selectedSeats.length == 0}
          onClick={() => setIsBooking(true)}
        >
          Book
        </button>
      </section>

      {/* Bus layout */}
      <section className="flex flex-wrap justify-center items-center min-h-[80vh] sm:min-h-[55vh] px-4 -rotate-90 sm:rotate-0">
        {seatState &&
          (type === "lower" ? (
            <div>
              <div>{generateSeats(seatState.lower.first, busDetails?.id!)}</div>
              <div className="mt-10 flex gap-6">
                {generateSeats(seatState.lower.second, busDetails?.id!)}
              </div>
            </div>
          ) : type === "upper" ? (
            <div>
              <div>{generateSeats(seatState.upper.first, busDetails?.id!)}</div>
              <div className="mt-10 flex gap-6">
                {generateSeats(seatState.upper.second, busDetails?.id!)}
              </div>
            </div>
          ) : (
            <div className="rotate-90 sm:rotate-0 flex flex-col items-center text-slate-400">
              <Bus className="h-16 w-16" />
              <h1 className="text-4xl font-semibold  italic">
                Please select a deck
              </h1>
            </div>
          ))}
      </section>
    </>
  );
};

export default BusBooking;
