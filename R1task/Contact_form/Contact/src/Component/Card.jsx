import React from 'react'

function Card({name,phone}) {
  return (
    <div className='h-24 mt-1 bg-zinc-400 w-full rounded-md pl-5 pt-4'>
        <h4 className=' text-3xl'>{name}</h4>
        <p className='text-xl'>{phone}</p>
    </div>
  )
}

export default Card