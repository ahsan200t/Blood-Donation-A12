import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import districtData from '../../../public/district.json'

const Register = () => {
    const [districtId, setDistrictId]=useState('');
    const [upazila, setUpazila] = useState([]);
    const [upazilaId, setUpazilaId]= useState(null)
    const [registerError, setRegisterError] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        const { email, password, photoURL, fullName } = data;
      }
      const handleDistrict = (e) =>{
        const getDistrictId = e.target.value;
        const getUpazilaData=districtData.find(district => district.district_id === getDistrictId).upazila;
        setUpazila(getUpazilaData);
        setDistrictId(getDistrictId)
        console.log(getDistrictId)
      };

      const handleUpazila = (e) =>{
       const upazilaId=e.target.value;
        setUpazilaId(upazilaId)
      }
  return (
    <div>
      <div className="flex flex-col my-10 max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 mx-auto border border-[#1E677C] shadow bg-[#E6E7D4]">
        <div className="hero-content flex-col">
          <div className="card shrink-0 w-full max-w-sm">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-black">Sign Up</h1>
              <p className="text-sm dark:text-gray-600">
                Sign Up to Register your account
              </p>
            </div>
            <div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-lato">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered border-[#E6E7D4]"
                  name="fullName"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-lato">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered border-[#E6E7D4]"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-lato">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoUrl"
                  className="input input-bordered border-[#E6E7D4]"
                  name="photoURL"
                  {...register("photoURL", { required: true })}
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text font-bold font-lato">
                    District
                  </span>
                </label>
                 <select onChange={(e)=> handleDistrict(e)} className="p-3 rounded-lg">
                    <option className="select-disabled">Select Your District</option>
                    {
                       districtData.map((getDistrict, index)=> <option value={getDistrict.district_id} key={index}>{getDistrict.district_name}</option> )
                    }
                 </select>
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text font-bold font-lato">
                    Upazila
                  </span>
                </label>
                 <select onChange={(e)=> handleUpazila(e)} className="p-3 rounded-lg">
                    <option className="select-disabled">Select Your Upazila</option>
                    {
                        upazila.map((getUpazila,index)=> <option key={index} value={getUpazila.upazila_id}>{getUpazila.upazila_name}</option>)
                    }
                 </select>
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text font-bold font-lato">
                    Password
                  </span>
                </label>
                <input
                  placeholder="Enter Your Password"
                  type="password"
                  className="input input-bordered border-[#E6E7D4]"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text font-bold font-lato">
                    Confirm Password
                  </span>
                </label>
                <input
                  placeholder="Enter Your Password"
                  type="password"
                  className="input input-bordered border-[#E6E7D4]"
                  {...register("confirm-password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#1E677C] text-white font-semibold font-lato w-full">
                  Register
                </button>
              </div>
              <div className="text-center">
                <p className="font-lato">
                  Already Have An Account?{" "}
                  <Link
                    to="/login"
                    className="link text-[#1E677C] font-semibold no-underline font-lato"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
            {registerError && (
              <p className="text-red-600 text-center mb-2">{registerError}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
