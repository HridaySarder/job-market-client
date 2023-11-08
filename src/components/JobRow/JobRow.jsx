/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";




const JobRow = ({job,handleDelete}) => {

  const {_id,email,jobTitle,deadLine,description,category,minimumPrice,maximumPrice} = job;

 

  return (
    <div>
      <div data-aos="zoom-in-right" className="card h-96 bg-base-100 shadow-xl space-y-3">
  <div className="card-body">
    <h2 className="card-title">{email}</h2>
    <p>Title: {jobTitle}</p>
    <p>Deadline: {deadLine}</p>
    <p>{description}</p>
    <p>Category: {category}</p>
    <p> Minimum Pice: {minimumPrice}</p>
    <p> Maximum Pice: {maximumPrice}</p>
    
    
    <div className="flex justify-between">
    <button onClick={() => handleDelete(_id)} className="btn btn-secondary">Delete</button>
    <Link to={'/updateJob'}>
    <button  className="btn btn-secondary">Update</button>
    </Link>
    </div>
    
    
  </div>
</div>
    </div>
  );
};

export default JobRow;