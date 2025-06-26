import React, { useContext } from "react";
import MainSection from "../../layouts/MainSection";
import SectionHeader from "../../customs/SectionHeader";
import { AuthContext } from "../../providers/Context";
import { privateLinks } from "../../utilities/navlinks";
import { NavLink, Outlet } from "react-router";

export default function Dashboard() {
  const { userData } = useContext(AuthContext);

  return (
    <MainSection customClass={"relative"}>
      <SectionHeader title="Dashboard" subtitle="Welcome to your dashboard" />
      <section className="flex flex-col md:flex-row gap-3 w-full relative">
        <div className="w-full md:w-60">
          <div className="p-3 rounded-md shadow-sm bg-gradient-to-r from-indigo-500 to-purple-600 md:sticky md:top-20 flex flex-col justify-center items-center gap-4">
            <img
              className="w-20 h-20 rounded-full object-cover border-[2px] border-white"
              src={userData.photoUrl}
              alt=""
            />
            <h1 className="text-2xl font-semibold text-white">
              {userData.name}
            </h1>
            <div className="flex flex-col gap-2 w-full">
              {userData &&
                privateLinks.map((item) => {
                  return (
                    <NavLink
                      key={item.name}
                      className={({ isActive }) =>
                        `w-full border-[1px] rounded-full py-1 px-4 text-base-100 transition-all duration-300 ease-in-out ${
                          isActive
                            ? "border-base-100 bg-black/10"
                            : "border-transparent hover:bg-black/10"
                        } `
                      }
                      to={item.path}
                    >
                      {item.name}
                    </NavLink>
                  );
                })}
            </div>
            <NavLink to="/dashboard" className="hover:underline text-white">
              Go to dashboard
            </NavLink>
          </div>
        </div>
        <div className="flex-1 rounded-md border-[1px] border-gray-300 shadow-md p-4">
          <Outlet />
        </div>
      </section>
    </MainSection>
  );
}
