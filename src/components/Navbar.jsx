import React from 'react'

export const Navbar = () => {
  return (
    <div className='navBar'>
      <span className='logo'> Dogs Chat </span>
      <div className='user'>
        <img className='img' 
        src='https://e7.pngegg.com/pngimages/983/153/png-clipart-computer-icons-user-profile-female-avatar-user-purple-child.png' 
        alt=''/>
        <span> Jhon</span>
        <button>Logout</button>
      </div>
    </div>
  )
}
