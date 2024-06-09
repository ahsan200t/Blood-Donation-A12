import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen mb-10"
        style={{
          backgroundImage: "url(https://i.ibb.co/WpYPqFd/banner1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80 bg-no-repeat bg-cover"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">A Bottle of Blood Saved My Life. Was it Yours?</h1>
            <p className="mb-5">
            Blood donation is a vital part of worldwide healthcare. It relates to blood transfusion as a life-sustaining and life-saving procedure.
            </p>
            <div className="flex justify-evenly">
             <Link to='/register'> 
              <button className="btn btn-outline font-bold font-serif text-red-500">Join as a Donor
              <FaArrowRightLong />
              </button>
             </Link>
              <button className="btn btn-outline text-green-600 font-bold font-serif">Search Donors
              <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
