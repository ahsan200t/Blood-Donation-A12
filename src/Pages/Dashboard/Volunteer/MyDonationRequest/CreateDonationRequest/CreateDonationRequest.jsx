import useAuth from "../../../../../Hooks/useAuth";
import AddDonationRequest from "../../../../../components/AddDonationRequest/AddDonationRequest";

const CreateDonationRequest = () => {
  const { user } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
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
    const volunteer = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email
    };

    try {
       const requestData={
        recipient,district,upazila,date,requester,email,hospital,address,message,volunteer
        
       } 
       console.table(requestData)
    } catch (error) {
      console.log(error)  
    }}
  return (
    <div>
      <h1>Create Donation Request</h1>
      <div className="flex justify-end gap-4">
        <h2>Donation Status:</h2>
        <button className="btn btn-xs bg-red-600 text-white">Pending</button>
      </div>
      <AddDonationRequest handleSubmit={handleSubmit} />
    </div>
  );
};

export default CreateDonationRequest;
