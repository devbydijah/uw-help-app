import React, { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaFacebook,
} from "react-icons/fa"; // Import FaFacebook
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const [registrationError, setRegistrationError] = useState(""); // Error state
  const [successMessage, setSuccessMessage] = useState(""); // Success state
  const navigate = useNavigate();

  const password = watch("password"); // Watch password for matching validation

  useEffect(() => {
    // Load the Facebook SDK
    window.fbAsyncInit = function () {
      FB.init({
        appId: "1825382201594217", // Replace with your Facebook App ID
        cookie: true,
        xfbml: true,
        version: "v12.0",
      });
    };

    // Load the Facebook SDK script
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  const onSubmit = async (data) => {
    setLoading(true); // Start loading
    setRegistrationError(""); // Clear previous errors
    setSuccessMessage(""); // Clear previous success messages
    try {
      const response = await axios.post(
        "https://your-backend-api.com/register",
        {
          username: data.username,
          email: data.email,
          password: data.password,
        }
      );

      // Handle successful registration
      console.log("Registration successful:", response.data);
      setSuccessMessage("Registration successful! Redirecting...");
      setTimeout(() => navigate("/signupas"), 2000); // Redirect after 2 seconds
    } catch (error) {
      // Handle registration errors
      if (error.response && error.response.data) {
        setRegistrationError(
          error.response.data.message || "Registration failed."
        );
      } else {
        setRegistrationError("An unexpected error occurred. Please try again.");
      }
      console.error("Registration error:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleBackClick = () => {
    navigate("/onboarding3");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="relative flex flex-col items-center p-4">
      <FaArrowLeft
        className="absolute w-4 h-4 top-4 left-4 text-zinc-900 cursor-pointer"
        onClick={handleBackClick}
        aria-label="Go back"
      />
      <div className="mt-16 text-center w-full">
        <h1 className="text-2xl font-semibold">Let’s Get Started!</h1>
        <p className="text-lg font-normal text-neutral-500 mt-2">
          Sign up now to schedule your first waste pickup and start making an
          impact.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 w-full max-w-sm flex flex-col gap-4"
        aria-live="polite"
      >
        <input
          className="border border-black p-2 rounded"
          type="text"
          placeholder="Username"
          {...register("username", { required: "Username is required" })}
          aria-invalid={errors.username ? "true" : "false"}
        />
        {errors.username && (
          <span className="text-red-500 text-sm">
            {errors.username.message}
          </span>
        )}

        <input
          className="border border-black p-2 rounded"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Enter a valid email address",
            },
          })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}

        <div className="relative">
          <FaLock className="absolute left-3 top-3 text-gray-400" />
          <input
            className="border border-black p-2 pl-10 pr-10 rounded w-full"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
                message:
                  "Password must contain at least one letter and one number",
              },
            })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          <div
            className="absolute right-3 top-3 cursor-pointer"
            onClick={togglePasswordVisibility}
            aria-label="Toggle password visibility"
          >
            {showPassword ? (
              <FaEyeSlash className="text-gray-400" />
            ) : (
              <FaEye className="text-gray-400" />
            )}
          </div>
        </div>
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}

        <input
          className="border border-black p-2 rounded"
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          })}
          aria-invalid={errors.confirmPassword ? "true" : "false"}
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </span>
        )}

        {registrationError && (
          <p className="text-red-500 text-sm mt-2" role="alert">
            {registrationError}
          </p>
        )}

        {successMessage && (
          <p className="text-green-500 text-sm mt-2" role="alert">
            {successMessage}
          </p>
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
        </div>

        <button
          type="submit"
          className="bg-green-800 text-white p-2 rounded-full mt-4 cursor-pointer"
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? "Registering..." : "Submit"}
        </button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm">
          Already have an account?{" "}
          <span
            className="text-green-800 cursor-pointer"
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
      <div className="mt-4 w-full flex flex-col items-center gap-1">
        <GoogleLogin
          onSuccess={(response) => {
            console.log("Google sign-up successful", response);
            navigate("/signupas");
          }}
          onError={() => {
            console.log("Google sign-up failed");
          }}
          className="rounded-md" // Ensure Google button has rounded-md
        />
        <button
          className="bg-blue-600 text-white p-2 rounded-md mt-2 cursor-pointer flex items-center justify-center gap-2" // mt remains at 2
          onClick={() => console.log("Facebook sign-up")}
        >
          <FaFacebook className="text-white" /> Login with Facebook
        </button>
      </div>
    </div>
  );
};

export default Register;
