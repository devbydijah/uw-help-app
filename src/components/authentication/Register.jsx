// TODO: Remember to set up HTTPS for your domain before deploying to production
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc75lzWPr4e0AY43V_k0Dy_Ofz4A4FOFY",
  authDomain: "urban-waste-help-6cb52.firebaseapp.com",
  projectId: "urban-waste-help-6cb52",
  storageBucket: "urban-waste-help-6cb52.firebasestorage.app",
  messagingSenderId: "489957749468",
  appId: "1:489957749468:web:9b150e6e013c5597157a19",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

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
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("User registered:", userCredential.user);
      // Navigate to another page or show a success message
    } catch (error) {
      console.error("Error registering user:", error);
      // Handle registration errors
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleBackClick = () => {
    navigate("/onboarding3");
  };

  const handleFacebookLogin = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Facebook sign-in successful:", result.user);
        navigate("/signupas"); // Redirect to SignUpAs page
      })
      .catch((error) => {
        console.error("Error with Facebook sign-in:", error);
        // Handle sign-in errors
      });
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="relative flex flex-col items-center">
      <FaArrowLeft
        className="absolute w-4 h-4 top-[4px] left-[4px] text-zinc-900 cursor-pointer"
        onClick={handleBackClick}
      />
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
      <div className="mt-4 w-full flex flex-col items-center gap-4">
        <GoogleLogin
          onSuccess={(response) => {
            console.log("Google sign-up successful", response);
            navigate("/signupas"); // Redirect to SignUpAs page
          }}
          onError={() => {
            console.log("Google sign-up failed");
          }}
        />
        <div
          className="fb-login-button"
          data-width=""
          data-size="large"
          data-button-type="login_with"
          data-layout="default"
          data-auto-logout-link="false"
          data-use-continue-as="false"
          onClick={handleFacebookLogin}
        ></div>
      </div>
    </div>
  );
};

export default Register;
