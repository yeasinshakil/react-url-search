import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div className=' flex gap-6 justify-center font-bold'>
            <p><Link to='/'>Home</Link></p>
            <p><Link to='/users'>Users</Link></p>
        </div>
    </div>
  )
}

export default Navbar