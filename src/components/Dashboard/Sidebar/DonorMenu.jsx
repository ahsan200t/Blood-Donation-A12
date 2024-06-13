
import MenuItem from './MenuItem'
import { FaHome } from 'react-icons/fa'
import { CiSquareQuestion } from 'react-icons/ci'
import { IoCreateOutline } from 'react-icons/io5'

const DonorMenu = () => {
  return (
    <>
       {/* Dashboard Home Page */}
       <MenuItem 
                label='Home' 
                address='/dashboard' 
                icon={FaHome}  />
                {/* My Donation Request Page */}
                <MenuItem 
                label='My Donation Requests' 
                address='/dashboard/my-donation-requests' 
                icon={CiSquareQuestion}  />
  
                {/* Create Donation Request Page */}
                <MenuItem 
                label='Create Donation Request' 
                address='/dashboard/create-donation-request' 
                icon={IoCreateOutline}  />
    </>
  )
}

export default DonorMenu