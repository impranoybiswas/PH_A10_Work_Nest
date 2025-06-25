import React, { useContext, useEffect, useState } from "react";
import MainSection from "../layouts/MainSection";
import { AuthContext } from "../providers/Context";
import SectionHeader from "../customs/SectionHeader";
import Loading from "../components/Loading";
import { Fade } from "react-awesome-reveal";
import { IoCloseSharp } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import UpdateProfile from "../components/UpdateProfile";
import ShinyText from "../customs/ShinyText";

function Profile() {
  const { userData, loading } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (loading || !userData?.email) return;

    fetch(`https://work-nest-server-azure.vercel.app/my-task/${userData.email}`)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data || []);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setTasks([]);
      });
  }, [userData, loading]);

  const totalBids = tasks.reduce((total, task) => {
    return total + (Array.isArray(task.bids) ? task.bids.length : 0);
  }, 0);

  if (loading) {
    return (
      <MainSection>
        <Loading />
      </MainSection>
    );
  }

  if (!userData || !userData.email) {
    return <MainSection>User not found</MainSection>;
  }

  return (
    <MainSection>
      <SectionHeader title="My Profile" subtitle="" />
      <div className="flex flex-col justify-center items-center gap-4 w-full md:w-110 border-primary/30 border-2 rounded-xl px-5 py-8 relative">
        <div className="avatar">
          <div className="mask mask-squircle w-45">
            <img
              className="bg-white"
              src={userData.photoUrl}
              onError={(e) => {
                e.target.onerror = "";
                e.target.src =
                  "https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-photo-400-205577532.jpg";
              }}
              alt="User"
            />
          </div>
        </div>
        <h1 className="text-2xl md:text-4xl font-semibold">
          {(userData.name?.split(" ")[0] || "User").toUpperCase()}
        </h1>
        <Fade cascade className="w-full lg:pl-4">
          <h1 className="text-sm md:text-xl w-full">
            Full Name: <span className="font-semibold">{userData.name}</span>
          </h1>
          <h1 className="text-sm md:text-xl w-full">
            Email:{" "}
            <span className="font-semibold opacity-75">{userData.email}</span>
          </h1>
          <h1 className="text-sm md:text-xl w-full">
            Total Tasks:{" "}
            <span className="font-semibold opacity-75">{tasks.length}</span>
          </h1>
          <h1 className="text-sm md:text-xl w-full">
            Total Bids:{" "}
            <span className="font-semibold opacity-75">{totalBids}</span>
          </h1>
        </Fade>
        <button
        className="btn absolute right-2 top-2 btn-lg btn-circle bg-transparent border-primary border-2 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-500 ease-in-out"
        onClick={() => document.getElementById("edit-profile").showModal()}
        data-tooltip-id="my-tooltip" data-tooltip-content="Edit Your Profile"
      >
        <FaUserEdit size={27} />
      </button>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
    
      <dialog id="edit-profile" className="modal">
        <div className="modal-box relative">
          <div>
            <h1 className="text-2xl font-semibold text-center text-primary my-4">
              Edit Your Profile
            </h1>
            <UpdateProfile userData={userData} />
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-primary absolute right-2 top-2">
                <IoCloseSharp size={20} />
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </MainSection>
  );
}

export default Profile;
