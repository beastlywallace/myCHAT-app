import React from  'react'
import {useNavigate, Link}from "react-router-dom"
export const Register = () => {


  return (
      <div className="formContainer">
          <div className='formWrapper'> 
              <span className="logo">LAMA CHAT</span>
              <span className='title'>Register</span>
              <form>
                  <input type='text' placeholder="display name"/>
                  <input type='email' placeholder="email" />
                  <input type='password'  placeholder="password"/>
   <input required style={{ display: "none" }} type="file" id="file" />
                  <label htmlFor='file'>
                      <img src="" alt="" />
                      <span>Add an Avatar</span>
                  </label>
                  <button>Sign up</button>

              </form>
              <p>You do lot have  an account? Login</p>
          </div>
    </div>
  )
}
