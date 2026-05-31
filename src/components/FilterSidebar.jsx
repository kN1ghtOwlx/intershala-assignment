import React from 'react'

const FilterSidebar = ({filters, setFilters}) => {
  return (
    <div className='bg-white rounded-xl p-5 shadow-md'>
        <div className='flex items-center gap-2 mb-4'>
          <h2 className='text-lg text-gray-800 m-0'>Filters</h2>
        </div>
        <label className='block mb-4'>
          <span className='block mb-2 text-gray-800 text-sm font-semibold'>Profile</span>
          <input type="text" placeholder='e.g. Web Development' value={filters.profile} onChange={(e) => setFilters({ ...filters, profile: e.target.value })} className='w-full border border-gray-300 rounded-lg h-10.5 px-3 outline-none bg-white'/>
        </label>
        <label className='block mb-4'>
          <span className='block mb-2 text-gray-800 text-sm font-semibold'>Location</span>
          <input type="text" placeholder='e.g. Web Development' value={filters.location} onChange={(e) => setFilters({ ...filters, location: e.target.value })} className='w-full border border-gray-300 rounded-lg h-10.5 px-3 outline-none bg-white'/>
        </label>
        <label className='flex items-center gap-2.5 mb-3.5 text-gray-800 text-sm'>
          <input type="checkbox" checked={filters.wfh} onChange={(e) => setFilters({ ...filters, wfh: e.target.checked })}/>
          <span>Work from home</span>
        </label>
        <label className='flex items-center gap-2.5 mb-3.5 text-gray-800 text-sm'>
          <input type="checkbox" checked={filters.partTime} onChange={(e) => setFilters({ ...filters, partTime: e.target.checked })}/>
          <span>Part-time</span>
        </label>
        <label className='block mb-4'>
          <span>Duration</span>
          <select value={filters.duration} onChange={(e) => setFilters({ ...filters, duration: e.target.value })} className='w-full border border-gray-300 rounded-lg h-10.5 px-3 outline-none bg-white'>
            <option value="">Any</option>
            <option value="1">1 Month</option>
            <option value="2">2 Months</option>
            <option value="3">3 Months</option>
            <option value="4">4 Months</option>
            <option value="5">5 Months</option>
            <option value="6">6 Months</option>
            </select>
        </label>
        <label className='block mb-4'>
          <span>Desired minimum monthly stipend (₹)</span>
          <input type="range" min="0" max="50000" step="1000" value={filters.minStipend} onChange={(e) => setFilters({ ...filters, minStipend: Number(e.target.value) })} className='w-full mt-1.5'/>
          <div className='mt-2 text-gray-600 text-xs'>₹ {Number(filters.minStipend).toLocaleString('en-IN')}</div>
        </label>
        <button className='mt-2 w-full border-0 bg-sky-600 text-white rounded-lg h-10 font-bold cursor-pointer hover:bg-sky-700' onClick={() => setFilters({
          profile: '',
          location: '',
          minStipend: 0,
          duration: '',
          wfh: false,
          partTime: false,
        })}>Clear all</button>
    </div>
  )
}

export default FilterSidebar