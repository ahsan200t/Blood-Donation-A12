import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { Link, Navigate } from "react-router-dom";
import { FcSettings } from "react-icons/fc";
import { GrLogout } from "react-icons/gr";
import nabLogo from '../../../assets/blood.jpg'
import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";
import MenuItem from "./MenuItem";
import Volunteer from "./VolunteerMenu";
import AdminMenu from "./AdminMenu";
import DonorMenu from "./DonorMenu";

const Sidebar = () => {
    const { logOut,setUser } = useAuth()
    const [isActive, setActive] = useState(false)
    const [role] = useRole();
     const handleLogOut=()=>{
      logOut()
      setUser(false)
      Navigate('/login')
     }
    // Sidebar Responsive Handler
    const handleToggle = () => {
      setActive(!isActive)
    }
    return (
      <>
        {/* Small Screen Navbar */}
        <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
          <div>
            <div className='flex cursor-pointer p-4 font-bold'>
              <Link to='/'>
                <img
                  // className='hidden md:block'
                  src={nabLogo}
                  alt='logo'
                  className="h-8 w-auto mr-2"
                />
              </Link>
              <p className="text-orange-500 font-serif font-semibold">BloodBridge</p>
            </div>
          </div>
  
          <button
            onClick={handleToggle}
            className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
          >
            <AiOutlineBars className='h-5 w-5' />
          </button>
        </div>
  
        {/* Sidebar */}
        <div
          className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-red-400 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
            isActive && '-translate-x-full'
          }  md:translate-x-0  transition duration-200 ease-in-out`}
        >
          <div>
            <div>
              <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-gray-700 mx-auto'>
                <Link to='/'>
                  <img
                    src={nabLogo}
                    alt='logo'
                    className="h-8 w-auto mr-2"
                  />
                </Link>
                <p className="text-orange-500 font-serif font-bold">BloodBridge</p>
              </div>
            </div>
  
            {/* Nav Items */}
            <div className='flex flex-col justify-between flex-1 mt-6'>
              {/*  Menu Items */}
              <nav>
              {role === 'donor' &&  <DonorMenu/>}
              {role === 'volunteer' &&  <Volunteer/>}
              {role === 'admin' &&  <AdminMenu/>}
               
              </nav>
            </div>
          </div>
  
          <div>
            <hr />
  
            {/* Profile Menu */}
            <MenuItem 
                label='Profile' 
                address='/dashboard/profile' 
                icon={FcSettings}  />
          
            <button
              onClick={handleLogOut}
              className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
            >
              <GrLogout className='w-5 h-5' />
  
              <span className='mx-4 font-medium'>Logout</span>
            </button>
          </div>
        </div>
      </>
    )
};

export default Sidebar;