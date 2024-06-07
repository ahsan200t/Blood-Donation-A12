import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { signInUser, setUser } = useAuth();
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          toast.success("Successfully Login");
          navigate(location?.state || "/");
          setUser(true);
        }
      })
      .catch(() => {
        setLoginError("Password did Not Match");
      });
  };
  return (
    <div className="bg-[#809A70] md:p-16 my-10">
      <div className="flex flex-col bg-white max-w-md rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 mx-auto border border-[#1E677C] shadow-2xl bg-transparent">
        <div className="hero-content flex-col">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-black font-lato">Sign in</h1>
            <p className="text-sm dark:text-gray-600 font-lato">
              Sign in to access your account
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-serif">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="bg-transparent border-b-2 outline-none"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-serif">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="bg-transparent border-b-2 outline-none"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div>
                <button className="btn text-white font-semibold text-xl bg-gray-700 w-full font-lato mt-4">
                  Sign In
                </button>
              </div>
              <div className="text-center">
                <p className="font-semibold">
                  Don't Have An Account?{" "}
                  <Link
                    to="/register"
                    className="link text-[#1E677C] font-bold no-underline font-lato"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
            {loginError && (
              <p className="text-red-600 text-center mb-2">{loginError}</p>
            )}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
