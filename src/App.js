
import './App.css';
import Login from './components/Login';
import {Routes, Route, useNavigate, BrowserRouter} from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Home from './components/Home';
import Cart from './components/Cart';
import { logincontext } from './components/global/contex';
import Productview from './components/Productview';
import Load from './components/Load';
import PaymentComponent from './components/PaymentComponent';
import MyOrders from './components/MyOrders';
function App() {
  
  const [islogin, setislogin] = useState(false);
  const [product, setproduct] = useState(false);
  // const [inuser, setinuser] = useState()
  return (
   
    <logincontext.Provider    value={{islogin,setislogin} } >
     {/* <productcontext.Provider value={{product,setproduct} } > */}
              <BrowserRouter>
              <Routes>
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<Home />} /> 
                  <Route path="/load" element={<Load />} />
                   <Route path="/cart" element={<Cart />} /> 
                  <Route path="/product" element={<Productview />} /> 
                  <Route path='/payment' element={<PaymentComponent />} />
                  // route to  MyOrders.jsx
                  <Route path='/myorders' element={<MyOrders/>} />
                  <Route path="*" element={ <div style={{ backgroundColor: '#f7e4c8' , color: 'red' }}> <h1  >404 not found</h1></div>} />
                </Routes> 
                </BrowserRouter> 
      {/* </productcontext.Provider > */}
    </logincontext.Provider >
  );
}

export default App;
