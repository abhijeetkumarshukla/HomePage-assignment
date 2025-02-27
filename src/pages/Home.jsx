import Center from "./Center";
import Left from "./Left";
import Right from "./Right";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen  bg-gray-300">
      <div className="grid grid-cols-[17%_60%_24%] w-[80%] h-[100%]   bg-white  rounded-5xl  ">
        <div className="border-r border-gray-300 box-border">
          <Left />
        </div>
        <div className="flex ">
          <Center />
        </div>
        <div className="border-l border-gray-300 box-border">
          <Right />
        </div>
      </div>
    </div>
  );
};

export default Home;
