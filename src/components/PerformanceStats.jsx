import { ThumbsUp, Clock, TrendingUp } from "lucide-react";

const PerformanceStats = () => {
  return (
    <div className="flex justify-between bg-white p-4 rounded-lg shadow-md">
      {/* Finished */}
      <div className="flex items-center space-x-3 border-r pr-6">
        <ThumbsUp className="w-6 h-6 text-gray-600" />
        <div>
          <p className="text-gray-900 font-medium text-sm">Finished</p>
          <p className="text-lg font-semibold">18 <span className="text-green-500 text-sm">▼ +8 tasks</span></p>
        </div>
      </div>

      {/* Tracked */}
      <div className="flex items-center space-x-3 border-r px-6">
        <Clock className="w-6 h-6 text-gray-600" />
        <div>
          <p className="text-gray-900 font-medium text-sm">Tracked</p>
          <p className="text-lg font-semibold">31h <span className="text-red-500 text-sm">▲ -6 hours</span></p>
        </div>
      </div>

      {/* Efficiency */}
      <div className="flex items-center space-x-3 pl-6">
        <TrendingUp className="w-6 h-6 text-gray-600" />
        <div>
          <p className="text-gray-900 font-medium text-sm">Efficiency</p>
          <p className="text-xl font-semibold">93% <span className="text-green-500 text-sm">▼ +12%</span></p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceStats;
