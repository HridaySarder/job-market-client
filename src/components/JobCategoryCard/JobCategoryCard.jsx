/* eslint-disable react/prop-types */


const JobCategoryCard = ({job}) => {

const {title,deadline,priceRange,shortDescription} = job;

  return (
    <div>
      <div className="card h-80 bg-base-100 shadow-xl space-y-5">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Deadline:{deadline}</p>
    <p>Price Range:{priceRange}</p>
    <p>{shortDescription}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default JobCategoryCard;