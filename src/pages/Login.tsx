import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Adjust the import based on your routing library

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="flex justify-center mt-24 mb-16">
      <div className="bg-gray-800 p-12 rounded-lg shadow-inner w-96">
        <div className="text-2xl text-gray-200 font-semibold tracking-widest text-center">
          LOGIN
        </div>
        <form onSubmit={onSubmit} className="mt-12">
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
          <div className="flex mt-6">
            <div className="flex items-center bg-gray-700 rounded-l-lg p-3">
              <FontAwesomeIcon icon={faLock} />
            </div>
            <input
              className="flex-grow bg-gray-700 rounded-r-lg p-3 text-gray-400 outline-none focus:border focus:border-green-400"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-6 bg-green-500 text-white font-semibold px-10 py-3 rounded-lg cursor-pointer hover:bg-green-600"
            >
              LOGIN
            </button>
          </div>
          <div className="mt-6 text-center">
            New User?{" "}
            <Link to="/signup" className="text-green-500 hover:underline">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
