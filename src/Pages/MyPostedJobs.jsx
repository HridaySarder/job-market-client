import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import JobRow from "../components/JobRow/JobRow";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";



const MyPostedJobs = () => {
const {user} = useContext(AuthContext);
const [postedJob,setPostedJob] = useState([]);

const url = `http://localhost:5000/addJobs?email=${user?.email}`

useEffect(() => {
  fetch(url)
  .then(res => res.json())
  .then(data => setPostedJob(data))
},[url])

const handleDelete = id => {
  const proceed = confirm('Are you sure you want to delete');
  if(proceed){
    fetch(`http://localhost:5000/addJobs/${id}`, {
      method:'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.deletedCount > 0){
        toast.err("Job deleted Successfully", {
          position: "top-right",
          autoClose: 3000, 
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        const remaining = postedJob.filter(job => job._id !== id);
        setPostedJob(remaining)
      }
    })
  }
}

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
    <Helmet>
      <title>JobMarket | MyPostedJobs</title>
    </Helmet>

 
      {
        postedJob.map(job => <JobRow 
        key={job._id}
        job={job}
        handleDelete={handleDelete}
        ></JobRow>)
      }
   


    </div>
  );
};

export default MyPostedJobs;