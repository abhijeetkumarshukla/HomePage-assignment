 import logo from '../images/left-logo.png';
 import { GoHome } from "react-icons/go";
 import { GrProjects } from "react-icons/gr";
 import { CiCirclePlus } from "react-icons/ci";
 import { FaTasks } from "react-icons/fa";
 import { PiTriangleDashedBold } from "react-icons/pi";
 import { IoSettingsOutline } from "react-icons/io5";

const Left = () => {
  return (
    <div className='gap-10'>
        {/* -------1 div */}
      <div className='flex  justify-start m-5 gap-3 '>
        <img src={logo} alt="main logo" width={'25%'} /> 
        <h1 className='font-bold mt-3'>logip</h1>
      </div>

  {/* -------2 div*/}
      <div>

       <div className='flex '>
       <GoHome /> 
       <h2>Home</h2>
       </div>

       <div className='flex '>
       <GrProjects />
       <h2>Projects</h2>
       <CiCirclePlus />
       </div>

       <div className='flex '>
       <FaTasks />
       <h2>Tasks</h2>
       <CiCirclePlus />
       </div>

       <div className='flex '>
       <PiTriangleDashedBold />
       <h2>Team</h2>
       </div>

       <div className='flex '>
       <IoSettingsOutline />
       <h2>Settings</h2>
       </div>


      </div>

        {/* -------3 div */}
    </div>
  )
}

export default Left
