import React from "react";
import { FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Button from "../customs/Button";
import { useNavigate } from "react-router";

function TaskCard({ item }) {
  const { taskName, taskPhoto, catagory, bidPrice, deadline, profile } = item;
  const navigate = useNavigate();
  return (
    <div data-aos="zoom-in" className="flex flex-col justify-center items-center shadow-md rounded-lg border-primary/50 hover:border-primary border-2 p-2 gap-3">
      <div className="relative w-full">
        <span className="absolute top-2 right-2 text-sm bg-gradient-to-r from-[#10A4A0] to-[#02A17A] text-white px-2 py-1 rounded-md">
          {catagory}
        </span>

        <img
          className="bg-white w-full h-48 object-cover shadow-md rounded-lg"
          src={taskPhoto}
          onError={(e) => {
            e.target.onerror = "";
            e.target.src =
              "https://roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg";
          }}
          alt={taskName}
        />
      </div>
      <div
        onClick={() => navigate(`/user/${profile.email}`)}
        className="flex gap-3 w-full border-b-2 border-primary py-3 px-1 cursor-pointer"
      >
        <img
          className="bg-white w-10 h-10 object-cover rounded-full shadow-md"
          src={profile.photoUrl}
          onError={(e) => {
            e.target.onerror = "";
            e.target.src =
              "https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-photo-400-205577532.jpg";
          }}
          alt={profile.name}
        />
        <div className="text-sm">
          <p className="font-semibold text-primary flex items-center gap-1">
            <FaUser /> {profile.name}
          </p>
          <p className="text-primary opacity-60 flex items-center gap-1">
            <IoMail />
            {profile.email}
          </p>
        </div>
      </div>
      <h1 className="line-clamp-1 font-semibold" title={taskName}>
        {taskName}
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-sm text-primary border-primary border-2 py-1 px-2 rounded-full">
          Bid Price: <span className="font-semibold">{bidPrice}$</span>
        </p>
        <p className="text-sm text-primary border-primary border-2 py-1 px-2 rounded-full">
          Deadline: <span className="font-semibold">{deadline}</span>
        </p>
      </div>
      <div className="py-3 w-full">
        <Button
          label={<span className="text-base">View Details</span>}
          onClick={() => navigate(`/details/${item._id}`)}
        />
      </div>
    </div>
  );
}

export default TaskCard;
