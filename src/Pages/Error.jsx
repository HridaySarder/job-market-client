import { Link } from "react-router-dom";


const Error = () => {
  return (
    <div>
      <Link className="btn btn-success text-center" to={'/'}>
  Back to Home
   </Link>
   <div className="flex justify-center">
   <img className="w-[1000px] h-[800px]" src={'https://i.ibb.co/J5KsFhq/Error-Page.jpg'} alt="" />
   </div>
   
    </div>
  );
};

export default Error;