import React from 'react'
import Navbar from './Navbar'
import po from './Productview.module.css'
import { useNavigate ,Link } from 'react-router-dom';
// import { productcontext } from './global/contex';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom'
import { logincontext } from './global/contex';
function Productview() {
  let navigate = useNavigate();
  // const {product,setProduct}=useContext(productcontext)
  const location = useLocation();
  const { obj1 } = location.state || {};
  const {islogin}=useContext(logincontext) 
  if (!obj1) {
    return <div>Loading...</div>; 
    
    // use contex useage from app.js
  }

  const handleClick = () => {
    // alert('Click Happened '+props.item.titile);
    //navigate to product page with props.item.id
    // setProduct(prooo);
    //if user is not logged in then navigate to login page
    // else navigate to payment page
    if (islogin === false) {
      navigate('/login');
      alert('Please Login First');
      return;
    }
    navigate('/payment', { state: { obj1: obj1 } });


  }
  return (
    <div>
        <Navbar></Navbar>
        <div className={po.wrapper}>
            <div className={po.lhs}>
               <img src={obj1.imageURL1} alt="product" className={po.img1}/>
                <div className={po.restimages}>
               <img src={obj1.imageURL1} alt="product" className={po.img2}/>

               <img src={obj1.imageURL1} alt="product" className={po.img3}/>

                <img src={obj1.imageURL1} alt="product" className={po.img4}/>

                <img src={obj1.imageURL1} alt="product" className={po.img5}/>
                </div>
              <div className={po.rhs}>
                <h1 className={po.heading}>{obj1.titile}</h1>
                <p className={po.price}>  ₹{obj1.price}</p>
                
                <p className={po.description}>
                {obj1.desc}
                </p>
                <div className={po.size}  >
                <button className={po.sizebtn} disabled={true}>S</button>
                <button className={po.sizebtn}  disabled={true} >M</button>
                <button className={po.sizebtn}  disabled={true}>L</button>
                <button className={po.sizebtn} disabled={true} >XL</button>
                </div>
                <div className={po.btns}>
                <button className={po.btn1}>Add to Cart</button>
                <button className={po.btn2} onClick={handleClick}>Buy Now</button>
                  </div>
              </div>
            </div>
         </div>
    </div>
  )
}

export default Productview