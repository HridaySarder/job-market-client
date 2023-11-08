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
import Error from './Pages/Error';
import AuthProvider from './providers/AuthProvider';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './routes/PrivateRoute';
import JobDetails from './Pages/JobDetails';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root> ,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/addJob",
        element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path:"/myPostedJobs",
        element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
      },
      {
        path:"/myBids",
        element:<PrivateRoute><MyBids></MyBids></PrivateRoute>
      },
      {
        path:"/bidRequests",
        element:<PrivateRoute><BidRequests></BidRequests></PrivateRoute>
      },
      {
        path:"/jobDetails/:id",
        element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
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
    <HelmetProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </HelmetProvider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
