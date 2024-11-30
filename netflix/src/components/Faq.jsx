import React, { useState } from "react";
import { netflixData } from "./Datas.js";
import Accordian from "./Accordian.jsx";

const Faq = () => {
  const [toggle, setToggle] = useState(netflixData);


  return (
    <>
      <section className="bg-black border-t-gray-500 border-t-[8px] py-[100px]">
        <div className="w-[1000px] mx-auto mb-5">
        <h2 className="text-[50px] font-bold text-white text-center mb-4">
          Frequently Asked Questions
        </h2>
        {toggle.map((CurElem,ind) => {
          return (
            <>
              <Accordian key={ind} data={CurElem} />
            </>
          );
        })}
</div>
        <div className="flex justify-center items-center gap-2">
          <form className="flex justify-center items-center gap-2 mt-2">
            <input
              className="bg-transparent border border-white p-[15px_17px] rounded w-[350px] text-white"
              type="text"
              placeholder="Email address"
            />
            <button className="bg-red-700 text-white font-bold p-[15px_22px] rounded text-xl hover:bg-red-600 duration-300">
              Get Started{" "}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Faq;
