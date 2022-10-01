import React from 'react'

export const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="222.jpeg" alt="" />
        <span>Just now</span>
      </div>

      <div className='messageContent'>
        <p className='chatItself'>Hello</p>
        <img src='222.jpeg' />
      </div>
    </div>
  )
}
