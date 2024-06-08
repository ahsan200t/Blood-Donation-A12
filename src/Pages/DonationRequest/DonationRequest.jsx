import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import DonationRequestCard from "../../components/DonationRequestCard/DonationRequestCard";

const DonationRequest = () => {

    const axiosSecure = useAxiosSecure();
    const { data: donationRequest = [], isLoading, refetch } = useQuery({
      queryKey: ["donationRequest"],
      queryFn: async () => {
        const { data } = await axiosSecure.get(`/donation-request`);
  
        return data;
      },
    });
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {
            donationRequest.map((donation =><DonationRequestCard key={donation._id} donation={donation}></DonationRequestCard>))
        }
      </div>
  );
};

export default DonationRequest;
