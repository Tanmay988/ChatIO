import React from "react";

const Signup = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-w-96 ">
        <div className="w-full rounded-lg p-6 shadow-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 bg-gray-400 ">
          <h1 className="text-center text-3xl underline font-semibold text-gray-300 ">
            SignUp <span className="text-blue-400 ">ChatIO</span>
          </h1>

          <form>
            <div className="label ">
              <span className="label-text text-gray-300 text-xl">
                Full Name
              </span>
            </div>
            <input
              type="text"
              placeholder="Enter a Full name"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label ">
              <span className="label-text text-gray-300 text-xl">Username</span>
            </div>
            <input
              type="text"
              placeholder="Enter a username"
              className="input input-bordered w-full max-w-xs"
            />

            <div className="label ">
              <span className="label-text text-gray-300 text-xl">Gender</span>
            </div>
            <div className="form-control inline-block px-1">
              <label className="label cursor-pointer ">
                <span className="label-text pr-2 text-gray-300 text-md">
                  Female
                </span>
                <input type="radio" name="radio-10" className="radio" checked />
              </label>
            </div>
            <div className="form-control inline-block px-1 ">
              <label className="label cursor-pointer ">
                <span className="label-text pr-2 text-gray-300 text-md">
                  Male
                </span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio "
                  checked
                />
              </label>
            </div>

            <div className="label ">
              <span className="label-text text-gray-300 text-xl">Password</span>
            </div>
            <input
              type="password"
              placeholder="Enter a password"
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
              className="input input-bordered w-full max-w-xs"
            />

            <a className="link link-hover block mt-1 text-gray-200">
              Already have a account ?
            </a>

            <div>
              <button className="btn  mt-2 btn-block btn-sm ">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
