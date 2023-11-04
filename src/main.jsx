import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/layouts/Root';
import Home from './components/Home/Home';
import AddJob from './Pages/AddJob';
import MyPostedJobs from './Pages/MyPostedJobs';
import MyBids from './Pages/MyBids';
import BidRequests from './Pages/BidRequests';
import Login from './Pages/Login';
import Register from './Pages/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root> ,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/addJob",
        element:<AddJob></AddJob>
      },
      {
        path:"/myPostedJobs",
        element:<MyPostedJobs></MyPostedJobs>
      },
      {
        path:"/myBids",
        element:<MyBids></MyBids>
      },
      {
        path:"/bidRequests",
        element:<BidRequests></BidRequests>
      },
      
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
