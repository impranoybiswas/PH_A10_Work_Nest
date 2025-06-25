import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import FeaturedTasks from "../components/FeaturedTasks";
import MainSection from "../layouts/MainSection";
import { useLoaderData } from "react-router";
import MostVisited from "../components/MostVisited";
import SuccessStory from "../components/SuccessStory";

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
        <FeaturedTasks tasks={tasks} />
        <MostVisited/>
        <SuccessStory/>
      </MainSection>
    </>
  );
}

export default Home;
