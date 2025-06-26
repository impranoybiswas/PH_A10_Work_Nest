import React from "react";
import { FaInfoCircle, FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useNavigate } from "react-router";
import Button from "../customs/Button";

function BrowseCard({ task }) {
  const {
    taskName,
    taskPhoto,
    taskDescription,
    catagory,
    bidPrice,
    deadline,
    profile,
  } = task;
  const navigate = useNavigate();
  return (
    <div
    data-aos="zoom-in-right"
    className="flex flex-col md:flex-row gap-5 items-center w-full shadow-md rounded-xl border-primary/50 hover:border-primary border-2 overflow-hidden md:h-72 relative">
      <div className="w-full md:w-64 lg:w-100 h-full relative">
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t md:bg-gradient-to-l from-base-100 via-transparent to-transparent"></div>
        <img
          className="bg-white w-full h-64 md:h-full object-cover"
          src={taskPhoto}
          onError={(e) => {
            e.target.onerror = "";
            e.target.src =
              "https://roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg";
          }}
          alt={taskName}
        />
      </div>

      <div className="w-full md:h-64 flex flex-col justify-between ">
        <div className="flex flex-col gap-3 px-3 md:px-5 lg:px-8 w-full">
          <div className="flex items-center gap-3 w-full border-b-2 border-primary py-3 px-1 cursor-pointer">
            <img
              className="bg-white w-12 h-12 object-cover rounded-full shadow-md"
              src={profile.photoUrl}
              onError={(e) => {
                e.target.onerror = "";
                e.target.src =
                  "https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-photo-400-205577532.jpg";
              }}
              alt={profile.name}
            />
            <div className="flex-grow">
              <p className="font-semibold text-primary flex items-center gap-1">
                <FaUser /> {profile.name}
              </p>
              <p className="text-primary opacity-60 flex items-center gap-1">
                <IoMail />
                {profile.email}
              </p>
            </div>
            <div
              onClick={() => navigate(`/user/${profile.email}`)}
              className="flex items-center gap-1 text-sm text-primary border-primary border-2 py-1 px-1 md:px-4 rounded-full hover:bg-primary hover:text-white lg:mr-5 cursor-pointer"
            >
              <FaUser /> <span className="hidden lg:block">View Profile</span>
            </div>
          </div>
          <h1 className="font-semibold lg:text-xl ">{taskName}</h1>
          <p className="opacity-80 line-clamp-1">{taskDescription}</p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-sm text-primary border-primary border-2 py-1 px-4 rounded-full">
              <span className="font-semibold">{catagory}</span>
            </p>
            <p className="text-sm text-primary border-primary border-2 py-1 px-4 rounded-full">
              Budget: <span className="font-semibold">{bidPrice}$</span>
            </p>
            <p className="text-sm text-primary border-primary border-2 py-1 px-4 rounded-full">
              Deadline: <span className="font-semibold">{deadline}</span>
            </p>
          </div>
        </div>
        <div className="w-11/12 md:w-64 mx-auto md:mx-0 md:ml-auto md:mr-6 my-3 md:my-0 opacity-80 hover:opacity-100">
          <Button
            label={
              <div className="flex items-center justify-center gap-2 mx-4">
                <FaInfoCircle /> <span>View Details</span>
              </div>
            }
            onClick={() => navigate(`/details/${task._id}`)}
          />
        </div>
      </div>
    </div>
  );
}

export default BrowseCard;
