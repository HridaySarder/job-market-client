/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import JobCategoryCard from "../components/JobCategoryCard/JobCategoryCard";


const JobCategory = () => {

  const [categoryJobs, setCategoryJobs] = useState([]);
  
  useEffect(() => {
    fetch("https://assignment-11-server-site-khaki.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => setCategoryJobs(data));
  }, []);

  const uniqueCategories = [...new Set(categoryJobs.map((job) => job.category))];
    const [activeTab, setActiveTab] = useState(uniqueCategories[1]);
  
    // const handleTabSelect = (tabName) => {
    //   setActiveTab(tabName);
    // };

  return (
    <div className="my-10">
      <h1 className="text-5xl text-center font-bold my-10">Job Category</h1>
      <Tabs>
      {/* selectedIndex={uniqueCategories.findIndex((category) => category === activeTab)} */}
          {/* onSelect={(index) => handleTabSelect(uniqueCategories[index])} */}

    <TabList className="flex justify-center mt-5 mb-10">
    {uniqueCategories.map((category) => (
              <Tab
                key={category}
                className={`px-4 py-2 text-lg rounded-md mr-2 cursor-pointer ${
                  activeTab === category ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                }`}
              >
                {category}
              </Tab>
            ))}
    </TabList>
          {uniqueCategories.map((category) => (
            <TabPanel key={category}>
              <div className="grid grid-cols-1 sm:mx-auto md:grid-cols-2 lg:grid-cols-3 gap-5">
                {categoryJobs
                  .filter((job) => job.category === category)
                  .map((filteredJob) => (
                    <JobCategoryCard key={filteredJob._id} job={filteredJob}></JobCategoryCard>
                  ))}
              </div>
            </TabPanel>
          ))}
  </Tabs>
    </div>
  );
};

export default JobCategory;