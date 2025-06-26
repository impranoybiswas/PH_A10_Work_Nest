import React from "react";
import useTasks from "../../hooks/LoadTasks";
import useMyTasks from "../../hooks/MyTasks";
import ProgressCircle from "./ProgressCircle";

export default function DashboardCard() {
  const { loadedTasks } = useTasks();
  const { loadMyTasks } = useMyTasks();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex justify-center items-center border-primary/30 border-[1px] rounded-md shadow-sm px-5 py-8 gap-4 bg-primary/10">
     <div className="flex flex-col gap-2 text-2xl font-semibold">
     <p>Total Tasks: {loadedTasks.length}</p>
     <p>Your Tasks: {loadMyTasks.length}</p>
     </div>

      <ProgressCircle
        completed={loadMyTasks.length}
        total={loadedTasks.length}
      />
    </div>
    <div>
        
    </div>
    </section>
  );
}
