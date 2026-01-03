import React from 'react'

const Comp1 = ({img, num, text }) => {
  return (
    <div className='a2 p-5 rounded-2xl flex items-center w-full'>
        <img  className='max-w-1/2' src={img} alt="" />
        <aside className='flex flex-col items-start h-full'>
            <p className='text-3xl font-bold py-5 lg:pt-20  text-[#A113FF]'>{num}</p>
            <h4 className='text-xl font-bold text-white'>{text}</h4>
        </aside>
    </div>
  )
}

export default Comp1