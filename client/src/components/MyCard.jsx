import React, { useEffect, useState } from "react";
import { FaEdit, FaInfoCircle, FaTrash } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { useNavigate } from "react-router";
import { format } from "date-fns";

function MyCard({ task, handleDelete }) {
  const { _id, taskName, catagory, bidPrice, deadline, bids } = task;
  const navigate = useNavigate();
  const [biders, setBiders] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/users`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((user) => bids.includes(user.email));
        setBiders(filtered);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, [bids]);

  const modalId = `bid_modal_${_id}`;

  return (
    <tr>
      <td className="flex items-start">
        <div className="rounded-md bg-gray-100 p-[2px] md:p-2 flex flex-col justify-center items-center">
          <p className="text-base md:text-2xl font-semibold">
            {format(new Date(deadline), "dd")}
          </p>
          <p className="text-xs md:text-base">
            {format(new Date(deadline), "MMM yyyy")}
          </p>
        </div>
      </td>

      <td>
        <h1 className="font-semibold lg:text-xl line-clamp-1">{taskName}</h1>
        <div className="hidden md:flex flex-wrap items-center gap-3 mt-2">
          <p className="text-sm opacity-60 border-[2px] border-gray-200 py-1 px-3 rounded-full">
            {catagory}
          </p>
          <p className="text-sm opacity-60 border-[2px] border-gray-200 py-1 px-3 rounded-full">
            Bid Price: <span className="font-semibold">{bidPrice}$</span>
          </p>
        </div>
      </td>

      <td className="flex flex-row items-start gap-3">
        <div
          data-tooltip-id="my-tooltip"
          data-tooltip-content="View Full Details"
          className="w-10 h-10 text-xl cursor-pointer flex justify-center items-center bg-blue-200 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-400"
          onClick={() => navigate(`/details/${_id}`)}
        >
          <FaInfoCircle />
        </div>
        <div
          data-tooltip-id="my-tooltip"
          data-tooltip-content="View All Bidders"
          className="w-10 h-10 text-xl cursor-pointer flex justify-center items-center bg-amber-200 text-amber-600 rounded-md hover:bg-amber-500 hover:text-white transition-all duration-400 relative"
          onClick={() => document.getElementById(modalId).showModal()}
        >
          <span className="absolute -top-2 -right-2 text-xs bg-red-200 h-6 w-6 flex justify-center items-center rounded-full border-2 border-white">
            {bids.length}
          </span>
          <BiDollarCircle />
        </div>
        <dialog id={modalId} className="modal">
          <div className="modal-box">
            <h1 className="font-bold text-center mb-4 text-xl">All Bidders</h1>
            <div className="flex flex-col gap-3">
              {biders.length === 0 ? (
                <p className="text-center opacity-60">No bidders yet.</p>
              ) : (
                biders.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center gap-3 p-2 border-gray-200 border-[2px] rounded-md cursor-pointer"
                    onClick={() => navigate(`/user/${item.email}`)}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Go to Profile"
                  >
                    <img
                      className="w-12 h-12 object-cover rounded-full shadow-md"
                      src={
                        item.photoUrl ||
                        "https://cdn0.iconfinder.com/data/icons/app-user-interface-5/48/user-512.png"
                      }
                      alt={item.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://cdn0.iconfinder.com/data/icons/app-user-interface-5/48/user-512.png";
                      }}
                    />
                    <div>
                      <h1 className="font-semibold">{item.name}</h1>
                      <p className="text-sm opacity-60">{item.email}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        <div
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Edit The Task"
          className="w-10 h-10 text-xl cursor-pointer flex justify-center items-center bg-teal-200 text-teal-600 rounded-md hover:bg-teal-500 hover:text-white transition-all duration-400"
          onClick={() => navigate(`/dashboard/update-task/${_id}`)}
        >
          <FaEdit />
        </div>
        <div
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Delete Your Task"
          className="w-10 h-10 text-xl cursor-pointer flex justify-center items-center bg-red-200 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition-all duration-400"
          onClick={() => handleDelete(_id)}
        >
          <FaTrash />
        </div>
      </td>
    </tr>
  );
}

export default MyCard;
