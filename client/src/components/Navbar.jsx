import React, { useContext } from "react";
import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import ThemeToggler from "./ThemeToggler";
import { AuthContext, ScrollContext } from "../providers/Context";
import Button from "../customs/Button";
import { IoMdLogOut } from "react-icons/io";

function Navbar() {
  const { isScrolled } = useContext(ScrollContext);

  const { user, userLogOut, userData } = useContext(AuthContext);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerX = () => {
    setDrawerOpen(!drawerOpen);
    document.getElementById("my-drawer").checked = false;
  };

  const navigate = useNavigate();

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Browse Tasks",
      path: "/browse-tasks",
    },
    {
      name: "About Us",
      path: "/about-us",
    }
  ];

  const privateLinks = [
    {
      name: "Add Task",
      path: "/add-task",
    },
    {
      name: "My Tasks",
      path: "/my-tasks",
    },
  ];

  return (
    <nav
      className={`fixed bg-base-100 z-20 w-full ${
        isScrolled
          ? "top-0 left-0 translate-x-none"
          : "top-4 left-1/2 -translate-x-1/2"
      }`}
    >
      <section
        className={`flex flex-row items-center justify-between mx-auto bg-gradient-to-r from-[#10A4A0] to-[#02A17A] px-0 py-0 lg:px-6 shadow-md duration-300 transition-all ease-in-out ${
          isScrolled ? "w-full" : "w-11/12 rounded-md "
        }`}
      >
        <div className="flex items-center justify-between z-22 w-full lg:w-auto">
          <label
            onClick={() => setDrawerOpen(!drawerOpen)}
            htmlFor="my-drawer"
            className={`${
              drawerOpen
                ? "bg-base-100 text-primary"
                : "bg-black/10 text-base-100"
            }  flex lg:hidden items-center justify-center font-semibold drawer-button w-14 h-14 p-0 text-2xl `}
          >
            {drawerOpen ? <IoClose /> : <AiOutlineMenu />}
          </label>
          <Link
            className={`text-2xl font-bold md:text-base-100 lg:h-17  flex items-center ${
              drawerOpen ? "text-accent" : "text-base-100"
            }`}
            to="/"
          >
          WORK NEST
            
  

          </Link>
          {user ? (
            <div
              className="avatar lg:hidden"
              title={userData.name}
              onClick={() => navigate("/my-profile")}
            >
              <div className="w-8 border-base-100 border-2 rounded-full mr-4">
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
          ) : (
            <NavLink
              className={({ isActive }) =>
                `flex lg:hidden mr-2 rounded-full py-1 px-4 font-semibold ${
                  isActive ? "bg-base-100" : "bg-base-100"
                } ${drawerOpen ? "bg-base-100 text-base-100" : "text-primary"} `
              }
              to="/login"
            >
              Login
            </NavLink>
          )}
        </div>

        <div className="hidden lg:flex items-center justify-center gap-2 ">
          {navLinks.map((item) => {
            return (
              <NavLink
                key={item.name}
                className={({ isActive }) =>
                  `border-[1px] rounded-full py-1 px-4 text-base-100 transition-all duration-300 ease-in-out ${
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
          {user &&
            privateLinks.map((item) => {
              return (
                <NavLink
                  key={item.name}
                  className={({ isActive }) =>
                    `border-[1px] rounded-full py-1 px-4 text-base-100 transition-all duration-300 ease-in-out ${
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

        <div className="hidden lg:flex items-center justify-end gap-2 duration-300 transition ease-in-out">
          {user ? (
            <>
              <div
                className="avatar cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={`Go to ${userData.name}'s Profile`}
                onClick={() => navigate("/my-profile")}
              >
                <div className="w-10 rounded-full border-white border-[2px] shadow-sm hover:border-secondery">
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
              <button
                onClick={userLogOut}
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Log Out Now"
                className="border-white border-[1px] rounded-full w-10 h-10 flex items-center justify-center shadow-sm cursor-pointer hover:border-secondery"
              >
                <IoMdLogOut color="#fff" size={24} />
              </button>
            </>
          ) : (
            <>
              <NavLink
                className={({ isActive }) =>
                  `rounded-full py-1 px-5 shadow-sm border-[1px] hover:bg-black/10 hover:text-base-100 hover:border-base-100 font-semibold ${
                    isActive
                      ? "bg-base-100 text-primary border-primary"
                      : "bg-primary text-base-100 border-base-100"
                  } `
                }
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `rounded-full py-1 px-5 shadow-sm border-[1px] hover:bg-black/10 hover:text-base-100 hover:border-base-100 font-semibold ${
                    isActive
                      ? " bg-base-100 text-primary border-primary"
                      : "bg-primary text-base-100 border-base-100"
                  } `
                }
                to="/join-us"
              >
                Join Us
              </NavLink>
            </>
          )}
          <div className="border-white border-[1px] rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
            <ThemeToggler />
          </div>
        </div>
      </section>
      {/* DRAWER START */}

      <div className="drawer lg:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side w-full bg-base-100 z-21 pt-14 realative overflow-y-auto overflow-x-hidden">
          <div className="absolute flex flex-col justify-center items-center top-2 right-6 z-22 h-10 w-10 bg-[#1d232a] rounded-full">
            <ThemeToggler />
          </div>

          <div
            className="flex flex-col border-t-2 border-gray-200 w-full h-full mx-auto pt-10 "
            onClick={handleDrawerX}
          >
            <div className="flex flex-col gap-2 pl-6">
              {navLinks.map((item) => {
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className="block py-2"
                  >
                    {item.name}
                  </NavLink>
                );
              })}
              {user &&
                privateLinks.map((item) => {
                  return (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className="block py-2"
                    >
                      {item.name}
                    </NavLink>
                  );
                })}
            </div>
            <div className="flex flex-row gap-2 justify-center mt-8 py-4 px-6">
              {user ? (
                <Button label="LOGOUT" onClick={userLogOut} />
              ) : (
                <>
                  <Button label="LOGIN" onClick={() => navigate("/login")} />
                  <Button
                    label="Join Us"
                    onClick={() => navigate("/join-us")}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
