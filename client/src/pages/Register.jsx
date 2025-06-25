import React, { useContext, useState } from "react";
import Loading from "../components/Loading";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../providers/Context";
import Input from "../customs/Input";
import Button from "../customs/Button";
import { FcGoogle } from "react-icons/fc";
import MainSection from "../layouts/MainSection";
import SectionHeader from "../customs/SectionHeader";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

function Register() {
  const { createUser, user, loading, setLoading, googleSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    const form = new FormData(e.target);
    const { email, password, terms, ...restForm } = Object.fromEntries(form);

    if (!terms)
      return (
        setError("Please accept the terms and conditions."),
        toast.error("Please accept the terms and conditions.")
      );

    if (
      password.length < 6 ||
      !/(?=.*[a-z])/.test(password) ||
      !/(?=.*[A-Z])/.test(password)
    ) {
      return (
        setError(
          "Password must be at least 6 characters long, contain at least one lowercase letter and one uppercase letter"
        ),
        toast.error(
          "Password must be at least 6 characters long, contain at least one lowercase letter and one uppercase letter"
        )
      );
    }

    const validImage = /\.(jpg|jpeg|png)$/i;

    if (!validImage.test(restForm.photoUrl)) {
      return toast.error("Image URL must end with .jpg, .jpeg, or .png");
    }

    try {
      await createUser(email, password);
      fetch("https://work-nest-server-azure.vercel.app/add-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, ...restForm }),
      });
      navigate(location.state || "/", { replace: true });
      setLoading(false);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Account created successfully.",
        showConfirmButton: false,
        timer: 1200,
      });
    } catch (err) {
      console.error(
        err.code === "auth/email-already-in-use"
          ? (setError("Email already in use."),
            toast.error("Email already in use."),
            setLoading(false))
          : setError(err.code)
      );
    }
  };

  const handleGoogle = () => {
    googleSignIn()
      .then(() => navigate(location.state || "/", { replace: true }))
      .catch((err) => console.log(err));
  };

  if (loading) return <Loading />;

  user && navigate(location.state || "/", { replace: true });
  return (
    <MainSection customClass="justify-center">
      <section className="flex flex-col justify-center items-center w-full md:w-2/3 lg:w-1/2 border-[1px] border-gray-400 rounded-2xl px-4 py-4 lg:px-6 lg:py-8">
        <SectionHeader
          customClass="text-secondery mb-10"
          title="Register"
          subtitle="Explore More with Join Us"
        />
        <form
          className="flex flex-col justify-center items-center w-full gap-5"
          onSubmit={(e) => handleRegister(e)}
        >
          <Input
            type="text"
            name="name"
            label="Name"
            bgColor="bg-base-100"
            placeholder={"Name"}
          />
          <Input
            type="text"
            name="photoUrl"
            label="Photo URL"
            bgColor="bg-base-100"
            placeholder={"Photo URL"}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            passEye="no"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            passEye="yes"
          />
          <label className="label">
            <input name="terms" type="checkbox" className="checkbox" />
            Accept{" "}
            <Link
              className="hover:underline text-gray-900 hover:text-purple-500 underline"
              to={"/terms"}
            >
              Terms & Conditions
            </Link>
          </label>
          <div className="text-red-600 text-sm flex items-start gap-2 ">
            {error !== "" && (
              <div className="status status-error animate-ping m-1"></div>
            )}
            {error}
          </div>

          <Button label="join us" onClick={() => {}} />
        </form>
        <p className="text-center mt-4">
          Don't have an account?
          <Link to="/join-us" className="text-primary font-semibold ml-1">
            Join Us
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogle}
          className="btn btn-outline btn-lg border-[#e5e5e5] rounded-full w-full mt-3"
        >
          <FcGoogle />
          Login with Google
        </button>
      </section>
    </MainSection>
  );
}

export default Register;
