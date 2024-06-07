import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import DonationRequest from "../Pages/DonationRequest/DonationRequest";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Funding from "../Pages/Funding/Funding";
import Register from "../Pages/Register/Register";
import Dashboard from "../layouts/Dashboard";
import MyDonationRequest from "../Pages/Dashboard/Donor/MyDonationRequest";
import CreateDonationRequest from "../Pages/Dashboard/Donor/CreateDonationRequest";
const router = createBrowserRouter([
  {
    path:'/',
    element: <Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/donation-request',
            element:<DonationRequest></DonationRequest>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/funding',
            element:<Funding></Funding>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
    ]
  },
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children:[
        {
            path:'/dashboard/my-donation-requests',
            element:<MyDonationRequest></MyDonationRequest>
        },
        {
            path:'/dashboard/create-donation-request',
            element:<CreateDonationRequest></CreateDonationRequest>
        }
    ]
  }
])
export default router;