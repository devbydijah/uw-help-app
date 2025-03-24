import React, { useState } from "react";
import { FaArrowLeft, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import googleLogo from "../../assets/images/google.png";
import facebookLogo from "../../assets/images/facebook.png";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative flex flex-col items-center">
      <FaArrowLeft className="absolute w-4 h-4 top-[4px] left-[4px] text-zinc-900 cursor-pointer" />
      <div className="mt-16 text-center w-[335.198px] h-[88px] top-[124.88px] left-[41.8px] gap-[11px] flex flex-col items-center">
        <div className="w-[335.2px] h-[29px] leading-[120%] tracking-[-2%]">
          <h1 className="text-2xl font-semibold">Let’s Get Started!</h1>
        </div>
        <div className="w-[335.2px] h-[48px] text-neutral-500">
          <p className="text-lg font-normal">
            Sign up now to schedule your first waste pickup and start making an
            impact.
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 w-[335.198px] flex flex-col gap-4"
      >
        <input
          className="border border-black p-2 rounded"
          type="text"
          placeholder="Username"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <span className="text-red-500">Username is required</span>
        )}

        <input
          className="border border-black p-2 rounded"
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500">Email is required</span>
        )}

        <div className="relative">
          <FaLock className="absolute left-3 top-3 text-gray-400" />
          <input
            className="border border-black p-2 pl-10 pr-10 rounded w-full"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <div
            className="absolute right-3 top-3 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <FaEyeSlash className="text-gray-400" />
            ) : (
              <FaEye className="text-gray-400" />
            )}
          </div>
        </div>
        {errors.password && (
          <span className="text-red-500">Password is required</span>
        )}

        <div className="flex justify-between items-center mt-4 w-[335.198px]">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe" className="text-sm cursor-pointer">
              Remember Me
            </label>
          </div>
          <a href="#" className="text-sm text-[#1D661B]">
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="bg-green-800 text-white p-2 rounded-full mt-4 cursor-pointer"
        >
          Submit
        </button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm">
          Already have an account?{" "}
          <a href="#" className="text-green-800">
            Login
          </a>
        </p>
      </div>
      <div className="flex items-center mt-4 w-full justify-center">
        <hr className="w-1/4 border-t border-neutral-500" />
        <span className="mx-2 text-black font-semibold">OR</span>
        <hr className="w-1/4 border-t border-neutral-500" />
      </div>
      <div className="mt-4 w-full flex flex-col items-center gap-4">
        <button className="flex items-center border border-neutral-500 rounded px-4 py-2 w-[335.198px] cursor-pointer">
          <img src={googleLogo} alt="Google Logo" className="w-6 h-6 mr-2" />
          <span className="text-neutral-500">Sign Up with Google</span>
        </button>
        <button className="flex items-center border border-blue-500 bg-blue-500 rounded px-4 py-2 w-[335.198px] cursor-pointer">
          <img
            src={facebookLogo}
            alt="Facebook Logo"
            className="w-6 h-6 mr-2"
          />
          <span className="text-white">Sign Up with Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
