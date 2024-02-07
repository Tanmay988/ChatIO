import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../Hooks/useLogin";

const Login = () => {
  const { loading, loginFunction } = useLogin();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const inputHandeler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const SubmitHandelar = async (e) => {
    e.preventDefault();
    await loginFunction(login);
    console.log(login);
  };

  return (
    <>
      <div className="flex flex-col min-w-96 mx-auto item-center justify-center ">
        <div className="p-6 rounded-lg bg-clip-padding backdrop-blur-md bg-opacity-0 bg-gray-400 backdrop-filter w-full shadow-md">
          <h1 className="text-3xl font-semibold text-center text-gray-300 underline ">
            Login <span className=" text-blue-400 ">ChatIO</span>
          </h1>

          <form onSubmit={SubmitHandelar}>
            <div className="label ">
              <span className="label-text text-gray-300 text-xl">Username</span>
            </div>
            <input
              type="text"
              placeholder="Enter a username"
              name="username"
              onChange={inputHandeler}
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label ">
              <span className="label-text text-gray-300 text-xl">Password</span>
            </div>
            <input
              type="password"
              placeholder="Enter a password"
              name="password"
              onChange={inputHandeler}
              className="input input-bordered w-full max-w-xs"
            />

            <Link
              to={"/signup"}
              className="link link-hover block mt-1 text-gray-200"
            >
              Don't have a account ?
            </Link>

            <div>
              <button
                className="btn  mt-2 btn-block btn-sm "
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
