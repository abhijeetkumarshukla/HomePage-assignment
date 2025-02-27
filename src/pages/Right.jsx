import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineVideocam } from "react-icons/md";
import profile from "../images/right-profile.png";
import { MdDownloading } from "react-icons/md";
import { Paperclip, Smile, Mic } from "lucide-react";

const Right = () => {
  const activities = [
    {
      id: 1,
      name: "Floyd Miles",
      action: "Commented on",
      project: "Stark Project",
      time: "10:15 AM",
      message: "Hi! Next week we'll start a new project.",
      type: "text",
      img: "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      name: "Guy Hawkins",
      action: "Added a file to",
      project: "7Heros Project",
      time: "10:15 AM",
      file: { name: "Homepage.fig", size: "13.4 Mb" },
      type: "file",
      img: "data:image/jpeg;base64,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",
    },
    // {
    //   id: 3,
    //   name: "Kristin Watson",
    //   action: "Commented on",
    //   project: "7Heros Project",
    //   time: "10:15 AM",
    //   img: "https://via.placeholder.com/40",
    // },
  ];
  return (
    <div className="box-border h-full w-[90%] p-2">
      {/* --------1st div */}
      <div className="w-58 h-53 bg-gray-200  dark:bg-gray-800 shadow-lg rounded-xl flex flex-col items-center p-6">
        <div className="relative">
          <img
            src={profile}
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
          />
          <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
        </div>
        <h2 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
          Abhijeet Shukla
        </h2>
        <p className="text-gray-500 dark:text-gray-400">@abhijeetshukla</p>

        <div className="flex text-xl gap-8 mt-3">
          <IoCallOutline className="bg-white  rounded-full" />
          <MdOutlineVideocam className="bg-white  rounded-full" />
          <BsThreeDotsVertical className="bg-white  rounded-full" />
        </div>
      </div>

      {/* -----------2nd div */}

      <div className="max-w-md mx-auto p-2 mt-1 bg-white dark:bg-gray-900 ">
        <h2 className="text-center text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Activity
        </h2>
        <div className="relative   border-gray-200 dark:border-gray-700 pl-1 space-y-6">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="relative flex items-start space-x-3"
            >
              {/* Profile Image */}
              <div className="relative">
                <img
                  src={activity.img}
                  className="w-5 h-5 rounded-full border-2 border-white shadow"
                />
              </div>

              {/* Message Content */}
              <div className="flex-1">
                <p className="text-xs text-gray-900 dark:text-white font-semibold">
                  {activity.name}{" "}
                  <span className="text-gray-500 dark:text-gray-400">
                    {activity.action}
                  </span>{" "}
                  <span className="text-blue-500 cursor-pointer">
                    {activity.project}
                  </span>
                </p>
                <p className="text-xs text-gray-400">{activity.time}</p>

                {activity.type === "text" && (
                  <div className="mt-2 p-3 bg-blue-100 dark:bg-gray-800 rounded-lg text-xs text-gray-900 dark:text-white">
                    {activity.message}
                  </div>
                )}

                {activity.type === "file" && (
                  <div className="mt-2 flex items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <div className="flex-1 text-xs">
                      <p className="text-gray-900 dark:text-white">
                        {activity.file.name}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400  ">
                        {activity.file.size}
                      </p>
                    </div>
                    <button className="text-blue-500 hover:underline  ">
                      <MdDownloading />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Message Input Section */}
        <div className="mt-2 gap-1.5 border-t border-gray-200 dark:border-gray-700 pt-2 flex items-center  ">
          {/* File Input */}
          <label
            htmlFor="file-upload"
            className="cursor-pointer text-gray-500 dark:text-gray-400"
          >
            <Paperclip className="w-5 h-5" />
            <input type="file" id="file-upload" className="hidden" />
          </label>

          {/* Text Input */}
          <input
            type="text"
            placeholder="Write a message"
            className="flex-1 p-1 w-[100%]  bg-gray-200 rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-800 focus:outline-none"
          />

          {/* Emoji Icon */}
          <button className="text-gray-500  dark:text-gray-400">
            <Smile className="w-5 h-5" />
          </button>

          {/* Mic Icon */}
          <button className="text-gray-500 dark:text-gray-400">
            <Mic className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Right;
