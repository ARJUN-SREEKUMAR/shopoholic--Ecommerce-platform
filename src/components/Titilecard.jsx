import React from 'react'
import ti from './Titilecard.module.css'
import Getimg from './firebase/Getimg';

function Titilecard(props) {
  return (
    <div>
        <div className={ti.wrapper} >

            <div className={ti.titile}>
                <img className={ti.displaypicture} src={props.img}/>  

            </div>
        </div>
    </div>

  )
}

export default Titilecard