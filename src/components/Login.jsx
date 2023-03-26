// import React from 'react'
// import Navbar from './Navbar'
// import './Login.css'
// import { useState } from 'react';

// function Login() {
//     const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Here you can send the username and password to the server to check if they are correct
//     console.log(`Username: ${username}\nPassword: ${password}`);
//   }


//   return (
//     <div className='login-wrapper'>
//         <Navbar/>
//         <div className="login-components">
//                 <div className="left-half">
//                     {/* left half contents... */}
//                 </div>

//                 <div className="right-half">
//                 <p className='text-main'> Welcome back, </p>
//                           <p className='text-sub'>Welcome back! Please enter your details.</p>
//                         <div className="right-half-inner">
                         

//                           <form onSubmit={handleSubmit}>
//                             <div>
//                                 <label htmlFor="username">Username:</label>
//                                     <input
//                                       type="text"
//                                       id="username"
//                                       value={username}
//                                       onChange={(event) => setUsername(event.target.value)}
//                                     />
//                               </div>
//                             <div>
//                                 <label htmlFor="password">Password:</label>
//                                     <input
//                                       type="password"
//                                       id="password"
//                                       value={password}
//                                       onChange={(event) => setPassword(event.target.value)}
//                                     />
//                             </div>
//       <button type="submit">Login</button>
//     </form> 
//     </div>

//                 </div>
//         </div>
//     </div>
//   )
// }

// export default Login;



import React from 'react'
import Navbar from './Navbar'
import './Login.css'
import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can send the username and password to the server to check if they are correct
    console.log(`Username: ${username}\nPassword: ${password}`);
  }

  return (
    <div className='login-wrapper'>
      <Navbar />
      <div className="login-components">
        <div className="left-half">
          {/* <div className="gradient"></div> */}
         
        </div>
        <div className="right-half">
        {/* <div className="gradient"></div> */}
        <p className='text-main'>Welcome Back..!</p>
          <p className='text-sub'>Please enter your credentials below</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="form-control"
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="form-control"
                placeholder="Password"
              />
              <br></br><br></br><br></br><br></br>
              <div className='extra-features'>
                         <button className='f-btn'>don't have an account?</button> 
                         <div class="google-btn">
                                    <div class="google-icon-wrapper">
                                      <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                                    </div>
                                    <p class="btn-text"><b>Sign in with google</b></p>
                                  </div>
                         <button className='f-btn'>forgot password?</button>  
                         </div>
            </div>
            <button class='glowing-btn'><span class='glowing-txt'>L<span class='faulty-letter'>O</span>GIN</span></button>
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Login;
