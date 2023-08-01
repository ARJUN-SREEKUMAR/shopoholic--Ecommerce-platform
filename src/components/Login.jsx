
import React from 'react'
import Navbar from './Navbar'
import log from './Login.module.css'
import { useState } from 'react';
import {getAuth,signInWithEmailAndPassword,sendPasswordResetEmail} from 'firebase/auth'
import app from '././firebase/Firebase'
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { logincontext } from './global/contex'; // usecontext 
import { useContext } from 'react'; //usecontext

//importing custom alerts




const provider = new GoogleAuthProvider(app);
const auth=getAuth(app);

function Login() {
  const {islogin,setislogin}=useContext(logincontext) 
  // use contex useage from app.js
  let navigate = useNavigate();


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formClass, setformClass] = useState(true)
  const handleSubmit = (event) => {

    event.preventDefault();
    
    // console.log(`Username: ${username}\nPassword: ${password}`);
// alert("some thing fishy!!!")
    signInWithEmailAndPassword(auth, username, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // alert("Login sucessfull");
    console.log("Login sucessfull");
    // ...
    
    setislogin(user);
    setformClass(true);
    navigate('/');
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
          
          <p className={formClass?log.textsub:log.textsubwrong}>{formClass?"Please enter your credentials below":"Please check your Login credentials"}</p>
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

                         
                         <div className={log.googlebtn} onClick={()=>{
                                                      ///////////google authentication
                                      const auth = getAuth();
                                      signInWithPopup(auth, provider)
                                        .then((result) => {
                                          // This gives you a Google Access Token. You can use it to access the Google API.
                                          const credential = GoogleAuthProvider.credentialFromResult(result);
                                          const token = credential.accessToken;
                                          // The signedin user info.
                                          const user = result.user;
                                          setislogin(user);
                                          navigate('/')
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
                                    <div className={log.googleiconwrapper}>
                                      <img className={log.googleicon} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                                    </div>
                                    <p className={log.btntext} 
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
               <button className={log.glowingbtn}>
                   <span className={log.glowingtxt}>L<span className={log.faultyletter}>O</span>GIN</span>
              </button>
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Login;
