import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import AddDonationRequest from "../../../components/AddDonationRequest/AddDonationRequest";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";

const CreateDonationRequest = () => {
  const navigate=useNavigate();
  const [loading,setLoading]=useState(false)
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { mutateAsync } = useMutation({
    mutationFn: async (requestData) => {
      const { data } = await axiosSecure.post('/donation-request', requestData);
      return data;
    },
    onSuccess: () => {
      console.log("data saved successfully");
      setLoading(false);
      toast.success('Successfully Added Request')
      navigate('/dashboard/my-donation-requests')
      
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const form = e.target;
    const recipient = form.recipient.value;
    const district = form.district.value;
    const upazila = form.upazila.value;
    const date = form.date.value;
    const requester = form.requester.value;
    const email = form.email.value;
    const hospital = form.hospital.value;
    const address = form.address.value;
    const message = form.message.value;
    const donor = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };

    try {
      const requestData = {
        recipient,
        district,
        upazila,
        date,
        requester,
        email,
        hospital,
        address,
        message,
        donor,
      };
      await mutateAsync(requestData);
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>Create Donation Request</h1>
      <div className="flex justify-end gap-4">
        <h2>Donation Status:</h2>
        <button className="btn btn-xs bg-red-600 text-white">Pending</button>
      </div>
      <AddDonationRequest loading={loading} handleSubmit={handleSubmit} />
    </div>
  );
};

export default CreateDonationRequest;
