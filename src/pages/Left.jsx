import logo from "../images/left-logo.png";
import { GoHome } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { CiCirclePlus } from "react-icons/ci";
import { FaTasks } from "react-icons/fa";
import { PiTriangleDashedBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { MdOutlineDoNotDisturbOn } from "react-icons/md";

const Left = () => {
  return (
    <div className="  h-[100%]  ">
      {/* -------1 div */}
      <div className="flex items-center justify-start p-5 gap-3  ">
        <img src={logo} alt="main logo" className="w-1/4" />
        <h1 className="font-bold">logip</h1>
      </div>

      {/* -------2 div */}
      <div className="font-medium text-gray-600   p-5 pt-5">
        <div className="flex items-center gap-2.5 mb-4">
          <GoHome className="text-xl" />
          <h2>Home</h2>
        </div>

        <div className="flex items-center gap-2.5 mb-4">
          <GrProjects />
          <h2>Projects</h2>
          <CiCirclePlus className="ml-auto text-xl text-gray-500" />
        </div>

        <div className="flex items-center gap-2.5 mb-4">
          <FaTasks />
          <h2>Tasks</h2>
          <CiCirclePlus className="ml-auto text-xl text-gray-500" />
        </div>

        <div className="flex items-center gap-2.5 mb-4">
          <PiTriangleDashedBold className="text-xl" />
          <h2>Team</h2>
        </div>

        <div className="flex items-center gap-2.5">
          <IoSettingsOutline className="text-xl" />
          <h2>Settings</h2>
        </div>
      </div>

      {/* -------3 div */}
      <div className="flex flex-col items-center w-[80%]  bg-gray-100 p-4  mt-10 gap-1.5  m-auto rounded-xl  ">
        <h2 className="font-semibold">Upgrade to Pro</h2>
        <h4 className="font-semibold text-xs text-gray-500 text-center">
          Get 1 month free and unlock
        </h4>
        <button className="bg-blue-500 w-full rounded-2xl text-xs p-2.5 mt-2">
          Upgrade
        </button>
      </div>

      {/* -------4 div */}
      <div className="text-gray-500 p-5 mt-5">
        <div className="flex items-center gap-2.5 mb-4">
          <HiOutlineInformationCircle className="text-xl" />
          <h2 className="text-xs">Help & Information</h2>
        </div>

        <div className="flex items-center gap-2.5">
          <MdOutlineDoNotDisturbOn className="text-xl" />
          <h2 className="text-xs">Log out</h2>
        </div>
      </div>
    </div>
  );
};

export default Left;
