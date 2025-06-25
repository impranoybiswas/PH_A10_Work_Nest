import React from "react";
import TaskCard from "./TaskCard";
import SectionHeader from "../customs/SectionHeader";
import { useNavigate } from "react-router";

function FeaturedTasks({ tasks }) {
  const navigate = useNavigate();

  const featuredTasks = tasks.slice(0, 6);

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <SectionHeader
        title="Featured Tasks"
        subtitle="Check out our featured tasks"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {featuredTasks.map((item) => {
          return <TaskCard key={item._id} item={item} />;
        })}
      </div>
      <div
        onClick={() => {
          navigate("/browse-tasks");
        }}
        className="w-full md:w-80 flex justify-center mt-8 hover:bg-gradient-to-l hover:to-[#10A4A0] hover:from-[#02A17A] cursor-pointer py-2 px-4 rounded-full font-semibold text-lg bg-transparent hover:text-white text-primary border-2 border-primary"
      >
        Show All Tasks
      </div>
    </section>
  );
}

export default FeaturedTasks;
