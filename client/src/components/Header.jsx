import React from "react";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Typewriter } from "react-simple-typewriter";

function Header() {
  const slideImgs = [
    "https://cdn.pixabay.com/photo/2015/01/08/18/30/man-593372_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/10/16/15/52/business-8319519_1280.png",
    "https://cdn.pixabay.com/photo/2021/07/26/13/20/man-6494289_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/03/27/20/12/desk-1284085_1280.jpg",
  ];

  return (
    <header className="h-dvh w-11/12 mx-auto pt-24 lg:pt-26 pb-6">
      <section className="h-full w-full flex justify-center items-center rounded-md shadow-md overflow-hidden">
        <Swiper
          className="w-full h-full relative"
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 2000 }}
          scrollbar={{ draggable: true }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-1/2 bg-gradient-to-t from-transparent via-black/40 to-transparent z-1 w-full h-full flex flex-col md:justify-center items-center text-white md:pt-0">
            <h1 className="p-6 h-40 text-2xl md:text-4xl lg:text-6xl font-semibold text-center mt-5 md:mt-0">
              <Typewriter words={["Connect. Collaborate. Create."]} loop={0} cursor cursorStyle="|" typeSpeed={50} deleteSpeed={40} delaySpeed={1500} />
            </h1>
            <h1 className="p-6 text-xl md:text-2xl lg:text-3xl font-semibold text-center mt-1 md:mt-0">
              <Typewriter words={["Talent Meets Opportunity"]} loop={1} cursor cursorStyle="" typeSpeed={80} deleteSpeed={50} delaySpeed={2000} />
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-center mt-4">
              Connect. Collaborate. Create. Build your dream team or your dream
              career — all in one place.
            </p>
          </div>
          {slideImgs.map((image) => {
            return (
              <SwiperSlide className="w-full h-full flex justify-center items-center relative">
                <img
                  className="w-full h-full object-cover"
                  src={image}
                  alt=""
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </header>
  );
}

export default Header;
