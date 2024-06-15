/* eslint-disable react/prop-types */
import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllDonation = ({donation,refetch}) => {
    const handleDelete = (_id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed)
            fetch(`http://localhost:5000/single-donation/${_id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                refetch();
                if (data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your Data has been deleted.",
                    icon: "success",
                  });
                }
              });
        });
      };
            
    return (
        <tr className="mb-16">
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="block relative"></div>
            </div>
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap">
                {donation?.recipient}
              </p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {donation?.district}
          </p>
          <p className="text-gray-900 whitespace-no-wrap">
            {donation?.upazila}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            ${donation?.date}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {donation?.donor?.name}
          </p>
          <p className="text-gray-900 whitespace-no-wrap">
            {donation?.donor?.email}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span
              aria-hidden="true"
              className="absolute inset-0 opacity-50 rounded-full"
            >
              {" "}
            </span>
            <span className="relative btn btn-outline btn-xs text-red-600">
              {donation?.status}
            </span>
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
                  <Link
                    to={`/dashboard/edit/${donation._id}`}
                    className="mb-2"
                  >
                    <a className="flex items-center gap-2">
                     
                      <FaEdit /> Edit
                    </a>
                  </Link>
                  <Link className="mb-2">
                    <a onClick={()=> handleDelete(donation._id)} className="flex items-center gap-2">
                      <FaTrashAlt /> Delete
                    </a>
                  </Link>
                  <Link to={`/donation-request-details/${donation._id}`}>
                    <a className="flex items-center gap-2">
                     
                      <FaEye /> View
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
export default AllDonation;