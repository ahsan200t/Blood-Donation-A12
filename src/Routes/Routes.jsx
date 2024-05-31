import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import DonationRequest from "../Pages/DonationRequest/DonationRequest";
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
        }
    ]
  }
])
export default router;