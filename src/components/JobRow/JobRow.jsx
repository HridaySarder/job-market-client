/* eslint-disable react/prop-types */


const JobRow = ({job}) => {

  const {email,jobTitle,deadLine,description,category,minimumPrice,maximumPrice} = job;

  return (
    <tr className="mb-10">
    <th>
      <label>
        <button className="btn btn-error">X</button>
      </label>
    </th>
    <td>
      <div className="flex items-center">
      {email}
       
      </div>
    </td>
    <td>
      {jobTitle}
    </td>
    <td>
     {deadLine}
     
    </td>
    <td>{description}</td>
    <td>{category}</td>
    <td>{minimumPrice}</td>
    <td>{maximumPrice}</td>
    <th>
      <button className="btn btn-ghost btn-xs">details</button>
    </th>
  </tr>
  );
};

export default JobRow;