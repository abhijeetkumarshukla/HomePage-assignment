import { TbCalendarDue } from "react-icons/tb";
import WeatherGraph from "../components/Chat";
import PerformanceStats from "../components/PerformanceStats";
import CurrentTasks from "../components/CurrentTasks";

const Center = () => {
  return (
    <div className=" px-10     w-full">
      {/* first div ------------ */}
      <div className="flex flex-row gap-32    h-fit  mt-3 w[70%]">
        <div>
          <h1 className="text-2xl font-bold">Hello, Abhijeet</h1>
          <p className="text-sm  ">
            Track team process here. you almost reach a goal!
          </p>
        </div>
        <div className="flex gap-1.5">
          <h2 className="text-sm font-medium"> 27 feb,2025</h2>
          <TbCalendarDue className="text-xl bg-gray-200 rounded-full" />
        </div>
      </div>

      {/* div 2 ---------------- */}
      <div className="mt-3 border-t border-gray-200 dark:border-gray-700 pt-2"></div>

      <div className="mt-2">
        <PerformanceStats />
      </div>

      <div className="mt-3 border-t border-gray-200 dark:border-gray-700 pt-2"></div>
      {/* -----------div3 */}

      <div>
        <WeatherGraph />
      </div>
      {/* ------div 4 */}

      <div>
        <CurrentTasks />
      </div>
    </div>
  );
};

export default Center;
