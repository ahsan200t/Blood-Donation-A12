import { Link, NavLink } from "react-router-dom";
import navLogo from "../../assets/blood.jpg";
import useAuth from "../../Hooks/useAuth";
const Navbar = () => {
 const {user, logOut}=useAuth();
  const navLinks = (
    <>
      <li>
        <NavLink to="/donation-request">Donation Request</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/funding">Funding</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-gray-800 text-white px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <div className="flex flex-col flex-shrink-0 items-center">
              <img className="h-8 w-auto rounded-full" src={navLogo} />
              <h6 className="text-xs">BloodBridge</h6>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end items-center">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div id="loginBtn" className="w-10 rounded-full">
                    <img
                      src={
                        user?.photoURL || "https://i.ibb.co/2ykmyLP/ahsan.jpg"
                      }
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-gray-700 text-white rounded-box w-52"
                >
                  <li>
                    <a>Dashboard</a>
                  </li>
                  <li onClick={logOut}>
                    <a>LogOut</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-secondary">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
