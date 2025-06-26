import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import FeaturedTasks from "../components/FeaturedTasks";
import MainSection from "../layouts/MainSection";
import { useLoaderData } from "react-router";
import MostVisited from "../components/MostVisited";
import SuccessStory from "../components/SuccessStory";
import JobCatagory from "../components/JobCatagory";
import Offers from "../components/Offers";

function Home() {
  const loadedTasks = useLoaderData();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(loadedTasks);
  }, [loadedTasks]);

  return (
    <>
      <Header />
      <MainSection>
        <JobCatagory/>
        <FeaturedTasks tasks={tasks} />
        <MostVisited/>
        <Offers/>
        <SuccessStory/>
      </MainSection>
    </>
  );
}

export default Home;
