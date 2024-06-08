import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import navLogo from "../../assets/blood.jpg";



const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setForm({ name: '', email: '', message: '' });
  };

  return (
  <div>
    <div className="text-center"> 
    <h2 className="text-4xl font-bold mb-4 ">Contact Us</h2>
     <img className="w-20 mx-auto" src={navLogo} alt="" />
     <p className="mb-6">BloodBridge</p>
    </div>
      <div className="md:flex md:flex-row-reverse justify-evenly items-center">
        <div className="p-10 bg-gray-800 text-gray-300 shadow-2xl rounded-md">
            <h1 className="text-4xl mb-10">Contact Details</h1>
             <h2 className="flex items-center justify-center gap-2 mb-3"> <FaPhoneAlt /> Phone: 01884254200 (What's app)</h2>
             <h3 className="flex items-center justify-center gap-2"> <MdOutlineEmail /> Email:  ahsanpekua200@gmail.com</h3>
        </div>
        <div className="flex-1 max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Message:</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  </div>
  );
};

export default ContactUs;
