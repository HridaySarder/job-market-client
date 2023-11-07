import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import JobRow from "../components/JobRow/JobRow";



const MyPostedJobs = () => {
const {user} = useContext(AuthContext);
const [postedJob,setPostedJob] = useState([]);

const url = `http://localhost:5000/addJobs?email=${user?.email}`

useEffect(() => {
  fetch(url)
  .then(res => res.json())
  .then(data => setPostedJob(data))
},[])

  return (
    <div>
    

      
  <table className="table table-xs">
  <thead>
      <tr>
        <th>
         
        </th>
        <th className="text-xl text-violet-600">Email</th>
        <th className="text-xl text-violet-600">Title</th>
        <th className="text-xl text-violet-600">Deadlin</th>
        <th className="text-xl text-violet-600">Description</th>
        <th className="text-xl text-violet-600">Category</th>
        <th className="text-xl text-violet-600">Minimum Price</th>
        <th className="text-xl text-violet-600">Maximum Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        postedJob.map(job => <JobRow 
        key={job._id}
        job={job}
        ></JobRow>)
      }
   
  </tbody>
  </table>


    </div>
  );
};

export default MyPostedJobs;