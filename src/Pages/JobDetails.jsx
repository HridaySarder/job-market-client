import { Helmet } from "react-helmet-async";
import {  useLoaderData } from "react-router-dom";


const JobDetails = () => {
  const jobDetails = useLoaderData();

  const {title,deadline,priceRange,shortDescription} = jobDetails;

  return (
    <div>
      <Helmet>
        <title>JobMarket | JobDetails</title>
      </Helmet>
        <div className="card h-80 bg-base-100 shadow-xl space-y-3">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Deadline: {deadline}</p>
    <p>Price Range: {priceRange}</p>
    <p>{shortDescription}</p>
    
    
    
  </div>
</div> 
    </div>
  );
};

export default JobDetails;