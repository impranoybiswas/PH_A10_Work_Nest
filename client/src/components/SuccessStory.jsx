import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaQuoteLeft, FaStar, FaRegStar } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SectionHeader from "../customs/SectionHeader";

// Sample reviews data (could be moved to a separate file)
const stories = [
  {
    id: 1,
    author: "Ariana Gomez",
    profile_photo: "https://i.pravatar.cc/150?img=12",
    rating: 3,
    review:
      "An unforgettable experience! The event was well organized and full of energy. Definitely coming back next year!",
    date: "2025-04-10",
  },
  {
    id: 2,
    author: "Mark Johnson",
    profile_photo: "https://i.pravatar.cc/150?img=34",
    rating: 4,
    review:
      "Loved the performances and the vibe. Could use more food options though. Overall great!",
    date: "2025-04-12",
  },
  {
    id: 3,
    author: "Priya Das",
    profile_photo: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    review:
      "The event exceeded expectations! Super smooth check-in and amazing speakers.",
    date: "2025-04-15",
  },
  {
    id: 4,
    author: "Samuel Lee",
    profile_photo: "https://i.pravatar.cc/150?img=51",
    rating: 3,
    review:
      "Good overall, but sound system could have been better. Great networking opportunity though.",
    date: "2025-04-16",
  },
  {
    id: 5,
    author: "Fatima Noor",
    profile_photo: "https://i.pravatar.cc/150?img=9",
    rating: 4,
    review: "Great experience and well-organized. The decor was stunning!",
    date: "2025-04-18",
  },
  {
    id: 6,
    author: "Liam Patel",
    profile_photo: "https://i.pravatar.cc/150?img=19",
    rating: 5,
    review:
      "One of the best events I've attended this year. Smooth logistics and fantastic crowd.",
    date: "2025-04-20",
  },
];

function SuccessStory() {
  return (
    <section
      className="flex flex-col gap-4 w-full"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <SectionHeader
        title="Success Stories"
        subtitle="What our customers say about their Juerney"
        customClass="text-center"
      />
      <div className="w-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          className="mySwiper"
        >
          {stories.map((review) => (
            <SwiperSlide key={review.id} className="py-8 px-1">
              <StoryCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function StoryCard({ review }) {
  return (
    <div className="flex flex-col items-center relative rounded-md px-3 pt-6 pb-3 bg-primary/5 border-[2px] border-primary/50 hover:border-primary h-42 hover:-translate-y-2.5 transition-all duration-500 ease-in-out cursor-pointer z-3">
      <div className="avatar absolute -top-5 left-1/2 transform -translate-x-1/2">
        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
          <img
            src={review.profile_photo}
            alt={`${review.author}'s profile`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h2 className="text-lg font-semibold">{review.author}</h2>
      <time dateTime={review.date} className="text-gray-600 text-xs my-2">
        🕒 {formatDate(review.date)}
      </time>
      <blockquote className="text-gray-600 text-sm line-clamp-2">
        <FaQuoteLeft size={20} className="inline-block mr-2 text-pink-200" />
        {review.review}
      </blockquote>
    </div>
  );
}

function formatDate(dateString) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export default SuccessStory;
