/* eslint-disable react/prop-types */

import { BsThreeDots } from "react-icons/bs";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const User = ({singleUser,refetch}) => {
  const {user: loggedInUser}= useAuth();
  const axiosSecure = useAxiosSecure();
  const {mutateAsync} = useMutation({
    mutationFn: async (user)=>{
      const {data} = await axiosSecure.patch(`/users/update/${singleUser?.email}`,
        user
      )
      return data;
    },
    onSuccess: data =>{
      refetch()
      console.log(data);
      toast.success('Successfully Update User Role')
    }
  })
  const handleBlock =async()=>{
    if(loggedInUser.email === singleUser.email){
      return toast.error("Action Not Allowed")
    }
    const blockUser ={
      status: "Block"
    }
    try {
     await mutateAsync(blockUser)

    } catch (err) {
      toast.error(err.message)
    }
  }
  
  const handleMakeVolunteer =async()=>{
    if(loggedInUser.email === singleUser.email){
      return toast.error("Action Not Allowed")
    }
    const volunteerUser ={
      role: 'volunteer'
    }
    try {
      await mutateAsync(volunteerUser)    
    } catch (err) {
      toast.error(err.message)
    }

  }
  const handleMakeDonor =async()=>{
    if(loggedInUser.email === singleUser.email){
      return toast.error("Action Not Allowed")
    }
    const donorUser ={
      role: 'donor'
    }
    try {
      await mutateAsync(donorUser)    
    } catch (err) {
      toast.error(err.message)
    }

  }
  const handleMakeAdmin =async()=>{
    if(loggedInUser.email === singleUser.email){
      return toast.error("Action Not Allowed")
    }
    const adminUser ={
      role: "admin"
    }
    try {
      await mutateAsync(adminUser)
    } catch (err) {
      toast.error(err.message)
    }
  }
    return (
        <tr>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
           <img className='text-gray-900 whitespace-no-wrap' src={singleUser?.avatar} />
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
            >  
            </span>
            <span className='relative'>
            
            <div className="dropdown dropdown-top dropdown-end">
              <div tabIndex={0} className="text-4xl">
                <BsThreeDots />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-4 shadow-2xl bg-base-200 rounded-box w-40"
              >
                
                   {status === 'active' &&  ( <button className="flex items-center gap-2">
                   
                   Unblock
                   </button>)}
                  
                    <>
                    <button onClick={handleBlock} className="flex items-center gap-2">
                   
                   Block
                </button>
                    </>                              
                  <button onClick={handleMakeDonor} className="flex items-center gap-2">
                    Make Donor
                  </button>

                  <button onClick={handleMakeVolunteer} className="flex items-center gap-2">
                    Make Volunteer
                  </button>
                
               
                  <button onClick={handleMakeAdmin} className="flex items-center gap-2">
                     Make Admin
                  </button>

              </ul>
            </div>

            </span>
          </span>
        </td>
        
      </tr>
    );
};

export default User;