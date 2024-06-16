import { BeatLoader } from "react-spinners";
import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Profile = () => {
  const { user, loading } = useAuth();
  const [role, isLoading] = useRole();
  if (loading || isLoading)
    return <BeatLoader margin={10} size={40} color="#36d7b7" />;
  return (
    <div className=" ">
      <div className="bg-white shadow-lg rounded-2xl ">
        <button
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="bg-gray-700 px-4 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] btn-xs"
        >
          Edit Profile
        </button>
        {/* Edit Modal */}
        <div>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg text-center">
                Edit Your Profile
              </h3>

              <div className="modal-action">
                <form method="dialog">
                  <div className="flex justify-between gap-2">
                    <div className="space-y-1 text-sm">
                      <label htmlFor="name" className="block text-gray-600">
                        Name
                      </label>
                      <input
                        className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                        name="name"                       
                        type="text"
                        
                      />
                    </div>

                    <div className="space-y-1 text-sm">
                      <label htmlFor="email" className="block text-gray-600">
                        Email
                      </label>
                      <input
                        className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                        name="email"                        
                        type="email"
                        
                      />
                    </div>
                  </div>

                  <div className="flex justify-between gap-2">
                    <div className="space-y-1 text-sm">
                      <label htmlFor="district" className="block text-gray-600">
                        District
                      </label>
                      <input
                        className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                        name="district"
                        type="text"
                        
                      />
                    </div>

                    <div className="space-y-1 text-sm">
                      <label
                        htmlFor="upazila"
                        className="block text-gray-600"
                      >
                        Upazila
                      </label>
                      <input
                        className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                        name="upazila"
                        type="text"
                        
                      />
                    </div>
                  </div>
                  <div className="space-y-1 text-sm">
                      <label
                        htmlFor="blood"
                        className="block text-gray-600"
                      >
                        Blood Group
                      </label>
                      <input
                        className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                        name="blood"
                        type="text"
                        
                      />
                    </div>
                  <div className="text-center">
                    <button className="btn bg-red-600 hover:bg-red-700 text-white btn-wide mt-4 ">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <img
          alt="profile"
          src="https://i.ibb.co/BwJH0xC/profile.jpg"
          className="w-full mb-4 rounded-t-lg h-56"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <p className="p-2 px-4 text-xs text-white bg-pink-500 rounded-full">
            {role}
          </p>
          <p className="mt-2 text-xl font-medium text-gray-800 ">
            User Name: {user?.displayName}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-evenly text-sm text-gray-600">
              <div>
                <p className="flex flex-col">
                  Blood Group
                  <span className="font-bold text-black ">{user?.blood}</span>
                </p>
                <p className="flex flex-col mt-3">
                  District
                  <span className="font-bold text-black ">{user?.email}</span>
                </p>
              </div>
              <div>
                <p className="flex flex-col">
                  Email
                  <span className="font-bold text-black ">{user?.email}</span>
                </p>
                <p className="flex flex-col mt-3">
                  Upazila
                  <span className="font-bold text-black ">{user?.email}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
