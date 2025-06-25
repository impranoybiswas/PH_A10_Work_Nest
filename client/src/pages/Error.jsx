import React from "react";
import MainSection from "../layouts/MainSection";
import { Link } from "react-router";
import { IoHome } from "react-icons/io5";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Navbar from "../components/Navbar";

function Error() {
  return (
    <MainSection>
      <Navbar/>
      <div className="w-auto h-64 absolute top-18">
        <DotLottieReact src="./assets/sadhang.lottie" loop autoplay />
      </div>
      <div className="flex flex-col justify-center items-center mt-60">
        <h1 className="text-5xl md:text-9xl font-bold text-primary">404</h1>
        <h1 className="text-2xl md:text-4xl font-bold text-primary">
          Page Not Found
        </h1>
        <Link
          to="/"
          className="btn bg-base-100 text-primary shadow-none mt-6 rounded-full font-semibold text-xl px-4 py-3"
        >
          <IoHome /> Go To Home
        </Link>
      </div>
    </MainSection>
  );
}

export default Error;
