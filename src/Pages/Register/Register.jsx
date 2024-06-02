import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import districtData from '../../../public/district.json'
import useAuth from "../../Hooks/useAuth";
import registerPhoto from '../../assets/rp.jpg'
import { FaUser } from "react-icons/fa6";
import { data } from "autoprefixer";

const Register = () => {
  const {createUser,updateUserProfile, user}= useAuth();
    const [districtId, setDistrictId]=useState('');
    const [upazila, setUpazila] = useState([]);
    const [upazilaId, setUpazilaId]= useState(null)
    const [registerError, setRegisterError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        const { email, password, photoURL, fullName, district, upazila, confirm_password } = data;
        if (password.length < 6) {
          setRegisterError("Password should be at least 6 characters or longer");
          return;
        }
        if (!/[A-Z]/.test(password)) {
          setRegisterError(
            "Password should have at least one uppercase characters"
          );
          return;
        }
        if (!/[@#$&*]/.test(password)) {
          setRegisterError("Password should have at least one Special characters");
          return;
        }
        if (!/[0-9]/.test(password)) {
          setRegisterError("Password should have at least one Number Like [0-9]");
          return;
        }
        if(password !== confirm_password){
          setRegisterError("Password didn't Match");
          return;
        }
        createUser(email, password)
        .then(()=>{
          updateUserProfile(fullName, photoURL, email,district,upazila, confirm_password)
          .then(()=>{
            navigate(location?.state || "/login");
          })
        })
        
      }
      const handleDistrict = (e) =>{
        const getDistrictId = e.target.value;
        const getUpazilaData=districtData.find(district => district.district_id === getDistrictId).upazila;
        setUpazila(getUpazilaData);
        setDistrictId(getDistrictId)

      };

      const handleUpazila = (e) =>{
       const upazilaId=e.target.value;
        setUpazilaId(upazilaId)
      }
      console.log(user)
  return (
    <div className="bg-[#809A70] md:p-16 font-serif my-10">
     <div className="md:w-1/2 mx-auto">
     <div className="flex flex-col  rounded-md  dark:bg-gray-50 dark:text-gray-800 mx-auto border border-[#1E677C] shadow-xl bg-">
        <div className="hero-content flex-col">
          <div className="card shrink-0 w-full">
            <div className="mb-8 text-center text-black">
              <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
              <p className="text-sm dark:text-gray-600">
                Sign Up to Register your account
              </p>
            </div>
            <div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="">
             
             <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="bg-transparent border-b-2 outline-none"
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
                  className="bg-transparent border-b-2 outline-none"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
             
              
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text font-bold">
                    District
                  </span>
                </label>
                 <select {...register("district", { required: true })} onChange={(e)=> handleDistrict(e)} className="p-3 border-b-2 bg-transparent outline-none">
                    <option className="select-disabled">Select Your District</option>
                    {
                       districtData.map((getDistrict, index)=> <option value={getDistrict.district_id} key={index}>{getDistrict.district_name}</option> )
                    }
                 </select>
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text font-bold">
                    Upazila
                  </span>
                </label>
                 <select {...register("upazila", { required: true })} onChange={(e)=> handleUpazila(e)} className="p-3 bg-transparent border-b-2 outline-none">
                    <option className="select-disabled">Select Your Upazila</option>
                    {
                        upazila.map((getUpazila,index)=> <option key={index} value={getUpazila.upazila_id}>{getUpazila.upazila_name}</option>)
                    }
                 </select>
              </div>
              
             
             <div className="form-control relative">
                <label className="label">
                  <span className="label-text font-bold">
                    Password
                  </span>
                </label>
                <input
                  placeholder="Enter Your Password"
                  type="password"
                  className="bg-transparent border-b-2 outline-none"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text font-bold">
                    Confirm Password
                  </span>
                </label>
                <input
                  placeholder="Enter Your Password"
                  type="password"
                  className="bg-transparent border-b-2 outline-none"
                  {...register("confirm_password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoUrl"
                  className="bg-transparent border-b-2 outline-none"
                  name="photoURL"
                  {...register("photoURL", { required: true })}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gray-700 text-white font-semibold w-full">
                  Register
                </button>
              </div>
              <div className="text-center mt-2">
                <p className="text-white">
                  Already Have An Account?{" "}
                  <Link
                    to="/login"
                    className="link text-black font-semibold underline ml-2"
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
    </div>
  );
};

export default Register;
