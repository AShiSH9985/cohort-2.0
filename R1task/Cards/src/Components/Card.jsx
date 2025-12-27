import React from 'react';

function Card({name,title,image}) {
  return (
    <div className="h-150 w-full md:w-2/5 lg:w-1/5 m-2 rounded-xl p-2 bg-cover bg-center opacity-90 flex items-end justify-between object-cover
    " style={{backgroundImage:`url(${image})`}}>

    <div className='mb-2 w-3/5'>
        <h1 className='text-3xl text-white mb-1'>{name}</h1>
        <p className='text-xl text-white'>{title}</p>
    </div>
    <button className='text-white text-lg  bg-blue-500 pl-4 pr-4 pt-1 pb-1 rounded-3xl'>Follow Me </button>
    </div>
  )
}

export default Card