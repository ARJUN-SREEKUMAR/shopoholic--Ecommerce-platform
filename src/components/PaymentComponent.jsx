import React from 'react';
import styles from './PaymentComponent.module.css';
import Navbar from './Navbar';
import { Navigate, useLocation } from 'react-router-dom';
import { db ,storage,} from './firebase/Firebase';
import { collection,doc ,addDoc,setDoc,updateDoc ,query,where,getDocs} from "firebase/firestore"; 
import { useContext ,} from 'react'; //usecontext
import { logincontext } from './global/contex';
import { useNavigate } from 'react-router-dom';

const PaymentComponent = ({ product }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { obj1 } = location.state || {};
  const {islogin}=useContext(logincontext) // use contex useage from app.js
  // console.log(islogin);
  console.log(obj1);
 async function handleSubmit  (event) {
    event.preventDefault();
    if (islogin === false) {
      navigate('/*');
      alert('Please Login First');
      return;
    }
    console.log(obj1);
    const ti=obj1.titile;
    const docRef = await addDoc(collection(db, "orders"), {
      orderdate: new Date(),
      productti: ti,
      // // productid: obj1.id,
      // productprice: obj1.price,
      // productimage: obj1.imageURL2,
      orderstatus: "pending",
      orderid: Math.floor(Math.random() * 1000000000),
      userid:islogin.uid
     
    });
    window.location.href = 'https://buy.stripe.com/test_eVa4hU8KTcGz5KE145';
  };

  return (

    <div className={styles.paymentContainer}>
        <Navbar />
       
      <h2 className={styles.productName}>product.name</h2>
      <img src={obj1.imageURL1} alt="product image should appere here" className={styles.productImage} />

      <form onSubmit={handleSubmit} className={styles.paymentForm}>
        <label  className={styles.inputFieldlabel} >Shipping address </label>
      <input type="text" placeholder="Name" className={styles.inputField} required={true}/>
        <input type="text" placeholder="Address line 1" className={styles.inputField} />

        <input type="text" placeholder="Address line 2" className={styles.inputField} />

        <select id="country-state" name="country-state" className={styles.inputField}>
    <option value="">Select state</option>
    <option value="AN">Andaman and Nicobar Islands</option>
    <option value="AP">Andhra Pradesh</option>
    <option value="AR">Arunachal Pradesh</option>
    <option value="AS">Assam</option>
    <option value="BR">Bihar</option>
    <option value="CH">Chandigarh</option>
    <option value="CT">Chhattisgarh</option>
    <option value="DN">Dadra and Nagar Haveli</option>
    <option value="DD">Daman and Diu</option>
    <option value="DL">Delhi</option>
    <option value="GA">Goa</option>
    <option value="GJ">Gujarat</option>
    <option value="HR">Haryana</option>
    <option value="HP">Himachal Pradesh</option>
    <option value="JK">Jammu and Kashmir</option>
    <option value="JH">Jharkhand</option>
    <option value="KA">Karnataka</option>
    <option value="KL">Kerala</option>
    <option value="LA">Ladakh</option>
    <option value="LD">Lakshadweep</option>
    <option value="MP">Madhya Pradesh</option>
    <option value="MH">Maharashtra</option>
    <option value="MN">Manipur</option>
    <option value="ML">Meghalaya</option>
    <option value="MZ">Mizoram</option>
    <option value="NL">Nagaland</option>
    <option value="OR">Odisha</option>
    <option value="PY">Puducherry</option>
    <option value="PB">Punjab</option>
    <option value="RJ">Rajasthan</option>
    <option value="SK">Sikkim</option>
    <option value="TN">Tamil Nadu</option>
    <option value="TG">Telangana</option>
    <option value="TR">Tripura</option>
    <option value="UP">Uttar Pradesh</option>
    <option value="UT">Uttarakhand</option>
    <option value="WB">West Bengal</option>
</select>
        <input type="tel" placeholder="Mobile Number" className={styles.inputField} />
        <button type="submit" className={styles.payButton} onClick={handleSubmit}>Pay ₹{obj1.price}</button>
      </form>
     
    </div>
  );
};

export default PaymentComponent;
