import React, { useContext, useEffect, useState } from "react";
import Input from "../customs/Input";
import Button from "../customs/Button";
import MainSection from "../layouts/MainSection";
import SectionHeader from "../customs/SectionHeader";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import Loading from "../components/Loading";
import { AuthContext } from "../providers/Context";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

function Login() {
  const { userLogIn, user, loading, googleSignIn, setLoading } =
    useContext(AuthContext);

  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!email || !password)
      return setMessage("Please enter your email and password.");
    userLogIn(email, password)
      .then(() => {
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1200,
        });
        navigate(location.state || "/", { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        if (err.code === "auth/invalid-credential") {
          setMessage("Email or password is incorrect.");
          toast.error("Email or password is incorrect.");
        }
      });
  };

  const handleGoogle = () => {
    googleSignIn()
      .then(() => navigate(location.state || "/", { replace: true }))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (user) {
      navigate(location.state || "/", { replace: true });
    }
  }, [user, navigate, location.state]);

  if (loading) return <Loading />;

  return (
    <MainSection customClass="justify-center">
      <section className="flex flex-col justify-center items-center w-full md:w-2/3 lg:w-1/2 border-[1px] border-gray-400 rounded-2xl px-4 py-4 lg:px-6 lg:py-8">
        <SectionHeader
          customClass="text-secondery mb-10"
          title="Login"
          subtitle="Login to your account"
        />
        <form
          className="flex flex-col justify-center items-center w-full gap-5"
          onSubmit={(e) => handleLogIn(e)}
        >
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
          <Link
            to={"/forget-password"}
            className="text-sm text-right underline cursor-pointer"
          >
            Forgat Password?
          </Link>
          <p className="text-blue-600 text-sm text-center">{message}</p>
          <Button label="Login" onClick={() => {}} />
        </form>
        <p className="text-center mt-4">
          Don't have an account?
          <Link to="/join-us" className="text-primary font-semibold ml-1">
            Join Us
          </Link>
        </p>
        <div className="divider">OR</div>
        {/* Google */}
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

export default Login;
