import React from 'react'
import Navbar from './Navbar'
import po from './Productview.module.css'
function Productview(props) {
  return (
    <div>
        <Navbar></Navbar>
        <div className={po.wrapper}>
            <div className={po.lhs}>
               <img src="https://firebasestorage.googleapis.com/v0/b/shopoholic-138fd.appspot.com/o/image%201.png?alt=media&token=85296395-198d-4d18-910d-d61370d4255f" alt="product" className={po.img1}/>
                <div className={po.restimages}>
               <img src="https://firebasestorage.googleapis.com/v0/b/shopoholic-138fd.appspot.com/o/Image.png?alt=media&token=25d75a5d-cc35-4a11-a2a0-8db429e8a6d7" alt="product" className={po.img2}/>

               <img src="https://firebasestorage.googleapis.com/v0/b/shopoholic-138fd.appspot.com/o/Image.png?alt=media&token=25d75a5d-cc35-4a11-a2a0-8db429e8a6d7" alt="product" className={po.img3}/>

                <img src="https://firebasestorage.googleapis.com/v0/b/shopoholic-138fd.appspot.com/o/Image.png?alt=media&token=25d75a5d-cc35-4a11-a2a0-8db429e8a6d7" alt="product" className={po.img4}/>

                <img src="https://firebasestorage.googleapis.com/v0/b/shopoholic-138fd.appspot.com/o/Image.png?alt=media&token=25d75a5d-cc35-4a11-a2a0-8db429e8a6d7" alt="product" className={po.img5}/>
                </div>
              <div className={po.rhs}>
                <h1 className={po.heading}>TRACK BUTTONS</h1>
                <p className={po.price}> ₹ 1,999</p>
                
                <p className={po.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non odit distinctio assumenda explicabo eius, pariatur deserunt reiciendis quae autem harum numquam eveniet enim aspernatur corporis esse architecto molestias. Sunt, ea!</p>
                <div className={po.size}>
                <button className={po.sizebtn}>S</button>
                <button className={po.sizebtn}>M</button>
                <button className={po.sizebtn} disabled={false}>L</button>
                <button className={po.sizebtn}>XL</button>
                </div>
                <div className={po.btns}>
                <button className={po.btn1}>Add to Cart</button>
                <button className={po.btn2}>Buy Now</button>
                  </div>
              </div>
            </div>
         </div>
    </div>
  )
}

export default Productview