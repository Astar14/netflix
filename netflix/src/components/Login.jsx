import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="w-100% h-[100vh] bg-[url(https://www.pcworld.com/wp-content/uploads/2024/05/Netflix-Hintergrund-1.jpg?quality=50&strip=all)] bg-center bg-cover">
        <div className="bg-[rgba(0,0,0,0.6)] width-100% h-[100vh]">
          <div className="max-w-[1170px] mx-auto">
            <figure>
              <h1
                className="text-red-600  text-6xl p-4 font-bold cursor-pointer"
                onClick={backToHome}
              >
                NETFLIX
              </h1>
            </figure>
            <div className="flex justify-center items-center">
              <div className="w-[400px] h-[600px] bg-[rgba(0,0,0,0.7)] rounded-md p-6">
                <h1 className="text-3xl text-white font-bold mb-6">Sign In</h1>
                <form className=" flex flex-col w-full text-white">
                  <input
                    className="w-full border-2 p-4 bg-transparent  border-gray-400 mb-6 rounded"
                    type="text"
                    placeholder="Email or mobile number"
                  />

                  <input
                    className="w-full bg-transparent p-4 border-2 border-gray-400 rounded mb-6"
                    type="password"
                    placeholder="Password"
                  />

                  <button className=" p-4 rounded bg-red-600 text-xl font-bold mb-4">
                    Sign In
                  </button>

                  <h3 className="text-center mb-4 font-bold">OR</h3>
                  <button className="bg-gray-400 rounded text-xl pt-4 pb-4 font-bold">
                    Use a Sign-in Code
                  </button>
                  <h2 className="text-center mt-4 text-xl">Forgot Password?</h2>
                  <div className="flex mt-2 gap-3">
                    <input className="text-white " type="checkbox" />
                    <label>Remember Me</label>
                  </div>
                  <p className="mt-2">
                      New to Netflix?
                      <Link>
                        <h1 className="inline-block ml-2 text-blue-600  font-extrabold  mb-4">Sign up now.</h1>
                      </Link>
                    </p>
                    <p className="text-gray-400">
                      This page is protected by Google reCAPTCHA to ensure
                      you're not a bot.
                      <Link>
                        <h2 className="text-blue-600">Learn more</h2>
                      </Link>
                    </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-black w-[100%] py-[100px] border-t-[7px] border-gray-500 ">
        <div className="max-w-[1170px] mx-auto grid  ">
          <p className="text-white mt-8 mb-2">Questions? Call 000-800-919-1694</p>
        </div>
        <div className="grid grid-cols-4 text-gray-500 max-w-[1170px] mx-auto">
          <ul>
            <li>FAQ</li>
            <li>Cookie Preferences</li>
            <li></li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Corporate Information</li>
          </ul>
          <ul>
            <li>Terms Of use</li>
          </ul>
          <ul>
            <li>Privacy</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Login;
