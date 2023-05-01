import React from 'react'
import ban from './Banner.module.css'
function Banner(props) {
  return (
    <div className={ban.wrapper} style={{ backgroundImage: "url('http://s6.favim.com/orig/150112/background-cold-gif-nature-Favim.com-2380226.gif')" }}>
     
      <div className={ban.t1}>  {props.titile}</div>
    </div>
  )
}

export default Banner