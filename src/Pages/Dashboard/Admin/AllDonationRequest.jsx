import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { BeatLoader } from 'react-spinners';
import AllDonation from '../../../components/Dashboard/Sidebar/AllDonation';

const AllDonationRequest = () => {
    const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: AllDonationRequest = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["AllDonationRequest"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/donation-request`
      );

      return data;
    },
  });
  refetch();
  if (isLoading) return <BeatLoader margin={10} size={40} color="#36d7b7" />;
  console.log(AllDonationRequest)
    return (
        <>
        <div className="flex gap-4 justify-center items-center text-3xl font-serif">
          <p>Welcome to Mr/Mrs:</p>
          {user?.displayName}
        </div>
        <div>
          <h1 className="text-center mt-10 font-serif font-bold text-xl text-red-600">
            All Donation Request
          </h1>
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
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* My Donation Request row data */}
                      {
                        AllDonationRequest.map(donation=><AllDonation 
                        key={donation._id}
                        donation={donation}
                        refetch={refetch}
                        ></AllDonation>)
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    );
};

export default AllDonationRequest;