import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import DonationRequest from "../Pages/DonationRequest/DonationRequest";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Funding from "../Pages/Funding/Funding";
import Register from "../Pages/Register/Register";
import Dashboard from "../layouts/Dashboard";
import PrivetRoute from '../Routes/PrivetRoute';
import MyDonationRequest from "../Pages/Dashboard/Donor/MyDonationRequest";
import CreateDonationRequest from "../Pages/Dashboard/Donor/CreateDonationRequest";
import DonationRequestDetails from "../Pages/DonationRequestDetails/DonationRequestDetails";
import DashboardHome from "../Pages/Dashboard/Donor/DashboardHome";
import Edit from "../Pages/Dashboard/Donor/Edit";
import Profile from "../Pages/Dashboard/Common/Profile";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import AdminDashboardHome from "../Pages/Dashboard/Admin/AdminDashboardHome";



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
            path:'/donation-request-details/:id',
            element: <PrivetRoute><DonationRequestDetails></DonationRequestDetails></PrivetRoute> ,
            loader: ({ params }) =>
                fetch(`http://localhost:5000/donation-details/${params.id}`)
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
            path:'/dashboard',
            element:<DashboardHome></DashboardHome>
        },
        
        {
          path:'/dashboard/edit/:id',
          element:<Edit></Edit>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/update/${params.id}`)
        },
        {
            path:'/dashboard/my-donation-requests',
            element:<MyDonationRequest></MyDonationRequest>
        },
        {
            path:'/dashboard/create-donation-request',
            element:<CreateDonationRequest></CreateDonationRequest>
        },
        {
            path: 'profile',
            element:<Profile></Profile>
        },
        {
            path:'/dashboard/all-users',
            element:<AllUsers></AllUsers>
        },
        {
            path:'/dashboard/admin-home',
            element:<AdminDashboardHome/>,
            loader: ()=> fetch("http://localhost:5000/donation-request")
        }
    ]
  }
])
export default router;