import { useState } from "react";

import lod from './Load.module.css'

function Load() {
  let [loading, setLoading] = useState(true);
    //if loadng true
    setTimeout(() => { 

    }, 3000);


  return (
    <div className={lod.sweetloading}>

    <div className={lod.wrapper}>
    
   <img src="https://firebasestorage.googleapis.com/v0/b/shopoholic-138fd.appspot.com/o/icon-512.png?alt=media&token=8befaa7d-fbae-42ee-a68d-5e999adacebd" alt="" className={lod.img} />
   {/* <img src="" alt="" className={lod.img} /> */}
    </div>
    <section>
	<div class={lod.content}>
		<h2>Shopoholic</h2>
		<h2>Shopoholic</h2>
	</div>
</section>
    </div>
  );

}
export default Load