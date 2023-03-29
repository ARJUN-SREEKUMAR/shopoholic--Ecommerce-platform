
import React from 'react'
import Navbar from './Navbar'
import './Signup.css'
import { useState } from 'react';
import {getAuth,createUserWithEmailAndPassword,sendPasswordResetEmail} from 'firebase/auth'
import app from '././firebase/Firebase'
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Login from './Login';
import { useNavigate } from 'react-router-dom';



const provider = new GoogleAuthProvider(app);
const auth=getAuth(app);

function Signup() {

  let navigate = useNavigate();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [formClass, setformClass] = useState(true)
  const handleSubmit = (event) => {

    event.preventDefault();
    // Here you can send the username and password to the server to check if they are correct
    console.log(`Username: ${username}\nPassword: ${password}`);
// alert("some thing fishy!!!")
    createUserWithEmailAndPassword(auth, Email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Login sucessfull");
    console.log("Login sucessfull");
    // ...
    navigate('/');
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // alert("Please check your login credentials");
    alert("creating user failed")
    console.log("signup now");
  });

     
  }
  
  // let classForm = 'form-control';
  // classForm = 'form-control-wrong';
  return (
    <div className='login-wrapper'>
      <Navbar />
      <div className="login-components">
        <div className="left-half">
          {/* <div className="gradient"></div> */}
         
        </div>
        <div className="right-half">
        {/* <div className="gradient"></div> */}
        <p className='text-main'>Welcome To Shopoholic!</p>
          
         
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="name"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className={formClass?"form-control":"form-control-wrong"}
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                value={Email}
                onChange={(event) => setEmail(event.target.value)}
                className={formClass?"form-control":"form-control-wrong"}
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className={formClass?"form-control":"form-control-wrong"}
                placeholder="Password"
              />
              <br></br><br></br><br></br><br></br>
              <div className='extra-features'>
                         <button className='f-btn'onClick={
                          ()=> {
                          navigate('/login');
                          }
                         }>already joined?</button> 
                         <div class="google-btn" onClick={()=>{
                                                      ///////////google authentication
                                      const auth = getAuth();
                                      signInWithPopup(auth, provider)
                                        .then((result) => {
                                          // This gives you a Google Access Token. You can use it to access the Google API.
                                          const credential = GoogleAuthProvider.credentialFromResult(result);
                                          const token = credential.accessToken;
                                          // The signed-in user info.
                                          const user = result.user;
                                          // IdP data available using getAdditionalUserInfo(result)
                                          // ...
                                        }).catch((error) => {
                                          // Handle Errors here.
                                          const errorCode = error.code;
                                          const errorMessage = error.message;
                                          // The email of the user's account used.
                                          const email = error.customData.email;
                                          // The AuthCredential type that was used.
                                          const credential = GoogleAuthProvider.credentialFromError(error);
                                          // ...
                                        });}
                                    }  >
                                    <div class="google-icon-wrapper">
                                      <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                                    </div>
                                    <p class="btn-text" 
                                    ><b>Sign up with Google</b></p>
                                  </div>
                         <button className='f-btn1' >forgot password?</button>  
                         </div>
            </div>
            <button class='glowing-btn'><span class='glowing-txt'>SI<span class='faulty-letter'>G</span>N<span class='faulty-letter'>U</span>P</span></button>
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Signup;
