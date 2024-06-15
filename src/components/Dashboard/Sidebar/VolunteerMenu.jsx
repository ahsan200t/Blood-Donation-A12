import { BsFingerprint } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import MenuItem from './/MenuItem'
import { FaHome } from 'react-icons/fa'
import { CiSquareQuestion } from 'react-icons/ci'
import { IoCreateOutline } from 'react-icons/io5'

const Volunteer = () => {
  return (
    <>
      <MenuItem 
                label='Home' 
                address='/dashboard' 
                icon={FaHome}  />
                {/* My Donation Request Page */}
                <MenuItem 
                label='All Blood Donation Request' 
                address=' /dashboard/all-blood-donation-request' 
                icon={CiSquareQuestion}  />
  
                {/* Create Donation Request Page */}
                <MenuItem 
                label='Content Management' 
                address='/dashboard/content-management' 
                icon={IoCreateOutline}  />
    </>
  )
}

export default Volunteer