import React, { useEffect } from 'react'
import Navbar from './Navbar'
import ho from './Home.module.css'
import { logincontext } from './global/contex'; // usecontext 
import { useContext ,useState,useRef } from 'react'; //usecontext

function Home () {
  const {islogin,setislogin}=useContext(logincontext) // use contex useage from app.js
  console.log(islogin);
  const [ren, setren] = useState(null)
let a=islogin.displayName;
    useEffect(()=>{
      if (islogin && islogin.displayName) {
        setren(islogin.displayName);
      }

    }, [islogin])  

  
  
  return (
    <div>
    
        <Navbar></Navbar>
        <div className={ho.bannerDiv}>
            <p className={ho.welcome}>Welcome {
            ren?ren:"Guest User"}
           { console.log(ren)
            }</p>
            <p className={ho.homeIntro}> Home page Coming soon!!!</p>
        </div>
     </div>
  )
}

export default Home 