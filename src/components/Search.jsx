import React from 'react'

export const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input placeholder='Pesquise aqui' type="text" />
      </div>
      <div className='userChat'>
        <img 
        src="https://e7.pngegg.com/pngimages/983/153/png-clipart-computer-icons-user-profile-female-avatar-user-purple-child.png" 
        alt="" />
        <div className='userChatInfo'>
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}
