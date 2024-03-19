import React from "react";
import { Profile } from "../assets";
import { FaUserAlt } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineAlternateEmail, MdWifiCalling2 } from "react-icons/md";

const About = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 lg:gap-20 lg:py-20">
      <div className="w-full md:h-[290px] lg:w-1/3 flex flex-col items-center border border-gray-500 dark:bg-transparent rounded-md">
        <img
          src={Profile}
          alt="about"
          className="h-[290px] p-1 rounded-md ease-in-out duration-300 hover:scale-125"
        />
      </div>
      <div className="w-full flex flex-col">
        <p className="text-3xl font-bold text-black dark:text-white">
          About me
        </p>
        <p className="text-lg text-black dark:text-gray-400 leading-10">
          A passionate full-stack developer with a love for building web
          applications that solve real-world problems. I thrive in dynamic
          environments where I can apply my skills to create innovative
          solutions and deliver high-quality software.
        </p>
        <div className="mt-5 2xl:mt-10 flex flex-wrap gap-5">
          <p className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer">
            <FaUserAlt size={18} />
            Enock
          </p>
          <p className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer">
            <MdOutlineAlternateEmail size={18} />
            omwegaenock@gmail.com
          </p>
          <a
            href="https://wa.me/+254 742 824 560"
            className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer"
          >
            <BsWhatsapp size={18} />
            +254 742 824 560
          </a>
          <p className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer">
            <MdWifiCalling2 size={20} />
            +254 742 824 560
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
