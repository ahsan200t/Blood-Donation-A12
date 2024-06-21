import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import { imageUpload } from "../../../api/utiles";


const AddBlog = () => {
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { mutateAsync } = useMutation({
    mutationFn: async (allBlog) => {
      const { data } = await axiosSecure.post(
        "/blogs",
        allBlog
        // {withCredentials:true}
      );
      return data;
    },
    onSuccess: () => {
      setLoading(false);
      toast.success("Successfully Created Blog");
    },
  });
  const handleSubmitBlog = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const title = form.title.value;
    const image = form.image.files[0];
    const content = form.content.value;
    const status = "draft"
    try {
      const allBlog = {
        title,
        image,
        content,
        status,
      };
      const image_url = await imageUpload(image)
      console.log(image_url)
      await mutateAsync(allBlog);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };
  return (
    <div className="w-full min-h-[calc(100vh-40px)] text-gray-800 rounded-xl bg-gray-50 p-10">
      <p className="text-center text-4xl font-serif font-bold mb-16 bg-red-600 text-white p-3 rounded-md">
        Create Your Blog
      </p>
      <form onSubmit={handleSubmitBlog}>
        <div className="">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600">
                Title
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="title"
                id="title"
                type="text"
                placeholder="Title"
                required
              />
            </div>

            <div className=" p-4 bg-white w-full  m-auto rounded-lg">
              <label htmlFor="description" className="block text-gray-600">
                Thumbnail Image
              </label>
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                  <input 
                  name="image"
                  type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
                    {/* <input
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
                    />
                    <div className="bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                      Upload Image
                    </div> */}
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Content
              </label>

              <textarea
                id="description"
                className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 "
                name="content"
              ></textarea>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-red-500 hover:bg-red-600"
        >
          Create & Continue
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
