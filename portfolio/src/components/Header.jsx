import React from "react";
import { Mongodb, Nodejs, Profile, Reactjs, Redux } from "../assets/index";

const Header = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 2xl:gap-20 py-20">
      <div className="flex flex-col mb-20 lg:mb-0">
        <span className="text-lg font-bold text-orange-700">
          Software Developer
        </span>
        <div className="flex gap-4 items-center my-4">
          <h1 className="text-gray-800 dark:text-neutral-100 text-4xl 2xl:text-7xl foont-bold text-center">
            I am a
          </h1>
          <div className="flex items-center justify-center text-white shadow-lg bg-blue-800 dark:bg-[#224cff10] dark:text-[#224cff] rounded-full">
            <p className="text-3xl 2xl:text-5xl font-bold px-5 py-2 pb-2 text center">
              Developer
            </p>
          </div>
        </div>

        <h1 className="text-5xl 2xl:text-7xl font-extrabold text-black dark:text-neutral-100 tracking-wider">
          Enock Omwega
        </h1>
        <p>
          Fullstack Web Developer with ability to learn and collaborate in
          rapidly changind environments and compositions.
        </p>
      </div>
    </div>
  );
};

export default Header;
