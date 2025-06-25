import React, { useEffect, useState } from "react";
import MainSection from "../layouts/MainSection";
import { useLoaderData } from "react-router";
import Loading from "../components/Loading";
import SectionHeader from "../customs/SectionHeader";
import Button from "../customs/Button";
import toast from "react-hot-toast";

function UserProfile() {
  const userData = useLoaderData();
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(userData);
  }, [userData]);

  if (!user) {
    return (
      <MainSection>
        <Loading />
      </MainSection>
    );
  }

  return (
    <MainSection>
      <SectionHeader
        title={user.name.split(" ")[0] + "'s Profile"}
        subtitle=""
      />
      <div className="flex flex-col items-center w-full md:w-sm border-primary/30 border-2 rounded-xl px-5 py-8 gap-3">
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
        <p className="text-sm text-primary border-primary border-[2px] w-full text-center py-1 px-3 rounded-full">
          Full Name : <span className="font-semibold">{user.name}</span>
        </p>
        <p className="text-sm text-primary border-primary border-[2px] text-center w-full py-1 px-3 rounded-full">
          Email : <span className="font-semibold">{user.email}</span>
        </p>
      <Button label="ADD FRIEND" onClick={() => toast.success('Friend Request Send')} />
      </div>
    </MainSection>
  );
}

export default UserProfile;
