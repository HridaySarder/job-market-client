/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const JobCategoryCard = ({job}) => {

const {_id,title,deadline,priceRange,shortDescription} = job;

  return (
    <div>
      <div className="card h-80 bg-base-100 shadow-xl space-y-3">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Deadline: {deadline}</p>
    <p>Price Range: {priceRange}</p>
    <p>{shortDescription}</p>
    
    <Link to={`/jobDetails/${_id}`}>
     <button className="btn btn-secondary">Bid Now</button>
     </Link>
    
  </div>
</div>
    </div>
  );
};

export default JobCategoryCard;