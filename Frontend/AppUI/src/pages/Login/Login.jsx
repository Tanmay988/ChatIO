import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex flex-col min-w-96 mx-auto item-center justify-center ">
        <div className="p-6 rounded-lg bg-clip-padding backdrop-blur-md bg-opacity-0 bg-gray-400 backdrop-filter w-full shadow-md">
          <h1 className="text-3xl font-semibold text-center text-gray-300 underline ">
            Login <span className=" text-blue-400 ">ChatIO</span>
          </h1>
          <form>
            <div className="label ">
              <span className="label-text text-gray-300 text-xl">Username</span>
            </div>
            <input
              type="text"
              placeholder="Enter a username"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label ">
              <span className="label-text text-gray-300 text-xl">Password</span>
            </div>
            <input
              type="password"
              placeholder="Enter a password"
              className="input input-bordered w-full max-w-xs"
            />

            <a className="link link-hover block mt-1 text-gray-200">
              Don't have a account ?
            </a>

            <div>
              <button className="btn  mt-2 btn-block btn-sm ">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
