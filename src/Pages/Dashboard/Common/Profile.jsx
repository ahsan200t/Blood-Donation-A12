import { BeatLoader } from "react-spinners";
import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";

const Profile = () => {
  const { user, loading,updateUserProfile } = useAuth();
  const [role, isLoading] = useRole();
  
  if (loading || isLoading)
    return <BeatLoader margin={10} size={40} color="#36d7b7" />;
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-2xl w-3/5">
        <button className="bg-[#F43F5E] px-4 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] btn-xs">
          Edit Profile
        </button>
        <img
          alt="profile"
          src="https://i.ibb.co/BwJH0xC/profile.jpg"
          className="w-full mb-4 rounded-t-lg h-36"
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
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black ">
                  {user?.blood}
                </span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black ">{user?.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
