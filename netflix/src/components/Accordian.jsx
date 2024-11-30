import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Accordian = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="h-[80px] mb-2 p-4 relative bg-[#1b263b]">
        <h1 className="text-white text-[27px]">{data.question}</h1>
        <p onClick={handleClick} className="flex justify-end mr-4 cursor-pointer absolute top-8 right-1">
          {" "}
          {show ? (
            <FaMinus color="white" fontSize={20} />
          ) : (
            <FaPlus color="white" fontSize={20} />
          )}
        </p>
      </div>
      {show && <h4 className="text-white text-[27px]  p-3 bg-[#121824] mb-2">{data.answer}</h4>}
    </>
  );
};

export default Accordian;
