import React from 'react'
import ban from './Banner.module.css'
import { db ,storage} from './firebase/Firebase';
import { getStorage, ref } from "firebase/storage";


function Banner(props) {
  return (
          // <> haiii</>   
          //backend data saver 

         
    <div className={ban.wrapper} style={{ backgroundImage: `url('${props.url}')` }}>
     
      {/* <div className={ban.t1}>  {props.titile}</div> */}
    </div>
  )
}

export default Banner