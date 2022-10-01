import React from 'react'

export const Input = () => {
  return (
      <div className='input'>
      <input type="text" placeholder='type something' className='input8' />
      <div className='send'>
        <img src="attach.webp " alt="" className="src" />
        <input type="file" style={{display: 'none'}} id='file' />
        <label htmlFor="file">
        <img className='send-img' src="addimg.png" alt="" />
        </label>
        <button>send</button>
      </div>
    </div>
  )
}