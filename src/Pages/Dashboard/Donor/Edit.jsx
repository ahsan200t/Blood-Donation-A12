
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLoaderData } from "react-router-dom";


const Edit = () => {
  const { user } = useAuth();
  const data = useLoaderData();
  const {_id,recipient,district,upazila,hospital,address,message,date}=data


  const handleUpdateDonationRequest = (e) => {
    e.preventDefault();
    const form = e.target;
    const recipient = form.recipient.value;
    const district = form.district.value;
    const upazila = form.upazila.value;
    const date = form.date.value;
    const hospital = form.hospital.value;
    const address = form.address.value;
    const message = form.message.value;
    const donor ={
      name: user.displayName,
      email: user.email,
    }

    const updatedDonationRequest = {
      recipient,
      district,
      upazila,
      date,
      hospital,
      address,
      message,
      donor
      
    };
    fetch(`http://localhost:5000/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type":"application/json",
      },
      body: JSON.stringify(updatedDonationRequest),
    })
      .then((res) => res.json())
      .then((data) => {
        
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Successfully Updated",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
        }
      });
  };
 
  return (
    <div className=" border border-red-600 p-4 m-4 md:p-24 rounded-3xl">
      <h1 className="text-3xl font-extrabold text-center mb-8 font-serif">
        Update Your Donation Request
      </h1>
      <form onSubmit={handleUpdateDonationRequest}>
        
        <div className="md:flex">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text card-title font-serif">Recipient</span>
            </label>
            <input
              type="text"
              placeholder="Blog Title"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="recipient"
              defaultValue={recipient}
              
            />
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text card-title font-serif">
                District
              </span>
            </label>
            <input
              type="text"
              placeholder="Short Description"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="district"
              defaultValue={district}
              
            />
          </div>
        </div>
        <div className="md:flex">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text card-title font-serif">Upazila</span>
            </label>
            <input
              type="text"
              placeholder="Blog Title"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="upazila"
              defaultValue={upazila}
              
            />
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text card-title font-serif">
                Date & Time
              </span>
            </label>
            <input
              type="text"
              placeholder="Short Description"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="date"
              defaultValue={date}
              
            />
          </div>
        </div>

        {/* form User Email and Photo URL */}
        <div className="md:flex">
          <div className="form-control w-full md:w-1/2 md:mr-4">
            <label className="label">
              <span className="label-text card-title font-serif">
                Requester Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="requester"
              defaultValue={user?.displayName}
             
            />
          </div>
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text card-title font-serif">
                Requester Email
              </span>
            </label>
            <input
              type="email"
              placeholder="User Email"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="email"
              defaultValue={user?.email}
              
            />
          </div>
        </div>
        <div className="md:flex">
          <div className="form-control w-full md:w-1/2 md:mr-4">
            <label className="label">
              <span className="label-text card-title font-serif">
                Hospital Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="hospital"
              defaultValue={hospital}
             
            />
          </div>
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text card-title font-serif">
                Full Address
              </span>
            </label>
            <input
              type="text"
              placeholder="User Email"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="address"
              defaultValue={address}
              
            />
          </div>
        </div>
        {/* Long Description row */}
        <div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text card-title font-serif">
                Request Message
              </span>
            </label>
            <textarea
              type="text"
              placeholder="Long Description"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="message"
              defaultValue={message}
              
            />
          </div>
        </div>
        <input
          type="submit"
          value="Update Now"
          className="btn btn-block font-bold mt-4 bg-red-500 hover:bg-red-600 text-white font-serif"
        />
      </form>
    </div>
  );
};

export default Edit;
