// Component: Register
// Purpose: Handles user registration functionality, including form validation and submission.

import React, { useState } from "react";
import { FaArrowLeft, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === data.email);

    if (userExists) {
      console.error("User already exists");
      alert("User with this email already exists");
    } else {
      const newUser = {
        username: data.username,
        email: data.email,
        password: data.password,
      };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      console.log("User registered:", newUser);
      navigate("/login");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleBackClick = () => {
    navigate("/onboarding3");
  };

  const handleFacebookLogin = () => {
    const mockFacebookUser = {
      username: "fbuser",
      email: "fbuser@example.com",
    };
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(mockFacebookUser);
    localStorage.setItem("users", JSON.stringify(users));
    console.log("Facebook sign-up successful:", mockFacebookUser);
    navigate("/signupas");
  };

  const handleGoogleLogin = () => {
    const mockGoogleUser = {
      username: "googleuser",
      email: "googleuser@example.com",
    };
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(mockGoogleUser);
    localStorage.setItem("users", JSON.stringify(users));
    console.log("Google sign-up successful:", mockGoogleUser);
    navigate("/signupas");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="relative flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 mt-4 sm:mt-6 md:mt-8 lg:mt-10">
      <FaArrowLeft
        className="absolute w-4 h-4 top-8 left-4 text-zinc-900 cursor-pointer sm:w-5 sm:h-5 md:w-6 md:h-6"
        onClick={handleBackClick}
      />
      <div className="mt-16 text-center w-full max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="w-full">
          <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
            Let’s Get Started!
          </h1>
        </div>
        <div className="w-full mt-2">
          <p className="text-lg font-normal text-neutral-500 sm:text-xl md:text-2xl">
            Sign up now to schedule your first waste pickup and start making an
            impact.
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 w-full max-w-md flex flex-col gap-4"
      >
        <input
          className="border border-neutral-500 p-2 rounded w-full"
          type="text"
          placeholder="Username"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <span className="text-red-500">Username is required</span>
        )}

        <input
          className="border border-neutral-500 p-2 rounded w-full"
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
            className="border border-neutral-500 p-2 pl-10 pr-10 rounded w-full"
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

        <div className="flex justify-between items-center mt-4">
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
          className="bg-green-800 text-white p-2 rounded-full mt-4 cursor-pointer hover:bg-green-700 transition-all"
        >
          Submit
        </button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm sm:text-base">
          Already have an account?{" "}
          <span
            className="text-green-800 cursor-pointer hover:underline"
            onClick={handleLoginClick}
          >
            Login
          </span>
        </p>
      </div>
      <div className="flex items-center mt-4 w-full justify-center">
        <hr className="w-1/4 border-t border-neutral-500" />
        <span className="mx-2 text-black font-semibold">OR</span>
        <hr className="w-1/4 border-t border-neutral-500" />
      </div>
      <div className="mt-4 w-full flex flex-col items-center gap-4">
        <button
          className="flex items-center justify-center w-full max-w-md p-2 border border-gray-300 rounded-sm shadow-sm hover:shadow-md py-3 px-15 transition-all"
          onClick={handleGoogleLogin}
        >
          <img
            src="https://www.gstatic.com/images/branding/product/1x/gsa_64dp.png"
            alt="Google Icon"
            className="w-6 h-6 mr-2"
          />
          Continue with Google
        </button>
        <button
          className="flex items-center justify-center w-full max-w-md p-2 text-white border border-blue-500 bg-blue-500 rounded-sm py-3 px-15 shadow-sm hover:shadow-md transition-all"
          onClick={handleFacebookLogin}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
            alt="Facebook Icon"
            className="w-6 h-6 mr-2"
          />
          Continue with Facebook
        </button>
      </div>
    </div>
  );
};

/**
 * Validates the registration form inputs.
 * @returns {boolean} - True if all inputs are valid, false otherwise.
 */
export default Register;
