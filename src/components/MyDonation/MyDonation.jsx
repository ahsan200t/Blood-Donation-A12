import PropTypes from 'prop-types'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const MyDonation = ({ donation, refetch }) => {
  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
             
            </div>
          </div>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>{donation?.recipient}</p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{donation?.district}</p>
        <p className='text-gray-900 whitespace-no-wrap'>{donation?.upazila}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${donation?.date}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
          {donation.donor.name}
        </p>
        <p className='text-gray-900 whitespace-no-wrap'>
          {donation.donor.email}
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
          > </span>
          <span className='relative'>{donation?.status}</span>
        </span>
        
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>
          <div className="dropdown dropdown-end">
                      <div
                        tabIndex={0}
                        className="px-5 py-4 bg-white text-4xl"
                      >
                        <BsThreeDots />
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow-2xl bg-base-200 rounded-box w-52 z-10"
                      >
                        <Link className='mb-2'>
                          <a>Update</a>
                        </Link>
                        <Link className='mb-2'>
                          <a>Delete</a>
                        </Link>
                        <Link>
                          <a>View</a>
                        </Link>
                      </ul>
                    </div>
          </span>
        </span>
        {/* Update Modal */}
      </td>
    </tr>
  )
}

MyDonation.propTypes = {
  donation: PropTypes.object,
  refetch: PropTypes.func,
}

export default MyDonation