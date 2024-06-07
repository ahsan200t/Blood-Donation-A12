/* eslint-disable react/prop-types */
import { useState } from "react";
import districts from "../../../public/district.json";
import useAuth from "../../Hooks/useAuth";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TbFidgetSpinner } from "react-icons/tb";

const AddDonationRequest = ({handleSubmit,loading}) => {
  const [districtId, setDistrictId] = useState("");
  const [upazila, setUpazila] = useState([]);
  const [upazilaId, setUpazilaId] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  const handleDistrict = (e) => {
    const getDistrictId = e.target.value;
    const getUpazilaData = districts.find(
      (district) => district.district_id === getDistrictId
    ).upazila;
    setUpazila(getUpazilaData);
    setDistrictId(getDistrictId);
  };
  const handleUpazila = (e) => {
    const upazilaId = e.target.value;
    setUpazilaId(upazilaId);
  };
  console.log(districtId)
  console.log(upazilaId)
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col  text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="recipient" className="block text-gray-600">
                Recipient Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="recipient"
                id="recipient"
                type="text"
                placeholder="Recipient Name"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="district" className="block text-gray-600">
                Recipient District
              </label>
              <select
                onChange={(e) => handleDistrict(e)}
                required
                className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md"
                name="district"
              >
                <option className="select-disabled">Select Your District</option>
                {districts.map((district, index) => (
                  <option value={district.district_id} key={index}>
                    {district.district_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="upazila" className="block text-gray-600">
                Recipient Upazila
              </label>
              <select
                onChange={(e) => handleUpazila(e)}
                required
                className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md"
                name="upazila"
              >
                <option className="select-disabled">Select Your Upazila</option>
                {upazila.map((getUpazila, index) => (
                  <option value={getUpazila.upazila_id} key={index}>
                    {getUpazila.upazila_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor="date" className="block text-gray-600">
                Donation Date And Time
              </label>
              {/* Calender */}
              <ReactDatePicker
              name="date"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                timeInputLabel="Time:"
                dateFormat="MM/dd/yyyy h:mm aa"
                showTimeInput
                required
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="requester" className="block text-gray-600">
                Requester Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="requester"
                id="requester"
                type="text"
                defaultValue={user?.displayName}
                placeholder="Requester Name"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block text-gray-600">
                Requester Email
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="email"
                id="email"
                type="text"
                defaultValue={user?.email}
                placeholder="Requester Email"
                required
              />
            </div>

            <div className="">
              <div className="space-y-1 text-sm">
                <label htmlFor="hospital" className=" text-gray-600">
                  Hospital Name
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="hospital"
                  id="hospital"
                  type="text"
                  placeholder="Hospital Name"
                />
              </div>
            </div>

            <div className="">
              <div className="space-y-1 text-sm">
                <label htmlFor="address" className=" text-gray-600">
                  Full Address
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="address"
                  id="address"
                  type="text"
                  placeholder="Full Address"
                  required
                />
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="message" className="block text-gray-600">
                Request Message
              </label>

              <textarea
                id="message"
                className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 "
                name="message"
              ></textarea>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500"
        >
           {loading ? (
                <TbFidgetSpinner className='animate-spin m-auto' />
              ) : (
                'Request  & Continew'
              )}
        </button>
      </form>
    </div>
  );
};

export default AddDonationRequest;
