import React, { Suspense, useContext, useEffect } from "react";
import { Outlet, useLocation, useNavigation } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { Toaster } from "react-hot-toast";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { ScrollContext } from "./providers/Context";
import { Tooltip } from "react-tooltip";

import AOS from "aos";
import "aos/dist/aos.css";

function Root() {
  const { isScrolled } = useContext(ScrollContext);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigation = useNavigation();
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,       
      easing: "ease-in-out",
      once: false,          
      mirror: false        
    });
  }, []);

  useEffect(() => {
    const path = location.pathname;

    let title = "Page Not Found | Work Nest";

    if (path === "/") title = "Work Nest - Freelance Task Marketplace";
    else if (path === "/my-profile") title = "My Profile | Work Nest";
    else if (path === "/about-us") title = "About Us | Work Nest";
    else if (path === "/login") title = "Log In | Work Nest";
    else if (path === "/join-us") title = "Join Here | Work Nest";
    else if (path === "/terms") title = "Terms & Conditions | Work Nest";
    else if (path === "/browse-tasks") title = "All Tasks | Work Nest";
    else if (path === "/my-tasks") title = "My Tasks | Work Nest";
    else if (path === "/add-task") title = "Add Task | Work Nest";
    else if (path.startsWith("/details/"))
      title = "Task Details | Work Nest";
    else if (path.startsWith("/update-task/"))
      title = "Update Task | Work Nest";
    else if (path === "/forget-password") title = "Forget Password | Work Nest";

    document.title = title;
  }, [location]);
  return (
    <>
      <Navbar />
      {navigation.state === "loading" ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      )}
      <Footer />
      {isScrolled && (
        <FaRegArrowAltCircleUp
          data-tooltip-id="my-tooltip"
          data-tooltip-content="GO TO TOP"
          onClick={scrollToTop}
          className="fixed cursor-pointer bottom-6 right-6 animate-bounce bg-primary/60 rounded-full hover:bg-primary text-white"
          color="#fff"
          size={50}
        />
      )}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
      />
      <Tooltip id="my-tooltip" />
    </>
  );
}

export default Root;
