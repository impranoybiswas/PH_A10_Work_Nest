import React from "react";
import Button from "../customs/Button";
import toast from "react-hot-toast";

function UpdateProfile({ userData }) {
  const { name, photoUrl, email } = userData;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form);
    console.log(formData);

    fetch(`https://work-nest-server-azure.vercel.app/update-user/${email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Update response:", data);
        toast.success("Profile updated successfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        toast.error("Failed to update profile.");
      });
  };

  return (
    <form onSubmit={handleUpdate} className="flex flex-col gap-1 w-full">
      <small>Your Name</small>
      <input
        type="text"
        name="name"
        className="input input-bordered w-full"
        placeholder="Name"
        defaultValue={name}
      />

      <small className="mt-2">Photo URL</small>
      <input
        type="text"
        name="photoUrl"
        className="input input-bordered w-full"
        placeholder="Photo URL"
        defaultValue={photoUrl}
      />

      <small className="mt-2">Your Email</small>
      <input
        name="email"
        type="email"
        placeholder="Enter your email"
        defaultValue={email}
        className="input input-bordered w-full mb-4"
        readOnly
      />

      <Button label="Update Profile" />
    </form>
  );
}

export default UpdateProfile;
