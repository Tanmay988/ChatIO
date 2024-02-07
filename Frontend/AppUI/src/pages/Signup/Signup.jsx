import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox"; // Add missing import statement
import useSignup from "../../Hooks/useSignup";

const Signup = () => {
  const { signup, loading } = useSignup();

  const [input, setInput] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleCheckboxChange = (gender) => {
    setInput({ ...input, gender });
  };

  const submitHandeler = async (e) => {
    e.preventDefault();
    await signup(input);
    setInput({
      fullname: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-w-96 ">
        <div className="w-full rounded-lg p-6 shadow-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 bg-gray-400 ">
          <h1 className="text-center text-3xl underline font-semibold text-gray-300 ">
            SignUp <span className="text-blue-400 ">ChatIO</span>
          </h1>

          <form onSubmit={submitHandeler}>
            <div className="label ">
              <span className="label-text text-gray-300 text-xl">
                Full Name
              </span>
            </div>
            <input
              type="text"
              placeholder="Enter a Full name"
              name="fullname"
              value={input.fullname}
              onChange={(e) => {
                setInput({ ...input, fullname: e.target.value });
              }}
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label ">
              <span className="label-text text-gray-300 text-xl">Username</span>
            </div>
            <input
              type="text"
              placeholder="Enter a username"
              name="username"
              value={input.username}
              onChange={(e) => setInput({ ...input, username: e.target.value })}
              className="input input-bordered w-full max-w-xs"
            />

            <div className="label ">
              <span className="label-text text-gray-300 text-xl">Gender</span>
            </div>
            <GenderCheckbox
              onCheckboxChange={handleCheckboxChange}
              selectedGender={input.gender}
            />

            <div className="label ">
              <span className="label-text text-gray-300 text-xl">Password</span>
            </div>
            <input
              type="password"
              placeholder="Enter a password"
              name="password"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label ">
              <span className="label-text text-gray-300 text-xl">
                Confirm Password
              </span>
            </div>
            <input
              type="password"
              placeholder="Enter a password"
              name="confirmPassword"
              value={input.confirmPassword}
              onChange={(e) =>
                setInput({ ...input, confirmPassword: e.target.value })
              }
              className="input input-bordered w-full max-w-xs"
            />

            <Link
              to="/login"
              className="link link-hover block mt-1 text-gray-200"
            >
              Already have a account ?
            </Link>

            <div>
              <button
                className="btn  mt-2 btn-block btn-sm "
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "signup"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
