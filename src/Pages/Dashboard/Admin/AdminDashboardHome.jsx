
import { CiSquareQuestion } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";

const AdminDashboardHome = () => {
    const allDonationRequest = useLoaderData()
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: allUsers = []} = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/users`);
      return data;
    },
  });
  return (
    <div>
      <div className="flex gap-4 justify-center items-center text-3xl font-serif mt-20">
        <p>Welcome to Mr/Mrs:</p>
        {user?.displayName}
      </div>
      <div className="mt-24">
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/*total Users Card */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-green-600 to-green-400 text-white shadow-green-500/40`}
            >
              <FaUserAlt className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Total User
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
               {allUsers.length}
              </h4>
            </div>
          </div>
          {/* Total Funding */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-600 to-blue-400 text-white shadow-blue-500/40`}
            >
              <FaDollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Total Funding
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                345
              </h4>
            </div>
          </div>
          {/* Total Donation Request */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-pink-600 to-pink-400 text-white shadow-pink-500/40`}
            >
              <CiSquareQuestion className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                total donation request
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                {allDonationRequest.length}
              </h4>
            </div>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {/* Total Sales Graph */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
            {/* Render Chart Here */}
          </div>
          {/* Calender */}
          {/* <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden'>
              <Calendar color='#F43F5E' />
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardHome;
