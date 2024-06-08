import { useLoaderData } from "react-router-dom";

const DonationRequestDetails = () => {
  const details = useLoaderData();
  const {
    recipient,
    district,
    upazila,
    date,
    requester,
    email,
    hospital,
    address,
    message,
    donor
  } = details;
  console.log(details);
  return (
    <div>
      <div className="text-center rounded-b-xl bg-gray-600 text-white p-10 md:p-20 mb-16">
        <h1 className="text-5xl font-serif">DETAILS</h1>
      </div>
      <div className="border border-red-500 p-10 mb-10 rounded-xl">
        <div className="md:flex justify-evenly mb-10 font-serif">
          <div>
            <h1 className="text-3xl font-semibold mb-6">Recipient Details:</h1>
            <h2 className="my-2">
              <span className="font-semibold">Recipient Name:</span> {recipient}
            </h2>
            <h3 className="my-2">
              <span className="font-semibold">Recipient Location:</span>{" "}
              {district}
              {upazila}
            </h3>
            <h4>
              <span className="font-semibold">Date & Time:</span> {date}
            </h4>
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-6">
              Requester Details:
            </h1>
            <h2 className="my-2">
              <span className="font-semibold">Name:</span> {requester}
            </h2>
            <h3 className="my-2">
              <span className="font-semibold">Email:</span> {email}
            </h3>
            <h4 className="my-2">
              <span className="font-semibold">Hospital Name:</span> {hospital}
            </h4>
            <p className="my-2">
              <span className="font-semibold">Full-Address:</span> {address}
            </p>
            <div className="divider text-secondary">Request</div>
            <p>{message}</p>
          </div>
        </div>
        <div className="text-center">
          <button
            className="btn btn-wide bg-red-500 hover:bg-red-600 text-white"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Donate
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action justify-center border p-4 shadow-2xl">
                <form method="dialog">
                   <div className="flex flex-col">
                   <input defaultValue={donor?.name} className="border border-red-500 mb-4 p-2 rounded-xl" type="text" />
                   <input defaultValue={donor?.email} className="border border-red-500 mb-4 p-2 rounded-xl" type="email" name="" id="" />
                  <button className="btn bg-red-500 hover:bg-red-600 text-white">Confirm</button>
                   </div>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default DonationRequestDetails;
