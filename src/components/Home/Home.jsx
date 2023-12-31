import { Helmet } from "react-helmet-async";
import JobCategory from "../../Pages/JobCategory";
import Banner from "../Banner/Banner";
import ExtraPart1 from "../ExtraPart/ExtraPart1";
import ExtraPart2 from "../ExtraPart/ExtraPart2";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>JobMarket | Home</title>
      </Helmet>
      <Banner></Banner>
      <ExtraPart2></ExtraPart2>
      <JobCategory></JobCategory>
      <ExtraPart1></ExtraPart1>
    </div>
  );
};

export default Home;