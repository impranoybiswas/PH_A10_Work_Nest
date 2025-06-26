import React, { useContext } from "react";
import SectionHeader from "../customs/SectionHeader";
import { AuthContext } from "../providers/Context";
import Button from "../customs/Button";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

function AddTasks() {
  const { userData } = useContext(AuthContext);

  const handleAddTask = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form);

    const bid = parseFloat(formData.bidPrice);
    const validImage = /\.(jpg|jpeg|png)$/i;

    if (!validImage.test(formData.taskPhoto)) {
      return toast.error("Image URL must end with .jpg, .jpeg, or .png");
    }

    if (isNaN(bid) || bid < 5 || bid > 100) {
      return toast.error("Bid price must be between 5 and 100");
    }

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate
      .toLocaleString("en-US", { month: "short" })
      .toUpperCase();
    const year = currentDate.getFullYear();

    const taskData = {
      ...formData,
      bidPrice: bid,
      bids: [],
      profile: userData,
      taskAddedDate: `${day}-${month}-${year}`,
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/add-task`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(taskData),
      });

      if (!res.ok) throw new Error("Failed to add task");

      await res.json();

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your task has been added",
        showConfirmButton: false,
        timer: 1200,
      });

      e.target.reset();
    } catch (err) {
      console.error("Add task error:", err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <SectionHeader title="Add Tasks" subtitle="Add your tasks here" />

      <form
        className="w-full max-w-3xl mx-auto p-6 bg-base-100 grid gap-5"
        onSubmit={handleAddTask}
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
              required
            />
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <label className="label" htmlFor="catagory">
                Category
              </label>
              <select
                defaultValue=""
                className="select select-bordered w-full"
                name="catagory"
                id="catagory"
                required
              >
                <option disabled value="">
                  Select Category
                </option>
                <option>Web Development</option>
                <option>Graphic Design</option>
                <option>Data Entry</option>
                <option>Marketing</option>
                <option>Programming</option>
                <option>Video Editing</option>
                <option>Motion Graphics</option>
              </select>
            </div>

            <div>
              <label className="label" htmlFor="bidPrice">
                Bid Price
              </label>
              <div className="flex w-full">
                <div className="w-1/3">
                  <input
                    className="input input-bordered"
                    type="number"
                    name="bidPrice"
                    id="bidPrice"
                    min="5"
                    max="100"
                    required
                  />
                </div>
                <div className="text-sm w-2/3 opacity-70 pl-4">
                  * Bid price will be in USD $<br />* Price must be 5 to 100
                </div>
              </div>
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
                required
              />
            </div>
          </div>
        </div>

        <div>
          <label className="label" htmlFor="taskerName">
            Your Name for Task
          </label>
          <input
            className="input input-bordered w-full"
            type="text"
            name="taskerName"
            id="taskerName"
            defaultValue={userData.name}
            readOnly
          />
        </div>

        <div>
          <label className="label" htmlFor="taskerEmail">
            Your Email for Task
          </label>
          <input
            className="input input-bordered w-full"
            type="email"
            name="taskerEmail"
            id="taskerEmail"
            defaultValue={userData.email}
            readOnly
          />
        </div>

        <div>
          <Button label="Add Task Now" />
        </div>
      </form>
    </>
  );
}

export default AddTasks;
