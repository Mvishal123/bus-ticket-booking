import { busImage } from "../../assets";

const Landing = () => {
  return (
    <div className="bg-slate-100 h-[50vh] rounded-xl">
      <div className="h-full grid grid-cols-1 md:grid-cols-2 ">
        {/* COL 1 */}
        <div className="order-2 md:order-1">
          <img
            src={busImage}
            alt=""
            height={1697}
            width={2400}
            className="object-cover object-center h-full w-full z-10 overflow-visible"
          />
        </div>

        {/* COL 2 */}
        <div className="flex justify-center h-full items-center order-1 md:order-2">
          <h1 className="max-w-[90%] text-4xl font-bold tracking-tight">
            Board the Future: Seamless Bus Ticket <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Booking</span>{" "}
            Experience
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
