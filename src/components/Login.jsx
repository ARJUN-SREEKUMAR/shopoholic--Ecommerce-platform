
import React from 'react'
import Navbar from './Navbar'
import log from './Login.module.css'
import { useState } from 'react';
import {getAuth,signInWithEmailAndPassword,sendPasswordResetEmail} from 'firebase/auth'
import app from '././firebase/Firebase'
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

//importing custom alerts



const provider = new GoogleAuthProvider(app);
const auth=getAuth(app);

function Login() {

  let navigate = useNavigate();


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formClass, setformClass] = useState(true)
  const handleSubmit = (event) => {

    event.preventDefault();
    // Here you can send the username and password to the server to check if they are correct
    console.log(`Username: ${username}\nPassword: ${password}`);
// alert("some thing fishy!!!")
    signInWithEmailAndPassword(auth, username, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Login sucessfull");
    console.log("Login sucessfull");
    // ...
    navigate('/');
    setformClass(true);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // alert("Please check your login credentials");
    setformClass(false);
    console.log("signup now");
  });

     
  }
  
  // let classForm = 'formcontrol';
  // classForm = 'formcontrolwrong';
  return (
    <div className={log.loginwrapper}>
      <Navbar />
      <div className={log.logincomponents}>
        <div className={log.lefthalf}>
          {/* <div className="gradient"></div> */}
         
        </div>
        <div className={log.righthalf}>
        {/* <div className="gradient"></div> */}
        <p className={log.textmain}>Welcome Back..!</p>
          
          <p className={formClass?"textsub":"textsubwrong"}>{formClass?"Please enter your credentials below":"Please check your Login credentials"}</p>
          <form onSubmit={handleSubmit}>
            <div className={log.formgroup}>
              <input
                type="email"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className={formClass?log.formcontrol:log.formcontrolwrong}
                placeholder="Email"
              />
            </div>
            <div className={log.formgroup}>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className={formClass?log.formcontrol:log.formcontrolwrong}
                placeholder="Password"
              />
              <br></br><br></br><br></br><br></br>
              <div className={log.extrafeatures}>
                         <button className={log.fbtn} onClick={
                          ()=> {
                          navigate('/signup');
                          }
                         }>don't have an account?</button> 
                         <div class={log.googlebtn} onClick={()=>{
                                                      ///////////google authentication
                                      const auth = getAuth();
                                      signInWithPopup(auth, provider)
                                        .then((result) => {
                                          // This gives you a Google Access Token. You can use it to access the Google API.
                                          const credential = GoogleAuthProvider.credentialFromResult(result);
                                          const token = credential.accessToken;
                                          // The signedin user info.
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
                                    <div class={log.googleiconwrapper}>
                                      <img class={log.googleicon} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                                    </div>
                                    <p class={log.btntext} 
                                    ><b>Sign in with google</b></p>
                                  </div>
                         <button className={log.fbtn} onClick={()=>{
                            sendPasswordResetEmail(auth, username)
                            .then(() => {
                              // Password reset email sent!
                              // ..
                              alert("Password reset mail has been send to " + username)
                              setformClass(true);
                            })
                            .catch((error) => {
                              const errorCode = error.code;
                              const errorMessage = error.message;
                              // alert("type in email in the login field and click the forgot password button")
                              // ..
                              alert("Please enter email address and then click forget password button ");
                            });



                         }}>forgot password?</button>  
                         </div>
            </div>
            <button class={log.glowingbtn}><span class={log.glowingtxt}>L<span class={log.faultyletter}>O</span>GIN</span></button>
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Login;
