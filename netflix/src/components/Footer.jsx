import React from "react";

const Footer = () => {
  return (
    <section className="bg-black border-t-gray-500 border-t-[8px] py-[100px]">
      <div className="max-w-[1170px] mx-auto">
        <h3 className="text-gray-400 text-[18px]">
          Questions?{" "}
          <a className="underline " href="">
            Call 000-800-919-1694
          </a>
        </h3>
        <div className="grid grid-cols-4 text-gray-400 mt-3">
          <div>
            <ul className="underline text-[18px] cursor-pointer ">
              <li>FAQ</li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>Speed Test</li>
              <select className="bg-black border  border-white p-[6px_20px] rounded-[4px] mr-4 mt-3 mb-4 cursor-pointer">
                <option value="">English</option>
                <option value="">Hindi</option>
                <option value="">Marathi</option>
              </select>
              <li>Netflix India</li>
            </ul>
          </div>

          <div>
            <ul className="underline text-[18px] cursor-pointer">
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
              <li>Legal Notices</li>
            </ul>
          </div>

          <div>
            <ul className="underline text-[18px] cursor-pointer">
              <li>Account</li>
              <li>ways to watch</li>
              <li>Corporate Information</li>
              <li>Only on Netflix</li>
            </ul>
          </div>

          <div>
            <ul className="underline text-[18px] cursor-pointer">
              <li>Media Center</li>
              <li>Terms of use</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
