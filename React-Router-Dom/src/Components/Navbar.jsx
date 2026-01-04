import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-16 bg-zinc-600 flex gap-20 items-center pl-20 pt-2 text-white text-3xl'>
        <NavLink to="/"  style={({ isActive, isPending }) => ({
            color:
                isActive ? "red" :
                isPending ? "blue" : "black"
            })}
        >
        Home
        </NavLink>
        <NavLink to="/about"  style={({ isActive, isPending }) => ({
            color:
                isActive ? "red" :
                isPending ? "blue" : "black"
            })}>About</NavLink>
    </div>
  )
}

export default Navbar