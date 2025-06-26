import React from "react";
import SectionHeader from "../customs/SectionHeader";
import { useNavigate } from "react-router";

export default function JobCatagory() {
  const navigate = useNavigate();
  const catagories = [
    {
      title: "Programming",
      img: "/assets/cat/programming.png",
    },
    {
      title: "Animation",
      img: "/assets/cat/animate.png",
    },
    {
      title: "Data Entry",
      img: "/assets/cat/laptop.png",
    },
    {
      title: "Photo Editing",
      img: "/assets/cat/image-editing.png",
    },
    {
      title: "Video Editing",
      img: "/assets/cat/montage.png",
    },
    {
      title: "Web Design",
      img: "/assets/cat/startup.png",
    },
    {
      title: "JSON Data",
      img: "/assets/cat/style-sheet.png",
    },
    {
      title: "UI/UX",
      img: "/assets/cat/ux.png",
    },
  ];

  return (
    <section
      className="flex flex-col gap-4 w-full"
      data-aos="fade-down"
      data-aos-anchor-placement="top-bottom"
    >
      <SectionHeader title="Job Available Catagory" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {catagories.map((item) => (
          <div
            onClick={() => {
              navigate(`/browse-tasks`);
            }}
            key={item.title}
            className="flex flex-col justify-center items-center py-3 border-2 border-primary/30 hover:border-primary rounded-md bg-primary/10 hover:bg-primary/20 cursor-pointer"
          >
            <div className="rounded-full bg-base-100 p-5">
              <img
                src={item.img}
                alt={item.title}
                className="w-18 h-18 object-contain"
              />
            </div>
            <h1 className="mt-2 text-xl font-semibold opacity-80">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
}
