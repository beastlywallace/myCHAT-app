import React, {useState} from  'react'
import {useNavigate, Link}from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase';

export const Login = () => {
    const [err, setErr] = useState(false);
  const navigate = useNavigate()
  
  async function handleSubmit(e) {
    e.preventDefault();
   
    const email = e.target[0].value;
    const password = e.target[1].value;
    
    try {
      await signInWithEmailAndPassword(auth, email, password) 
      
  setErr(true);
      navigate('/')
       console.log("success")
      //
    } catch (err) {
        console.log("wow",err);
      setErr(true);
     
    }
  } 
  return (
      <div className="formContainer">
          <div className='formWrapper'> 
              <span className="logo">LAMA CHAT</span>
              <span className='title'>Login</span>
              <form  onSubmit={handleSubmit}>
               
                  <input type='email' placeholder="email" />
                  <input type='password'  placeholder="password"/>

          <button>Login</button>
          {err &&  <span>Incorrect User Details</span>}
                       </form>
              <p>Already have  an account?<Link to="/register" >Register</Link></p>
          </div>
    </div>
  )
}