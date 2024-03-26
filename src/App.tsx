import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Booking from "./components/pages/booking";
import Landing from "./components/pages/landing";
import BusBooking from "./components/pages/bus-booking";

const App = () => {

  return (
    <div className="">
      <Header />
      <div className="my-6 px-6 md:px-12">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking/:id" element={<BusBooking />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
