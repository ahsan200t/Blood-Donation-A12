/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { BsThreeDots } from "react-icons/bs";

const User = ({singleUser}) => {
    const {user}= useAuth()
    console.log(singleUser,user)
    return (
        <tr>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>
           <img src={singleUser?.avatar} />
          </p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{singleUser?.email}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          {singleUser?.name}
        </td>
  
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-red-700 leading-tight'>
            <span
              aria-hidden='true'
              className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
            ></span>
            <span className='relative'>{singleUser?.role}</span>
          </span>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-red-700 leading-tight'>
            <span
              aria-hidden='true'
              className='absolute inset-0 bg-green-700 rounded-lg'
            ></span>
            <span className='relative  text-white text-center'>{singleUser?.status}</span>
          </span>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-red-700 leading-tight'>
            <span
              aria-hidden='true'
              className='absolute inset-0 bg-green-700 opacity-60 rounded-lg'
            ></span>
            <span className='relative'><div className="dropdown dropdown-top dropdown-end">
              <div tabIndex={0} className="text-4xl">
                <BsThreeDots />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-4 shadow-2xl bg-base-200 rounded-box w-40"
              >
                <Link
                  className="mb-2"
                >
                  <a className="flex items-center gap-2">
                   
                     Block
                  </a>
                </Link>
                <Link className="mb-2">
                  <a className="flex items-center gap-2">
                    Make Volunteer
                  </a>
                </Link>
                <Link>
                  <a className="flex items-center gap-2">
                     Make Admin
                  </a>
                </Link>
              </ul>
            </div>


            </span>
          </span>
        </td>
        
      </tr>
    );
};

export default User;