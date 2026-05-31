import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='flex flex-row justify-between pl-20 pr-20 p-5 gap-5 bg-white border-b border-gray-300 shadow-2xs items-center'>
            <a href="/"><h1 className='text-xl font-mono uppercase font-bold text-blue-400'>Internshala</h1></a>
            <div className='text-l flex flex-row gap-5'>
                <a href="/">Internship</a>
                <a href="/">Courses</a>
                <a href="/">Job</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar