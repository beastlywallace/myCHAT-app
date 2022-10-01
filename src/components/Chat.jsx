import React from 'react'
import { BsFillCameraVideoFill, } from 'react-icons/bs';
import { FiMoreHorizontal } from "react-icons/fi"
import {IoPersonAddSharp} from "react-icons/io5"
import { Messages } from './Messages';
import { Input } from './Input';
export default function Chat(){
  return (
      <div className="chat">
          <div className='chatInfo'>
              <span>Jane</span>
              <div className='chatIcons'>
                  <BsFillCameraVideoFill className='icon3' />
            
                  <IoPersonAddSharp className='icon3' />
                        <FiMoreHorizontal  className='icon3'  />
              </div>
          </div>
          <Messages /> 
          <Input/>
          


    </div>
  )
}
 