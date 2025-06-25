import { useContext, useEffect, useState } from "react";
import MainSection from "../layouts/MainSection";
import { AuthContext } from "../providers/Context";
import MyCard from "../components/MyCard";
import SectionHeader from "../customs/SectionHeader";
import Loading from "../components/Loading";
import Swal from "sweetalert2";

function MyTasks() {
  const [tasks, setTasks] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const { userData, loading } = useContext(AuthContext);

  useEffect(() => {
    if (loading || !userData?.email) return;

    setIsFetching(true);
    fetch(`https://work-nest-server-azure.vercel.app/my-task/${userData.email}`)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data || []);
        setIsFetching(false);
      })
      .catch((err) => {
        console.error("Failed to fetch tasks:", err);
        setIsFetching(false);
      });
  }, [userData, loading]);

  const handleDelete = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You Want to Delete this Task!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://work-nest-server-azure.vercel.app/delete-task/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            const remaining = tasks.filter((task) => task._id !== id);
            setTasks(remaining);
          })
          .catch((err) => console.error("Delete failed:", err));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

    
  };

  if (loading || isFetching) {
    return (
      <MainSection>
        <Loading />
      </MainSection>
    );
  }

  return (
    <MainSection>
      <SectionHeader title="My Tasks" subtitle="All Posted Tasks Here" />
      {tasks.length === 0 ? (
        <p className="text-center text-red-500">You haven't added any tasks yet.</p>
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
              {tasks.map((task) => (
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
    </MainSection>
  );
}

export default MyTasks;
