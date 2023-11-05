import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {

  const { signInWithGoogle,signIn} = useContext(AuthContext)

const location = useLocation();
const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    signIn(email,password)
    .then(result => {
      console.log(result.user);
  
      toast.success("Login Successful", {
        position: "top-right",
        autoClose: 3000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
  
      navigate(location?.state ? location.state : "/");
  
    })
    .catch(error => {
      console.error(error);
  
      toast.error("Login Failed. Please provide correct information.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
  
    })
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);

        toast.success("Login Successful", {
          position: "top-right",
          autoClose: 3000, 
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
    
        navigate(location?.state ? location.state : "/");

      })
      .catch((error) => {
        console.error(error);

        toast.error("Login Failed. Please provide correct information.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

      });
  };

  return (
    <div className="bg-[#F4F3F0] mb-10">
   
    <div>
      <h2 className="text-5xl pt-10 text-center my-10 text-[#039be5] font-bold">
        Please Login
      </h2>

      <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Write your email"
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
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-info">
            Login
          </button>
        </div>
      </form>
      <p className="text-center mt-4">
        Do not have an account? Please{" "}
        <Link className="text-[#F75B5F] font-bold" to={"/register"}>
          Register
        </Link>
      </p>
      <p className="py-5">
        <button onClick={handleGoogleSignIn} className="flex justify-center items-center mx-auto btn btn-outline font-bold">
        Sign in With Google<FcGoogle className="text-4xl ml-5"></FcGoogle>
        </button>
      </p>
    </div>
  </div>
  );
};

export default Login;