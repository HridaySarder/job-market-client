import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const AddJob = () => {

  // const location = useLocation();
const navigate = useNavigate();

  const handleAddJob = event => {
    event.preventDefault();
  
    const form = event.target;
  
    const email = form.email.value;
    const jobTitle = form.jobTitle.value;
    const deadLine = form.deadLine.value;
    const description = form.description.value;
    const category = form.category.value;
    const minimumPrice = form.minimumPrice.value;
    const maximumPrice = form.maximumPrice.value;
  
  const newJob = {email,jobTitle,deadLine,description,category,minimumPrice,maximumPrice}
  console.log(newJob);

  const addJob ={
    email:email,
    jobTitle:jobTitle,
    deadLine:deadLine,
    description:description,
    category:category,
    minimumPrice:minimumPrice,
    maximumPrice:maximumPrice
  }

  fetch('http://localhost:5000/addJobs',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(addJob)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if(data.insertedId){
      toast.success("Job added Successfully", {
        position: "top-right",
        autoClose: 3000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
  
      navigate("/myPostedJobs");
    }
  })

  }

  return (
    <div className="my-10">
       <div className="bg-[#F4F3F0] p-24 ">
      <h2 className="font-extrabold text-5xl text-center text-[#039be5]">Add Job</h2>
      <form onSubmit={handleAddJob}>
        <div className="flex gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
             
            </label>
            <span>Email</span>
            <label className="input-group">
              
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
             
            </label>
            <span>Job Title</span>
            <label className="input-group">
              
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                className="input input-bordered w-full"
              />
            </label>
          </div>
         
        </div>
        <div className="flex gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
             
            </label>
            <span>Deadline</span>
            <label className="input-group">
              
              <input
                type="text"
                name="deadLine"
                placeholder="Deadline"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control w-1/2">
            <label className="label">
             
            </label>
            <span>Description</span>
            <label className="input-group">
              
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        
         
        </div>
        <div className="flex gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
             
            </label>
            <span>Category</span>
            <label className="input-group">
              
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
         
          <div className="form-control w-1/2">
            <label className="label">
             
            </label>
            <span>Minimum Price</span>
            <label className="input-group">
              
              <input
                type="text"
                name="minimumPrice"
                placeholder="Minimum Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="">
          <div className="form-control md:w-full">
            <label className="label">
             
            </label>
            <span>Maximum Price</span>
            <label className="input-group">
              
              <input
                type="text"
                name="maximumPrice"
                placeholder="Maximum Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
         
         
        </div>
        <input type="submit" value="Add" className="btn btn-info w-full text-white mt-5" />
      </form>
    </div>
    </div>
  );
};

export default AddJob;