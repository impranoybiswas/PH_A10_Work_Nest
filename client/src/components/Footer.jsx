import React from "react";
import { Link } from "react-router";
import { Fade } from "react-awesome-reveal";
import { Tooltip } from "react-tooltip";
import toast from "react-hot-toast";
import { RiFacebookFill } from "react-icons/ri";
import { FaAppStore, FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import ShinyText from "../customs/ShinyText";
import Threads from "../customs/Threads";

function Footer() {
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
      name: "My Profile",
      path: "/my-profile",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Contact Us",
      path: "/about-us",
    },
  ];
  return (
    <footer className="flex flex-col justify-center items-center w-full gap-10 bg-teal-950 mt-10 text-white relative overflow-hidden">
      {/* <div className="w-full h-full absolute left-0 top-30 z-2 opacity-30 " >
  <Threads
    amplitude={1}
    distance={0}
    enableMouseInteraction={true}
  />
</div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-11/12 mx-auto md:w-4/5 lg:w-3/5 py-10 z-3">
        <div>
          <Fade cascade>
            <div
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Hello Dear"
              className="text-2xl md:text-4xl text-center lg:text-left lg:h-25 font-bold pb-3 border-gray-100 border-b-2 mb-3"
            >
              <ShinyText text="Work Nest" disabled={false} speed={3} />
            </div>
            <Tooltip id="my-tooltip" />
          </Fade>

          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold">Quick Links</h1>
            {navLinks.map((item) => {
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-sm md:text-base hover:underline"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          
          <div className="flex flex-col border-b-2 border-gray-100 h-25 ">
            <h1 className="tex-2xl font-semibold text-center pt-3">Follow Us</h1>
            <div className="h-16 w-full flex justify-center items-end">
              <Link
                className="w-12 h-12 flex justify-center items-center bg-blue-500 hover:bg-blue-600 hover:h-15 transition-all duration-300 ease-in-out rounded-t-md"
                to="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiFacebookFill size={30} />
              </Link>
              <Link
                className="w-12 h-12 flex justify-center items-center bg-slate-800 hover:bg-slate-900 hover:h-15 transition-all duration-300 ease-in-out rounded-t-md"
                to="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={30} />
              </Link>
              <Link
                className="w-12 h-12 flex justify-center items-center bg-gray-900 hover:bg-gray-950 hover:h-15 transition-all duration-300 ease-in-out rounded-t-md"
                to="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </Link>
              <Link
                className="w-12 h-12 flex justify-center items-center bg-sky-400 hover:bg-sky-500 hover:h-15 transition-all duration-300 ease-in-out rounded-t-md"
                to="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={30} />
              </Link>
              <Link
                className="w-12 h-12 flex justify-center items-center bg-red-400 hover:bg-red-500 hover:h-15 transition-all duration-300 ease-in-out rounded-t-md"
                to="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={30} />
              </Link>
              
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center mt-5 justify-center md:justify-end" >

            <span>Our Apps : </span>
            <Link
            className="w-8 h-8 flex justify-center items-center border-2 border-white/50 hover:border-white text-white/50 hover:text-white transition-all duration-300 ease-in-out rounded-full"
             to="https://play.google.com/store/apps/details?id=com.worknest.worknest" target="_blank" rel="noopener noreferrer"><IoLogoGooglePlaystore /></Link>
             <Link
            className="w-8 h-8 flex justify-center items-center border-2 border-white/50 hover:border-white text-white/50 hover:text-white transition-all duration-300 ease-in-out rounded-full"
             to="https://play.google.com/store/apps/details?id=com.worknest.worknest" target="_blank" rel="noopener noreferrer"><FaAppStore /></Link>
          </div>
          <div className="flex flex-col gap-3 bg-primary/30 rounded-md p-2 md:p-4 mt-3">
            <h1 className="tex-2xl font-semibold text-center">Newsletter</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault(), toast.success("Subscribed Successfully");
              }}
              className="w-full  flex"
            >
              <input
                className="w-full input rounded-l-full"
                type="text"
                name="email"
                id=""
              />
              <input
                className=" btn btn-primary rounded-r-full shadow-none"
                type="submit"
                value="Subscribe"
              />
            </form>
          </div>
        </div>
        
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-0 py-3 md:px-10 lg:px-16 bg-black text-white text-sm">
        <span>
          All rights reserved{" "}
          <Link to="/terms" className="underline">
            Privacy Policy
          </Link>
        </span>
        <span>Copyright &copy; 2023 WorkNest</span>
      </div>
    </footer>
  );
}

export default Footer;
