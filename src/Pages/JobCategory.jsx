import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';


const JobCategory = () => {
  return (
    <div className="my-10">
      <h1 className="text-5xl text-center font-bold">Job Category</h1>
      <Tabs>
    <TabList className="flex justify-center mt-5">
      <Tab>Web Devlopment</Tab>
      <Tab>Digital Marketing</Tab>
      <Tab>Graphics Design</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default JobCategory;