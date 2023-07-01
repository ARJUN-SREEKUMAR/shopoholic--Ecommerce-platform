import React from 'react'
import nav  from './Navbar.module.css';
import { Icon } from '@iconify/react';
import { logincontext } from './global/contex'; // usecontext 
import { useContext ,} from 'react'; //usecontext
import { useNavigate ,Link } from 'react-router-dom';

function Navbar() {
    // const [rend, setrend] = useState()
    // setrend(1)
    // useEffect(() => {
       
    //   }, [rend]);
    

    let navigate = useNavigate();
    // let pic=islogin.photoURL;
    const lockbuttonnavigate=()=>{
        if (islogin) {
            
        }
        else
        navigate('/login');
    }
    const getAvatar = (displayName) => { /// object.display name is passed as parameter
        if (displayName == null) {
            return null; 
          }
        const initials = displayName.split(" ").map((word) => word[0]).join("");
        return `https://ui-avatars.com/api/?background=00bfff & name=${initials}`;
      };



    const {islogin}=useContext(logincontext) // use contex useage from app.js


  


  return (
    <div>
        <div className={nav.navbar}> 
            <ul>
                <li className={nav.title}>
                <Link to="/" className={nav.text}>Shopoholic..</Link> 
                </li>
                <div className={nav.elementswrapper}>
                        <li className={nav.navelements}>
                            <Link to="/">home</Link> 
                        </li>
                        <li className={nav.navelements}>
                
                            <Link to="/">category</Link> 
                        </li>
                        <li className={nav.navelements}>
                    
                            <Link to="/">new arrivals</Link> 
                        </li>
                        <li className={nav.navelements}>
            
                            <Link to="/">offers</Link> 
                        </li>
                        
                </div>
                            <div className={nav.searchbox}>
                                
                                < input type='text' className={nav.inputsearch} placeholder='Search something...' />
                            </div>

                            
                      {/* <button className={nav.btnsearch}><Icon icon='material-symbols:search' /></button>     */}
                            
                     <button className={nav.loginicon} onClick={lockbuttonnavigate}> 
                     { islogin? ( islogin.photoURL ? (
                                                <> 
                                                {/* <button > <Icon icon="mi:shopping-cart" color="white" className={nav.cartico}  />
                                                </button>  */}
                                                    <img className={nav.avatar} src={islogin.photoURL} alt="Image" />
                                            </>
                                        )
                                        :
                                        (    <>
                                            {/* <Icon icon="mi:shopping-cart" color="white"/> */}
                                            <img className={nav.avatar} src={getAvatar(islogin.displayName)} alt="Image" />
                                            </> 
                                        )
                                 
                                 )
                                 :
                                (
                                 <Icon icon="streamline:interface-lock-combination-combo-lock-locked-padlock-secure-security-shield-keyhole" />
                                )
                      }
     </button>
                    
            </ul>
        </div>
    </div>
  )
}

export default Navbar