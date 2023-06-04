
import './App.css';
import Login from './components/Login';
import {Routes, Route, useNavigate, BrowserRouter} from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Home from './components/Home';

import { logincontext } from './components/global/contex';
import Productview from './components/Productview';
import Load from './components/Load';
function App() {
  
  const [islogin, setislogin] = useState(false);
  // const [inuser, setinuser] = useState()
  return (
   
    <logincontext.Provider    value={{islogin,setislogin} } >
     
              <BrowserRouter>
              <Routes>
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<Home />} /> 
                  <Route path="/load" element={<Load />} />

                  <Route path="/product" element={<Productview />} /> 
                </Routes> 
                </BrowserRouter> 
  
    </logincontext.Provider >
  );
}

export default App;
