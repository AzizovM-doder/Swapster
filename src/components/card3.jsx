import React from 'react'

const Card3 = ({svg, num}) => {
  return (
    <div className='flex flex-col items-center w-full gap-7 p-5 rounded-2xl border-2  border-white'>
        {svg}
        <p className='text-[#9600FB] font-bold text-5xl'>{num}</p>
        <h2 className='text-xl font-bold text-gray-500'>Example</h2>
    </div>
  )
}

export default Card3