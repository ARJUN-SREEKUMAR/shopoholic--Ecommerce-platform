import { useState } from "react";

import lod from './Load.module.css'

function Load() {
  let [loading, setLoading] = useState(true);


  return (
    <div className={lod.sweetloading}>

    <div className={lod.wrapper}>

    <span  className={lod.text}>Shopoholic</span>

    </div>
     
    </div>
  );
}

export default Load;