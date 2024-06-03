import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { AiOutlineBars } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { FcSettings } from "react-icons/fc";
import { GrLogout } from "react-icons/gr";
import nabLogo from '../../../assets/blood.jpg'
import { IoCreateOutline } from "react-icons/io5";
import { CiSquareQuestion } from "react-icons/ci";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
    const { logOut } = useAuth()
    const [isActive, setActive] = useState(false)
  
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
          className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#D99904] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
            isActive && '-translate-x-full'
          }  md:translate-x-0  transition duration-200 ease-in-out`}
        >
          <div>
            <div>
              <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-gray-700 mx-auto'>
                <Link to='/'>
                  <img
                    // className='hidden md:block'
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
              {/* Conditional toggle button here.. */}
  
              {/*  Menu Items */}
              <nav>
                {/* My Donation Request Page */}
                <NavLink
                  to='/dashboard'
                  end
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-400   hover:text-gray-700 ${
                      isActive ? 'bg-gray-400  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <FaHome className='w-5 h-5' />
                  <span className='mx-4 font-medium'>
                   
                    Home</span>
                </NavLink>
  
                <NavLink
                  to='/dashboard/my-donation-requests'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-400   hover:text-gray-700 ${
                      isActive ? 'bg-gray-400  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <CiSquareQuestion className='w-8 h-8' />
                  <span className='mx-4 font-medium'>My Donation Requests</span>
                </NavLink>
  
                {/* Create Donation Request Page */}
                <NavLink
                  to='/dashboard/create-donation-request'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-400   hover:text-gray-700 ${
                      isActive ? 'bg-gray-400  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <IoCreateOutline className='w-8 h-8' />
                  <span className='mx-4 font-medium'>Create Donation Request</span>
                </NavLink>
               
              </nav>
            </div>
          </div>
  
          <div>
            <hr />
  
            {/* Profile Menu */}
            <NavLink
              to='/dashboard/profile'
              className={({ isActive }) =>
                `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                  isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                }`
              }
            >
              <FcSettings className='w-5 h-5' />
  
              <span className='mx-4 font-medium'>Profile</span>
            </NavLink>
            <button
              onClick={logOut}
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