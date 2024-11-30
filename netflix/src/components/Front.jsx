import React from "react";
import { LuLoader2 } from "react-icons/lu";
import Faq
  from "./Faq";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Front = () => {

  const navigate = useNavigate()
  const signIn = () => {
    navigate('/login')
  }

  return (
    <>
      <section className="w-[100%] h-[100vh] bg-[url(https://www.pcworld.com/wp-content/uploads/2024/05/Netflix-Hintergrund-1.jpg?quality=50&strip=all)] bg-center bg-cover">
        <div className="w-[100%] h-[100vh] bg-[rgba(0,0,0,0.7)]">
          <header className="max-w-[1170px] mx-auto">
            <div className="grid sm:grid-cols-2 grid-cols-[30%_auto] items-center">
              <figure className="">
                <h1 className="text-red-600  text-6xl p-4 font-bold">
                  NETFLIX
                </h1>
              </figure>
              <div className="flex justify-end">
                <div>
                  <select className="bg-black border text-white border-white p-[6px_20px] rounded-[4px] mr-4 cursor-pointer">
                    <option value="">English</option>
                    <option value="">Hindi</option>
                    <option value="">Marathi</option>
                  </select>
                </div>
                <button className="text-white bg-red-600 rounded-[4px] p-[6px_20px]" onClick={signIn}>
                  Sign In
                </button>
              </div>
            </div>
          </header>

          <div className="max-w-[1170px]mx-auto py-[150px]">
            <h1 className="text-center text-white text-5xl font-bold">
              Unlimited movies, TV shows and more
            </h1>
            <p className="text-white text-center py-[15px] text-2xl font-bold">
              Watch anywhere. Cancel anytime.
            </p>

            <h3 className="text-center text-white text-xl py-[17px]">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="flex justify-center items-center gap-2">
              <form className="flex justify-center items-center gap-2 mt-2">
                <input
                  className="bg-transparent border border-white p-[15px_17px] rounded w-[350px] text-white"
                  type="text"
                  placeholder="Email address"
                />
                <button className="bg-red-700 text-white font-bold p-[15px_22px] rounded text-xl hover:bg-red-600 duration-500 ">
                  Get Started{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t-gray-500 border-t-[8px] py-[100px]">
        <div className="max-w-[1170px] mx-auto">
          <div className="grid grid-cols-2 items-center">
            <div className="text-white ">
              <h1 className="text-[50px] mb-4 font-bold">Enjoy on your TV</h1>
              <p className="text-xl">
                Watch on smart TVs, PlayStation, Xbox, Chromecast,
                <br /> Apple TV, Blu-ray players and more.
              </p>
            </div>
            <figure>
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                alt="img"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-black border-t-gray-500 border-t-[8px] py-[100px]">
        <div className="max-w-[1170px] mx-auto">
          <div className="grid grid-cols-2 items-center">
            <div className="relative">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                alt="img"
              />
              <div className="border-gray-500 border rounded w-[70%] absolute left-[10%]">
                <div className="flex justify-between items-center">
                  <div className="flex text-white h-[85px] p-2 rounded gap-2">
                    <img
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                      alt="img"
                    />
                    <div className="flex flex-col items-center justify-center">
                      <h1 className="text-xl">Stranger things</h1>
                      <p className="text-blue-800 font-bold">Downloading...</p>
                    </div>
                  </div>
                  <div className="">
                    <LuLoader2 />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-white">
              <h1 className="text-[45px] font-bold mb-4">
                Download your shows <br /> to watch offline
              </h1>
              <p className="text-[25px] ">
                Save your favourites easily and always have <br /> something to
                watch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t-gray-500 border-t-[8px] py-[100px]">
        <div className="max-w-[1170px] mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-white">
              <h1 className="text-[60px] font-bold mb-2">Watch everywhere</h1>
              <p className="text-[25px]">
                Stream unlimited movies and TV shows on <br />your phone, tablet,
                laptop, and TV.
              </p>
            </div>
            <div>
              <img className="h-[380px] w-[420px]"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t-gray-500 border-t-[8px] py-[100px]">
        <div className="max-w-[1170px] mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <img className="h-[400px] w-[374px] object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4xH5EWGRb5k_bKabtqMvgcW6L25OG33cZKQ&s" alt="img" />
            </div>
            <div className="text-white">
              <h1 className="text-[50px] font-bold mb-2">
              Create profiles for kids
              </h1>
              <p className="text-[25px]">
              Send children on adventures with their <br /> favourite characters in a space made just for <br /> them—free with your membership.
              </p>
            </div>
        </div>
        </div>
      </section>

      <Faq />
      <Footer />
      {/* <Login/> */}
    </>
  );
};

export default Front;
