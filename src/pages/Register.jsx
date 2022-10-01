import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import {   createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../Firebase";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const Register = () => {
    const [err, setErr] = useState(false)
    
  async function handleSubmit(e) {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

      try {
          //documentation on firebase (search "authentication with firebase using password password)
          const res = await createUserWithEmailAndPassword(auth, email, password)
      

const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  
  (error) => {
 
      setErr(true)
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
        console.log('File available at', downloadURL);
        await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL
        })
    });
  }
);
      } catch(err) {
        setErr(true)
          
      }
  }
    //search "upload files with cloud storage on web" on fire base and check fordocumentation
    //go to "BUILD " on the site onn ur app profile, click on storage 

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">LAMA CHAT</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="display name" />
          <input type="email" placeholder="email" required />
          <input type="password" placeholder="password" required />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src="attach.webp" alt="" />
            <span>Add an Avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You do lot have an account? Login</p>
      </div>
    </div>
  );
};
