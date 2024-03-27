import React, { useEffect, useState } from "react";
import { PassengersType } from "../utils/types";
import { ArrowRight, Pencil, Plus, Trash } from "lucide-react";
import { convertDate } from "../utils/helpers/convert-date";
import { updatePassengers } from "../utils/helpers/update-passengers";
import { deletePassenger } from "../utils/helpers/delete-passenger";

const PassengerCard = ({ data }: { data: PassengersType }) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onCloseEdit = () => {
    setFormData({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
    });

    setIsEditable(false);
  };

  const onDelete = () => {
    const deleteStatus = deletePassenger(data);
    if (deleteStatus) {
      alert("Passenger removed sucessfully");
      window.location.reload();
    } else {
      alert("Something went wrong");
    }
  };

  const updateHandler = () => {
    const { firstname, lastname, email } = formData;
    const details = { ...data, firstname, lastname, email };
    console.log({ details });

    const update = updatePassengers(details);
    if (update) {
      alert("Passenger information edited successfully");
      window.location.reload();
    } else {
      alert("Something went wrong");
      onCloseEdit();
    }
  };

  return (
    <div className="min-w-[300px] border px-3 py-2 rounded">
      {isEditable && (
        <>
          <div className="border-b py-3 flex items-center justify-between">
            <h1 className="font-bold">Edit passenger details</h1>
            <button
              className=" border border-red-400 rounded bg-red-200/50"
              onClick={onCloseEdit}
            >
              <Plus className="rotate-45 h-4 w-4 text-red-500" />
            </button>
          </div>
          <form action="" className="space-y-2 mt-2">
            <div className="flex gap-1 items-center">
              <label htmlFor="firstname">Firstname:</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                className="border px-2 rounded"
              />
            </div>
            <div className="flex gap-1 items-center">
              <label htmlFor="lastname">Lastname:</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                className="border px-2 rounded"
              />
            </div>
            <div className="flex gap-8 items-center">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border px-2 rounded"
              />
            </div>
            <button
              className="bg-gradient-to-r from-pink-500 to-rose-500 px-2 font-semibold text-white rounded mt-1 w-full"
              onClick={updateHandler}
              type="button"
            >
              Save
            </button>
          </form>
        </>
      )}
      {!isEditable && (
        <>
          <div className="border-b flex justify-between items-center py-1">
            <div>
              <h1 className="font-semibold truncate">{data.busBrand}</h1>
              <div className="flex items-center gap-2">
                <p className="text-sm">{data.from}</p>
                <ArrowRight
                  className="h-4 w-4 text-slate-600"
                  strokeWidth={1}
                />
                <p className="text-sm truncate">{data.to}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="p-2 border rounded bg-slate-100 hover:border-slate-400/50 text-slate-700/50 hover:text-slate-700"
                onClick={() => setIsEditable(true)}
              >
                <Pencil className="w-4 h-4 " />
              </button>
              <button
                className="p-2 border border-red-300/50 hover:border-red-300 rounded bg-red-100 hover:text-red-600 text-red-700/50"
                onClick={onDelete}
              >
                <Trash className="w-4 h-4 " />
              </button>
            </div>
          </div>

          <div className="mt-2">
            <h1 className="font-semibold">Passenger details</h1>
            <ul className="text-sm space-y-1">
              <li className="flex items-center">
                <h2 className="font-semibold">Name</h2>: {data.firstname}{" "}
                {data.lastname}
              </li>
              <li className="flex items-center">
                <h2 className="font-semibold">Email</h2>: {data.email}
              </li>
              <li className="flex items-center">
                <h2 className="font-semibold">Seat number</h2>:{data.seatNumber}
                {data.seatType === "lower" ? "L" : "H"}
              </li>
              <li className="flex items-center">
                <h2 className="font-semibold">Date of booking</h2>:{" "}
                {convertDate(data.date)}
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default PassengerCard;
