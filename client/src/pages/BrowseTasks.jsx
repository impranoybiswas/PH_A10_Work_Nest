import { useEffect, useState } from "react";
import MainSection from "../layouts/MainSection";
import SectionHeader from "../customs/SectionHeader";
import BrowseCard from "../components/BrowseCard";
import Loading from "../components/Loading";
import useTasks from "../hooks/LoadTasks";


function BrowseTasks() {
  const {loadedTasks} = useTasks();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Array.isArray(loadedTasks)) {
      setTasks(loadedTasks);
    } else {
      setTasks([]);
    }
    setLoading(false);
  }, [loadedTasks]);

  return (
    <MainSection>
      <SectionHeader
        title="Browse Tasks"
        subtitle="Check available tasks here"
      />

      {tasks.length === 0 ? (
        <p className="text-center text-red-500">No tasks available.</p>
      ) : (
        loading ? (
          <Loading />
        ) : (
          <div className="flex flex-col gap-6">
          {tasks.map((task) => (
            <BrowseCard key={task._id} task={task} />
          ))}
        </div>
        )
      )}
    </MainSection>
  );
}

export default BrowseTasks;
