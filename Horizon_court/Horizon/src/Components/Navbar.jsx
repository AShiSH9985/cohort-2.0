import React from 'react'

function Navbar() {
  return (
    <div className='Navbar'>
        <h3>Horizon Courts</h3>
        <div className='nav-link'>
           <a href="https://google.com" target="_blank">About Us</a>
           <a href="https://google.com" target="_blank">Services</a>
           <a href="https://google.com" target="_blank">Coaches</a>
           <a href="https://google.com" target="_blank">Events</a>
           <a href="https://google.com" target="_blank">Contacts</a>

        </div>
        <button>Book now</button>
    </div>
  )
}

export default Navbar