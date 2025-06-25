import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";
import MainSection from "../layouts/MainSection";
import Input from "../customs/Input";
import SectionHeader from "../customs/SectionHeader";
import Button from "../customs/Button";

function ForgetPass() {
  const [message, setMessage] = useState("");
  const handleForPass = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!email) return setMessage("Please enter your email");
    sendPasswordResetEmail(auth, email)
      .then(() => setMessage("Email sent"))
      .catch((err) => setMessage(err.message));
    toast.success("Email sent");
  };
  return (
    <MainSection>
      <SectionHeader title="Forget Password" subtitle="Write your Registered email Here" />
      <form
        className="flex min-w-[350px] flex-col gap-5"
        onSubmit={(e) => handleForPass(e)}
      >
        <Input
          type="email"
          name="email"
          label="Email"
          bgColor="bg-red-100"
          placeholder={"Enter your email"}
        />
        {message && <p className="text-purple-600">{message}</p>}
        <Button label="Submit" />
      </form>
    </MainSection>
  );
}

export default ForgetPass;
