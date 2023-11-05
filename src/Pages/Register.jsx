/* eslint-disable no-useless-escape */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../providers/AuthProvider";
import "react-toastify/dist/ReactToastify.css";


const Register = () => {

  const {createUser} = useContext(AuthContext)
  const [registrationStatus,setRegistrationStatus] = useState({
    success:false,
    error:"",
  })

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    console.log(name,email,password,photo);
    
    if (password.length < 6) {
      setRegistrationStatus({
        success: false,
        error: "Password must be at least 6 characters.",
      });
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setRegistrationStatus({
        success: false,
        error: "Password must contain at least one capital letter.",
      });
      return;
    }

    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      setRegistrationStatus({
        success: false,
        error: "Password must contain at least one special character.",
      });
      return;
    }

    try {
      const result = await createUser(email, password);
      console.log(result.user);
e.target.reset()
     
      setRegistrationStatus({ success: true, error: "" });

      toast.success("Registration Successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error(error);

      
      setRegistrationStatus({ success: false, error: error.message });
    }
  };

  return (
    <div className="bg-[#F4F3F0] mb-10">
    
    <div>
      <ToastContainer />
      <h2 className="text-5xl pt-10 text-center my-10 text-[#039be5] font-bold">
        Please Register
      </h2>

      {registrationStatus.error && (
        <div className="text-red-500 text-center my-4">
          Registration Failed: {registrationStatus.error}
        </div>
      )}

      <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Write your name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder=" Write your email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Write your password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Your image"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-info">
            Register
          </button>
        </div>
      </form>
      <p className="text-center mt-4 pb-10">
        Already have an account? Please{" "}
        <Link className="text-[#F75B5F] font-bold" to={"/login"}>
          Login
        </Link>
      </p>
    </div>
  </div>
  );
};

export default Register;