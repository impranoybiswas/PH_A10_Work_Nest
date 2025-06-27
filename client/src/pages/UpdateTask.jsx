import React from "react";
import SectionHeader from "../customs/SectionHeader";
import Button from "../customs/Button";
import { useLoaderData, useParams, useNavigate } from "react-router";
import toast from "react-hot-toast";

function UpdateTasks() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { taskName, taskPhoto, taskDescription, catagory, bidPrice, deadline } =
    useLoaderData();

  const handleUpdateTask = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form);

    const bid = parseFloat(formData.bidPrice);
    if (isNaN(bid) || bid < 5 || bid > 100) {
      return toast.error("Bid price must be between 5 and 100");
    }

    fetch(`${import.meta.env.VITE_SERVER_URL}/update-task/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        bidPrice: bid,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update task");
        return res.json();
      })
      .then(() => {
        toast.success("Task updated successfully!");
        navigate("/my-tasks");
      })
      .catch((error) => {
        console.error("Error updating task:", error);
        toast.error("Something went wrong!");
      });
  };

  return (
    <>
      <SectionHeader title="Update Tasks" />
      <form
        className="w-full max-w-3xl mx-auto p-6 bg-base-100 grid gap-5"
        onSubmit={handleUpdateTask}
      >
        <div>
          <label className="label" htmlFor="taskName">
            Task Name
          </label>
          <input
            className="input input-bordered w-full"
            type="text"
            name="taskName"
            id="taskName"
            defaultValue={taskName}
            required
          />
        </div>
        <div>
          <label className="label" htmlFor="taskPhoto">
            Add Image URL
          </label>
          <input
            className="input input-bordered w-full"
            type="text"
            name="taskPhoto"
            id="taskPhoto"
            defaultValue={taskPhoto}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
          <div>
            <label className="label" htmlFor="taskDescription">
              Task Description
            </label>
            <textarea
              className="textarea textarea-bordered w-full md:h-full"
              name="taskDescription"
              id="taskDescription"
              placeholder="Write details about the task"
              defaultValue={taskDescription}
              required
            />
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <label className="label" htmlFor="catagory">
                Category
              </label>
              <select
                defaultValue={catagory}
                className="select select-bordered w-full"
                name="catagory"
                id="catagory"
                required
              >
                <option disabled value="">
                  Select Category
                </option>
                <option>Web Development</option>
                <option>Griphic Design</option>
                <option>Data Entry</option>
                <option>Video Editing</option>
                <option>Motion Graphics</option>
              </select>
            </div>

            <div>
              <label className="label" htmlFor="bidPrice">
                Bid Price
              </label>
              <input
                className="input input-bordered w-full"
                type="number"
                name="bidPrice"
                id="bidPrice"
                min="5"
                max="100"
                defaultValue={bidPrice}
                required
              />
            </div>

            <div>
              <label className="label" htmlFor="deadline">
                Deadline
              </label>
              <input
                type="date"
                className="input input-bordered w-full"
                name="deadline"
                id="deadline"
                defaultValue={deadline}
                required
              />
            </div>
          </div>
        </div>

        <div>
          <Button label="Update Your Task" />
        </div>
      </form>
    </>
  );
}

export default UpdateTasks;
