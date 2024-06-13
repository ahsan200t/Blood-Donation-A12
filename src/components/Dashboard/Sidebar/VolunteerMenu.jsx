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

      <div className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'>
        <GrUserAdmin className='w-5 h-5' />

        <span className='mx-4 font-medium'>Become A Host</span>
      </div>
    </>
  )
}

export default Volunteer