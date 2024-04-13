import {
  faEnvelope,
  faLock,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //   const signup = async () => {
  //     const body = {
  //       name,
  //       email,
  //       password,
  //     };
  //     const res = await fetchSignup(body);
  //     if (res.status === "success") {
  //       setUser({
  //         name: res.data.user.name,
  //         email: res.data.user.email,
  //         _id: res.data.user._id,
  //       });
  //       localStorage.setItem("token", res.token);
  //       toast.success(`Welcome ${res?.data?.user?.name}`, { theme: "colored" });
  //       navigate("/");
  //     } else {
  //       if (res.message === "User already exists") {
  //         toast.error("You have already an account", { theme: "colored" });
  //       }
  //     }
  //     // console.log("signup res", res);
  //   };

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    if (name !== "" && emailRegex.test(email) && passwordRegex.test(password)) {
      //   signup();
    } else {
      if (
        name === "" &&
        emailRegex.test(email) &&
        passwordRegex.test(password)
      ) {
        toast.error("Fill name field", { theme: "colored" });
      }
    }
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="flex justify-center mt-24 mb-16">
      <div className="bg-gray-800 p-12 rounded-lg shadow-inner w-96">
        <div className="text-2xl text-gray-400 font-semibold tracking-wide text-center">
          SIGN UP
        </div>
        <form onSubmit={onSubmit} className="mt-12">
          <div className="flex mt-6">
            <div className="flex items-center bg-gray-700 rounded-l-lg p-3">
              <FontAwesomeIcon icon={faSquare} />
            </div>
            <input
              className="flex-grow bg-gray-700 rounded-r-lg p-3 text-gray-200 outline-none focus:border focus:border-green-400"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </div>
          <div className="flex mt-6">
            <div className="flex items-center bg-gray-700 rounded-l-lg p-3">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <input
              className="flex-grow bg-gray-700 rounded-r-lg p-3 text-gray-200 outline-none focus:border focus:border-green-400"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="flex mt-6 relative">
            <div className="flex items-center bg-gray-700 rounded-l-lg p-3">
              <FontAwesomeIcon icon={faLock} />
            </div>
            <input
              className="flex-grow bg-gray-700 rounded-r-lg p-3 text-gray-200 outline-none focus:border focus:border-green-400"
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            >
              {passwordVisible ? (
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-7.874m0 18c-3.721 0-6.875-2.943-7.5-7a9.97 9.97 0 011.563-7.874m0-14c-2.943 0-5.625 1.672-6.5 4.059a9.97 9.97 0 011.563-7.874m0-10a10.025 10.025 0 0113.875 18.825"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              )}
            </button>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-xs mt-2">{errorMessage}</p>
          )}
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="mt-6 bg-green-500 text-white font-semibold px-10 py-3 rounded-lg cursor-pointer hover:bg-green-600"
            >
              SIGN UP
            </button>
          </div>
          <div className="mt-6 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-green-500 hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
