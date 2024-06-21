/* eslint-disable react/prop-types */

import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Blogs = ({ blog,refetch }) => {
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
            fetch(`http://localhost:5000/blog/${_id}`, {
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
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <img className="text-gray-900 whitespace-no-wrap" src={blog?.image} />
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{blog?.title}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-red-700 leading-tight">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-700 rounded-lg"
          ></span>
          <span className="relative  text-white text-center">
            {blog?.status}
          </span>
        </span>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative cursor-pointer inline-block px-3 py-1 font-semibold leading-tight">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-700 opacity-60 rounded-lg"
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
                  <button className="flex items-center gap-2">Publish</button>               
                <button                  
                  className="flex items-center gap-2"
                >
                  Unpublish
                </button>

               <Link>
               <button                 
                  className="flex items-center gap-2"
                  onClick={()=> handleDelete(blog?._id)}
                >
                  Delete
                </button>
               </Link>
              </ul>
            </div>
          </span>
        </span>
      </td>
    </tr>
  );
};

export default Blogs;
