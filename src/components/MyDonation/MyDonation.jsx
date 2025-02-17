import PropTypes from 'prop-types'


const MyDonation = ({ donation }) => {
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
          
          <span className='relative btn btn-outline btn-xs text-red-600'>{donation?.status}</span>
        </span>
        
      </td>
     
    </tr>
  )
}

MyDonation.propTypes = {
  donation: PropTypes.object,
  refetch: PropTypes.func,
}

export default MyDonation