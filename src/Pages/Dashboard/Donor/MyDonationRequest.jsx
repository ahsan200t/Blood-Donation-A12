import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { BeatLoader } from "react-spinners";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import MyDonation from "../../../components/MyDonation/MyDonation";

const MyDonationRequest = () => {
 const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: donationRequest = [], isLoading, refetch } = useQuery({
    queryKey: ["donationRequest", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/my-request/${user?.email}`);

      return data;
    },
  });

  if (isLoading) return <BeatLoader margin={10} size={40} color="#36d7b7" />;
  console.log(donationRequest);
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Recipient Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Recipient Location
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Donation Date & Time
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                     Donor Information
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Donation Status
                    </th>
                     <th scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                      Action
                     </th>
                  </tr>
                </thead>
                <tbody>
                {/* My Donation Request row data */}
                {
                    donationRequest.map((donation)=><MyDonation key={donation._id} donation={donation} refetch={refetch}></MyDonation>)
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyDonationRequest;
