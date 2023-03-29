
import './App.css';
import Login from './components/Login';
import {Routes, Route, useNavigate, BrowserRouter} from 'react-router-dom';

import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      {/* <Signup></Signup> */}
              <BrowserRouter>
              <Routes>
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<Home />} /> 
                </Routes> 
                </BrowserRouter> 
    {/* <Navbar></Navbar> */}
    </div>
  );
}

export default App;
