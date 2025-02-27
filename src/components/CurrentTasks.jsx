import { TrendingUp, Search, Code, Clock, MoreVertical } from "lucide-react";

const tasks = [
  {
    icon: <TrendingUp className="w-4 h-4 text-gray-600" />,
    title: "Product Review for UI8 Market",
    status: "In progress",
    statusColor: "text-orange-500",
    time: "4h",
  },
  {
    icon: <Search className="w-4 h-4 text-gray-600" />,
    title: "UX Research for Product",
    status: "On hold",
    statusColor: " text-blue-500",
    time: "8h",
  },
  {
    icon: <Code className="w-4 h-4 text-gray-600" />,
    title: "App design and development",
    status: "Done",
    statusColor: "text-green-500",
    time: "32h",
  },
];

const CurrentTasks = () => {
  return (
    <div className="bg-white p-2 rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold">Current Tasks</h2>
        <span className=" text-sm text-gray-500">Done 30%</span>
        <button className="border rounded-lg text-gray-600 flex items-center">
          Week ▼
        </button>
      </div>

      {/* Task List */}
      <div className="space-y-2">
        {tasks.map((task, index) => (
          <div key={index} className="flex text-sm justify-between items-center">
            {/* Left Section */}
            <div className="flex items-center space-x-3">
              {task.icon}
              <span className="text-sm text-gray-700">{task.title}</span>
            </div>

            {/* Status */}
            <span className={`text-sm font-semibold ${task.statusColor}`}>
              ● {task.status}
            </span>

            {/* Time */}
            <div className="flex items-center space-x-1 text-gray-500">
              <Clock className="w-3 h-3" />
              <span>{task.time}</span>
            </div>

            {/* More Options */}
            <MoreVertical className="w-3 h-3 text-gray-600 cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentTasks;
