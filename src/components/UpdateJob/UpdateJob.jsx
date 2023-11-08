import { Helmet } from "react-helmet-async";


const UpdateJob = () => {
  return (
    <div className="my-10">
      <Helmet>
        <title>JobMarket | UpdateJob</title>
      </Helmet>
       <div className="bg-[#F4F3F0] p-24 ">
      <h2 className="font-extrabold text-5xl text-center text-[#039be5]">Update Job</h2>
      <form>
        <div className="flex gap-5">
     
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
         
        </div>
        <div className="flex gap-5">
        

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
         
        </div>
        <div className="flex gap-5">
         
         
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

          <div className="form-control w-1/2">
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
        <div className="">
       
         
         
        </div>
        <input type="submit" value="Update" className="btn btn-info w-full text-white mt-5" />
      </form>
    </div>
    </div>
  );
};

export default UpdateJob;