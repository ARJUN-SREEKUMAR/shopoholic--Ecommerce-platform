import React, { useContext, useEffect, useState } from 'react';
import { Icon, InlineIcon } from '@iconify/react';


import firebase from 'firebase/app';
import 'firebase/firestore';
import Getimg from './firebase/Getimg';
import { db ,storage,} from './firebase/Firebase';
import { collection,doc ,addDoc,setDoc,updateDoc ,query,where,getDocs} from "firebase/firestore"; 
import { logincontext } from './global/contex';
import Navbar from './Navbar';


const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const {islogin}=useContext(logincontext) 
  useEffect(() => {
    const fetchOrders = async () => {
      const oRef = collection(db, "orders");
      const q = query(oRef, where("userid", "==", islogin.uid));
   
    const querySnapshot = await getDocs(q);
    const orderData = querySnapshot.docs.map((doc) => doc.data());
    setOrders(orderData);
       console.log(doc.id, " => ", orders);
     
    };

    fetchOrders();
  }, []);

  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
    <Navbar />
    <div className="container" style={{ padding: '20px' }}>
      <br />
      <br />
      <br />
      <br />
      <h1>My Orders</h1>
      {orders.map((order) => (
        <div key={order.orderid} style={{ border: '1px solid white', padding: '10px', marginBottom: '10px' }}>
          <h2>{order.productti}</h2>
          <p>Order ID: {order.orderid}</p>
          <p>Expected Delivery Date: {order.expectedDeliveryDate}</p>
          <p>Payment Status: <br/>
          <br/>
            {order.orderstatus == "confirmed" ? 
              <Icon icon="typcn:tick" style={{color: 'green'}}  width="50" height="50"/>  : 
              <Icon icon="mdi:clock-outline" style={{color: 'yellow'}}  width="50" height="50" />
            }
          </p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default MyOrders;