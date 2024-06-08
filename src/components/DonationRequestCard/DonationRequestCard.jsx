import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const DonationRequestCard = ({ donation }) => {
  const { recipient, district, upazila, date, _id } = donation;

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Recipient Name: {recipient}</h2>
        <p>
          Location: {district} {upazila}
        </p>
        <p>Date & Time: {date}</p>
        <div className="card-actions">
          <Link to={`/donation-request-details/${_id}`}>
            <button className="btn btn-wide bg-red-500 text-white hover:bg-red-600">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationRequestCard;
