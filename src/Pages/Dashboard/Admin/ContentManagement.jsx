import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { BeatLoader } from "react-spinners";
import Blogs from "../../../components/Blogs/Blogs";

const ContentManagement = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: AllBlog = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["AllBlog"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/blogs`);

      return data;
    },
  });
  refetch();
  if (isLoading) return <BeatLoader margin={10} size={40} color="#36d7b7" />;
  console.log(AllBlog)
  return (
    <div>
      <div className="text-right">
        <Link to="/dashboard/content-management/add-blog">
          <button className="btn bg-red-600 hover:bg-red-700 text-white">
            Add Blog
          </button>
        </Link>
      </div>
      <h1 className="mx-auto font-bold text-4xl text-center w-1/4 border-4 p-4 rounded-xl border-red-500">All Blog</h1>
      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Thumbnail
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Status
                    </th>
                   
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                    {
                        AllBlog.map((blog)=><Blogs 
                        key={blog._id}
                        blog={blog}
                        refetch={refetch}
                        ></Blogs>)
                    }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentManagement;
