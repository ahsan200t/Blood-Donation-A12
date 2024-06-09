/* eslint-disable react/prop-types */
import { BsThreeDots } from "react-icons/bs";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const RecentDonationRequest = ({recentRequest}) => {
  return (
    <tr className="mb-16">
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative"></div>
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">
              {recentRequest?.recipient}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{recentRequest?.district}</p>
        <p className="text-gray-900 whitespace-no-wrap">{recentRequest?.upazila}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">${recentRequest?.date}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {recentRequest.donor.name}
        </p>
        <p className="text-gray-900 whitespace-no-wrap">
          {recentRequest.donor.email}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          >
            {" "}
          </span>
          <span className="relative">{recentRequest?.status}</span>
        </span>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">
            <div className="dropdown dropdown-top dropdown-end">
              <div tabIndex={0} className="text-4xl">
                <BsThreeDots />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-4 shadow-2xl bg-base-200 rounded-box w-40"
              >
                <Link to={`/dashboard/edit/${recentRequest._id}`} className="mb-2">
                  <a className="flex items-center gap-2"> <FaEdit/> Edit</a>
                </Link>
                <Link className="mb-2">
                  <a className="flex items-center gap-2"> <FaTrashAlt/> Delete</a>
                </Link>
                <Link to={`/donation-request-details/${recentRequest._id}`}>
                  <a className="flex items-center gap-2"> <FaEye/> View</a>
                </Link>
              </ul>
            </div>
          </span>
        </span>
        {/* Update Modal */}
      </td>
    </tr>
  );
};

export default RecentDonationRequest;
