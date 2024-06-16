/* eslint-disable react/prop-types */
import { BeatLoader } from "react-spinners";
import useRole from "../Hooks/useRole";
import { Navigate } from "react-router-dom";


const AdminRoute = ({children}) => {
    const [role, isLoading]= useRole();
    if(isLoading) return <BeatLoader margin={10} size={40} color="#36d7b7" />;
    if(role === 'admin') return children;
    return Navigate('/dashboard')
};

export default AdminRoute;