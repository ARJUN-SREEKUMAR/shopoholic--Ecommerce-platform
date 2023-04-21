import React from 'react'
import nav  from './Navbar.module.css';
import { Icon } from '@iconify/react';
function Navbar() {
  return (
    <div>
        <div className={nav.navbar}> 
            <ul>
                <li className={nav.title}>
                   <a href="#">Shopoholic..</a> 
                </li>
                <div className={nav.elementswrapper}>
                        <li className={nav.navelements}>
                            <a href="#">home</a> 
                        </li>
                        <li className={nav.navelements}>
                            <a href="#"> category</a>
                        </li>
                        <li className={nav.navelements}>
                            <a href="#">  new arrivals</a>
                        </li>
                        <li className={nav.navelements}>
                            <a href="#">offers</a>
                        </li>
                </div>
                <div className={nav.searchbox}>
                    
                      < input type='text' className={nav.inputsearch} placeholder='Search something...' />
                      <button className={nav.btnsearch}><Icon icon='material-symbols:search' /></button>    
                      
                     <button className={nav.loginicon}> <Icon icon="streamline:interface-lock-combination-combo-lock-locked-padlock-secure-security-shield-keyhole" /></button>
                     </div>
            </ul>
        </div>
    </div>
  )
}

export default Navbar