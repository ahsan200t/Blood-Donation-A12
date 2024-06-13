import { FaHome, FaUserCog } from 'react-icons/fa'
import MenuItem from './MenuItem'
import { CiSquareQuestion } from 'react-icons/ci'
import { IoCreateOutline } from 'react-icons/io5'
import { FaUsers } from "react-icons/fa";

const AdminMenu = () => {
  return (
    <>
      <MenuItem 
                label='Home' 
                address='/dashboard' 
                icon={FaHome}  />
                <MenuItem 
                label='All Users'
                address=' /dashboard/all-users'
                icon={FaUsers}
                />
                {/* My Donation Request Page */}
                <MenuItem 
                label='All Blood Donation Request' 
                address='/dashboard/all-blood-donation-request' 
                icon={CiSquareQuestion}  />
  
                {/* Create Donation Request Page */}
                <MenuItem 
                label='Content Management' 
                address='/dashboard/content-management' 
                icon={IoCreateOutline}  />
    </>
  )
}

export default AdminMenu