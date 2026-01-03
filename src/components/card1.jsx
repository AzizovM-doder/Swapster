import React from 'react'

const Card1 = ({img, text, p}) => {
  return (
    <div className='flex flex-col h-110 lg:h-auto rounded-2xl text-white w-full items-center gap-5 p-5 lg:p-15 bg-[#131427]'>
        <img className='drop-shadow-xl drop-shadow-white h-20'   src={img} alt="img" />
        <h4 className='font-bold text-xl text-center'>{text}</h4>
        <p className='text-center opacity-59'>{p}</p>
    </div>
  )
}

export default Card1