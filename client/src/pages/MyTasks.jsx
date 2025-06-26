import React from "react";
import MyCard from "../components/MyCard";
import SectionHeader from "../customs/SectionHeader";
import Loading from "../components/Loading";
import Swal from "sweetalert2";
import useMyTasks from "../hooks/MyTasks";

function MyTasks() {
  const { loadMyTasks, loading, fetchTasks } = useMyTasks();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want to Delete this Task!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_SERVER_URL}/delete-task/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            fetchTasks();
          })
          .catch((err) => console.error("Delete failed:", err));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <SectionHeader title="My Tasks" />
      {loadMyTasks.length === 0 ? (
        <p className="text-center text-red-500">
          You haven't added any tasks yet.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-full">
          <table className="table">
            <thead>
              <tr>
                <th>Deadline</th>
                <th>Task Information</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loadMyTasks.map((task) => (
                <MyCard
                  key={task._id}
                  task={task}
                  handleDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default MyTasks;
