import React, { useContext, useEffect, useState } from "react";
import MainSection from "../layouts/MainSection";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../providers/Context";
import toast from "react-hot-toast";
import Button from "../customs/Button";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";

function TaskDetails() {
  const {
    _id,
    taskName,
    taskPhoto,
    taskDescription,
    catagory,
    bidPrice,
    deadline,
    bids,
    taskerName,
    profile,
    taskAddedDate
  } = useLoaderData();
  const { userData } = useContext(AuthContext);
  const bidData = bids.includes(userData.email);
  const [bided, setBided] = useState(bidData);

  useEffect(() => {
    setBided(bidData);
  }, [bidData]);

  const navigate = useNavigate();

  const handleBid = async () => {
    if (bided) {
      toast.error("You have already bid on this task.");
      return;
    }

    fetch(`https://work-nest-server-azure.vercel.app/bid-task/${_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bids: [...bids, userData.email] }),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Bid placed successfully!",
          showConfirmButton: false,
          timer: 1200,
        });
        setBided(true);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to bid on task.");
      });
  };

  return (
    <MainSection>
      <h1 className="text-3xl font-semibold mt-6 capitalize text-center">
        <Typewriter
          words={[taskName]}
          loop={1}
          cursor
          cursorStyle=""
          typeSpeed={60}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="flex flex-col items-center gap-5 w-full">
          <div
          title="Go to profile"
          onClick={() => navigate(`/user/${profile.email}`)}
          className="w-full rounded-lg p-2 bg-base-300 flex items-center gap-2 cursor-pointer">
            <img
              className="bg-white h-14 w-14 rounded-md"
              src={profile.photoUrl}
              onError={(e) => {
                e.target.onerror = "";
                e.target.src =
                  "https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-photo-400-205577532.jpg";
              }}
              alt="User"
            />
            <div className="flex flex-col h-full flex-grow">
              <h1 className="font-semibold border-gray-300 border-b-2 pb-1 w-full">{profile.name}</h1>
              <p className="text-sm opacity-90 w-full">Post At : {taskAddedDate}</p>
            </div>
          </div>
          <div className="w-full h-64 overflow-hidden rounded-lg shadow-md">
            <img
              className="w-full h-full object-cover"
              src={taskPhoto}
              alt=""
            />
          </div>
          <div className="w-full  rounded-lg flex flex-col gap-3">
            <p className="text-sm text-primary border-primary border-2 py-1 px-3 rounded-full">
              Budget: <span className="font-semibold">{bidPrice}$</span>
            </p>
            <p className="text-sm text-primary border-primary border-2 py-1 px-3 rounded-full">
              Deadline: <span className="font-semibold">{deadline}</span>
            </p>
            <p className="text-sm text-primary border-primary border-2 py-1 px-3 rounded-full">
              Catagory: <span className="font-semibold">{catagory}</span>
            </p>
            <p className="text-sm text-primary border-primary border-2 py-1 px-3 rounded-full">
              Order By: <span className="font-semibold">{taskerName}</span>
            </p>
            <Button
              onClick={handleBid}
              label={bided ? "Already Bided" : "Bid Now"}
            />
          </div>
        </div>
        <div className="lg:col-span-2 w-full border-primary border-[2px] p-3 rounded-lg shadow-md">
        <div className="flex items-center justify-center md:justify-end mb-2 font-semibold">Total Bids: <span className="font-semibold h-8 min-w-8 p-1 border-primary border-[2px] rounded-full flex items-center justify-center text-primary ml-2 text-xl">{bids.length}</span></div>
          <p className="text-justify">{taskDescription}</p>
        </div>
      </div>
    </MainSection>
  );
}

export default TaskDetails;
