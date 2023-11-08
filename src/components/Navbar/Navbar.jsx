import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const navLink = (
  <>
    <li className="text-lg text-sky-500">
      <NavLink to={"/"}>Home</NavLink>
    </li>
    <li className="text-lg text-sky-500">
      <NavLink to={"/addJob"}>Add Job</NavLink>
    </li>
    <li className="text-lg text-sky-500">
      <NavLink to={"/myPostedJobs"}>My Posted Jobs</NavLink>
    </li>
    <li className="text-lg text-sky-500">
      <NavLink to={"/myBids"}>My Bids</NavLink>
    </li>
    <li className="text-lg text-sky-500">
      <NavLink to={"/bidRequests"}>Bid Requests</NavLink>
    </li>
  </>
);

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showUserName, setShowUserName] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch();
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <img
          className="w-12 rounded-lg"
          src="https://i.ibb.co/rdycLRy/job-Marketplace-Logo.png"
          alt=""
        />
        <a className="normal-case text-3xl font-bold text-sky-500 ml-2">
          JobMarket{" "}
        </a>
      </div>

      <div className="navbar-center">
        
  
  <div className="dropdown  ml-10">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       
{navLink}

      </ul>
    </div>

    <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
{navLink}

    </ul>
  </div>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-2">
            <div
              className="relative inline-block"
              onMouseEnter={() => setShowUserName(true)}
              onMouseLeave={() => setShowUserName(false)}
            >
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="h-12 w-12 rounded-full cursor-pointer"
              />
              {showUserName && (
                <span className="absolute bg-white p-2 rounded shadow top-10 left-0 text-sky-500">
                  {user.displayName}
                </span>
              )}
            </div>
            <button onClick={handleLogOut} className="text-lg text-sky-500">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="text-sky-500 text-lg">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
