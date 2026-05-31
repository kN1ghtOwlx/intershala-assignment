import React from 'react'

function formatLocation(item) {
    if (item.work_from_home) return 'Work from home'
    const locations = item.location_names || []
    return locations.length ? locations.join(', ') : 'Location not available'
}

const InternshipCard = ({item}) => {
  return (
    <div className='bg-white rounded-xl p-5 mb-4 shadow-md'>
        <div className='flex justify-between gap-4 items-start'>
            <div>
                <h3 className='m-0 text-lg text-gray-800'>
                {item.profile_name}
                </h3>
                <p className='mt-1.5 text-sm text-gray-500'>
                {item.company_name}
                </p>
            </div>

            {item.company_logo ? (
            <img src={`https://internshala.com/${item.company_logo}`} alt={item.company_name} className='w-14 h-14 rounded-xl bg-gray-100 object-contain'   />
            ) : (
            <div className='w-14 h-14 rounded-xl bg-gray-100 grid place-items-center font-bold text-sky-600'>
                {item.company_name?.[0] || 'I'}
            </div>
            )}
        </div>
        <div className='flex flex-wrap gap-4 mt-4 text-sm text-gray-600'>
            <span>📍 {formatLocation(item)}</span>
            <span>⏳ {item.duration}</span>
            <span>💰 {item.stipend?.salary || 'Unpaid'}</span>
      </div>
      {item.labels_app_in_card?.length ? (
            <div className='flex flex-wrap gap-2 mt-3.5'>
                {item.labels_app_in_card.map((label) => (
                        <span key={label} className='bg-blue-50 border border-blue-100 text-blue-600 rounded-full px-2.5 py-1 text-xs'>{label}</span>
                    ))}
            </div>
      ) : null}
    </div>
  )
}

export default InternshipCard