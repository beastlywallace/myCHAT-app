import React from  'react'
import {useNavigate, Link}from "react-router-dom"
export const Login = () => {


  return (
      <div className="formContainer">
          <div className='formWrapper'> 
              <span className="logo">LAMA CHAT</span>
              <span className='title'>Login</span>
              <form>
               
                  <input type='email' placeholder="email" />
                  <input type='password'  placeholder="password"/>

                  <button>Login</button>

              </form>
              <p>Already have  an account? Register</p>
          </div>
    </div>
  )
}
