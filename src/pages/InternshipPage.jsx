import React, { useEffect, useMemo, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import FilterSidebar from '../components/FilterSidebar.jsx'
import InternshipCard from '../components/InternshipCard.jsx'
import { getInternships } from '../api/api.js'


const initialFilters = {
  profile: '',
  location: '',
  minStipend: 0,
  duration: '',
  wfh: false,
  partTime: false,
}

function parseMonths(durationText) {
  const match = String(durationText || '').match(/(\d+)\s*Month/i)
  return match ? Number(match[1]) : null
}

const InternshipPage = () => {
  const [internships, setInternships] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState(initialFilters)

  useEffect(() => {
    let mounted = true

    async function loadData() {
      try {
        const data = await getInternships()
        if (mounted) setInternships(data)
      } finally {
        if (mounted) setLoading(false)
      }
    }

    loadData()

    return () => {
      mounted = false
    }
  }, [])

  const filtered = useMemo(() => {
    return internships.filter((item) => {
      const profile = String(item.profile_name || '').toLowerCase()
      const location = String(item.location_names?.join(', ') || '').toLowerCase()
      const stipendValue = Number(item.stipend?.salaryValue1 || 0)

      if (filters.profile && !profile.includes(filters.profile.toLowerCase())) return false
      if (filters.location && !location.includes(filters.location.toLowerCase())) return false
      if (filters.minStipend && stipendValue < Number(filters.minStipend)) return false
      if (filters.duration) {
        const months = parseMonths(item.duration)
        if (months !== Number(filters.duration)) return false
      }
      if (filters.wfh && !item.work_from_home) return false
      if (filters.partTime && !item.part_time) return false

      return true
    })
  }, [internships, filters])

  return (
    <div className='min-h-screen'>
        <Navbar/>
        <div className='text-center pt-11 pl-4 pr-4 pb-7'>
          <h1 className='m-0 text-3xl leading-[1.2]'>{filtered.length} Total Internships</h1>
          <p className='mt-2.5 text-xl'>Latest Summer Internships in India</p>
        </div>
        <div className='w-[min(1180px,calc(100%-32px))] mx-auto mb-10 flex gap-7 items-start'>
          <aside className='w-82.5 flex-none sticky top-5'>
            <FilterSidebar filters={filters} setFilters={setFilters}/>
          </aside>
          <main className='flex-1 min-w-0'>
            {loading ? (
              <div className='bg-white rounded-xl p-7 text-center text-gray-500 shadow-md'>Loading internships...</div>
            ) : filtered.length === 0 ? (
              <div className='bg-white rounded-xl p-7 text-center text-gray-500 shadow-md'>No internships found.</div>
            ) : (
              filtered.map((item) => <InternshipCard key={item.id} item={item} />)
            )}
          </main>
        </div>
    </div>
  )
}

export default InternshipPage