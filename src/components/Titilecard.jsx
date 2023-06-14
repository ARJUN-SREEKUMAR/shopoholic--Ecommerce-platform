import React from 'react'
import ti from './Titilecard.module.css'
import Getimg from './firebase/Getimg';

function Titilecard(props) {
  return (
    <div>
        <div className={ti.wrapper} >

            <div className={ti.titile}>
                <img className={ti.displaypicture} src={Getimg ({imageName: "Screenshot 2023-05-12 at 12.16.35 AM.png" }) }/>  

            </div>
        </div>
    </div>

  )
}

export default Titilecard