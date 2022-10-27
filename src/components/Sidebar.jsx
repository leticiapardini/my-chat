import React from 'react'
import { Navbar } from './Navbar'
import { Search } from './Search'
import { ListChat } from './ListChat'

export const Sidebar = () => {
  return (
    <div className='sideBar'>
      <Navbar/>
      <Search/>
      <ListChat/>
    </div>
  )
}
