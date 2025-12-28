import React, { useState } from 'react'
import Card from './Component/Card';

function App() {

  const submitHandler= (e)=>{
    e.preventDefault();
    console.log(e.target.value)
  }
  const [name, setname] = useState('')
  const [phone, setphone] = useState('')

  const [person, setperson] = useState([])

  return (
    <div className='p-5 bg-gray-900'>
      <form action="" className='bg-gray-500 p-2 rounded-lg text-white flex gap-10' onSubmit={(e)=>{
        submitHandler(e)

        setperson([...person,{name,phone}])

        setname('')
        setphone('')
      }}>
        
        <input 
          className='bg-gray-600 p-2 rounded-xl border border-white-600 ' 
          type="text"  
          placeholder='Enter Name'
          value={name}
          onChange={(e)=>{
            setname(e.target.value)
          }}
          
        />

        <input 
          className='bg-gray-600 p-2 rounded-xl border border-white-600 ' 
          type="tel" 
          minLength="10" 
          maxLength="10" 
          placeholder='Phone number' 
          value={phone}
          onChange={(e)=>{
            setphone(e.target.value)
          }}
        />
        <button className='bg-green-600 pl-4 pr-4 rounded-xl border border-white-600 '>Add Contact</button>
      </form>

      {person.map((e, index) => (
          <div key={index}>
            {/* <p className=''>{e.name}</p>
            <p className=''>{e.phone}</p> */}
            <Card name={e.name} phone={e.phone}/>
          </div>
      ))}

        {/* <Card/> */}
    </div>
  )
}

export default App