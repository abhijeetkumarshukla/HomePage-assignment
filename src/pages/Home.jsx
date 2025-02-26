import Center from "./Center"
import Left from "./Left"
import Right from "./Right"

 

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="grid grid-cols-4 w-[80%] h-[80%] border border-gray-300">
      <div className=" border-r col-span-1   border-gray-300">
         <Left/>
      </div>
      <div className="  col-span-2 flex items-center justify-center">
        Center (50%) <Center/>
      </div>
      <div className=" border-l  col-span-1 flex items-center justify-center border-gray-300">
        Right (25%)  <Right/>
      </div>
    </div>
  </div>
  )
}

export default Home
