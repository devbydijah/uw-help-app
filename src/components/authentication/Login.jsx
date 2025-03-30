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

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    // Load the Facebook SDK
    window.fbAsyncInit = function () {
      FB.init({
        appId: "1825382201594217", // Your Facebook App ID
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleBackClick = () => {
    navigate("/onboarding3");
  };

  const handleSignupClick = () => {
    navigate("/register");
  };

  const onSubmit = async (data) => {
    setLoading(true); // Start loading
    setLoginError(""); // Clear previous errors
    try {
      // TEMPORARY: Backend API call logic removed
      console.log("Login form submitted:", data);
      navigate("/homepage"); // Redirect to homepage
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("Login failed. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleForgotPassword = async () => {
    setLoading(true); // Start loading
    setResetMessage(""); // Clear previous messages
    try {
      // TEMPORARY: Backend API call logic removed
      console.log("Forgot password request sent for:", resetEmail);
      setResetMessage("Password reset email sent.");
    } catch (error) {
      console.error("Forgot password error:", error);
      setResetMessage("Error sending password reset email.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    setLoading(true); // Start loading
    setLoginError(""); // Clear previous errors
    try {
      // TEMPORARY: Backend API call logic removed
      console.log("Google login successful:", credentialResponse);
      navigate("/homepage"); // Redirect to homepage
    } catch (error) {
      console.error("Google login error:", error);
      setLoginError("Google login failed. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleFacebookLogin = () => {
    setLoading(true); // Start loading
    setLoginError(""); // Clear previous errors
    try {
      // TEMPORARY: Backend API call logic removed
      console.log("Facebook login initiated.");
      navigate("/homepage"); // Redirect to homepage
    } catch (error) {
      console.error("Facebook login error:", error);
      setLoginError("Facebook login failed. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="relative flex flex-col items-center p-4">
      <FaArrowLeft
        className="absolute w-4 h-4 top-[4px] left-[4px] text-zinc-900 cursor-pointer"
        onClick={handleBackClick}
        aria-label="Go back"
      />
      <div className="mt-16 text-center w-full">
        <h1 className="text-2xl font-semibold">Welcome back!</h1>
        <p className="text-lg font-normal text-neutral-500 mt-2">
          Sign in now to schedule your first waste pickup and start making an
          impact.
        </p>
      </div>
      {!forgotPassword ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 w-full max-w-sm flex flex-col gap-4"
        >
          <input
            className="border border-black p-2 rounded"
            type="text"
            placeholder="Email or Phone"
            {...register("username", {
              required: "Email or phone is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|^\d{10}$/,
                message: "Enter a valid email or phone number",
              },
            })}
            aria-invalid={errors.username ? "true" : "false"}
          />
          {errors.username && (
            <span className="text-red-500">{errors.username.message}</span>
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
            <span className="text-red-500">{errors.password.message}</span>
          )}

          {loginError && (
            <p className="text-red-500 text-sm mt-2" role="alert">
              {loginError}
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
            <span
              className="text-sm text-[#1D661B] cursor-pointer"
              onClick={() => setForgotPassword(true)}
            >
              Forgot Password?
            </span>
          </div>

          <button
            type="submit"
            className="bg-green-800 text-white p-2 rounded-full mt-4 cursor-pointer"
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      ) : (
        <div className="mt-8 w-full max-w-sm flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Reset Password</h2>
          <input
            className="border border-black p-2 rounded"
            type="email"
            placeholder="Enter your email"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
            aria-invalid={resetMessage ? "true" : "false"}
          />
          <button
            onClick={handleForgotPassword}
            className="bg-green-800 text-white p-2 rounded-full mt-4 cursor-pointer"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Email"}
          </button>
          {resetMessage && <p className="text-sm mt-2">{resetMessage}</p>}
          <span
            className="text-sm text-[#1D661B] cursor-pointer"
            onClick={() => setForgotPassword(false)}
          >
            Back to Login
          </span>
        </div>
      )}
      <div className="mt-10 text-center">
        <p className="text-sm">
          Don’t have an account?{" "}
          <span
            className="text-green-800 cursor-pointer"
            onClick={handleSignupClick}
          >
            Signup
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
          onSuccess={handleGoogleLoginSuccess}
          onError={() => {
            console.error("Google login failed");
            setLoginError("Google login failed. Please try again.");
          }}
        />
        <button
          className="bg-blue-600 text-white p-2 rounded-md mt-2 cursor-pointer flex items-center justify-center gap-2"
          onClick={handleFacebookLogin}
          disabled={loading}
        >
          <FaFacebook className="text-white" /> Login with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
