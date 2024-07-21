import React from 'react';
import './Header.scss';

import { FaBars } from "react-icons/fa";


const Header = () => {
  
return (
  
  <header>
    <div className="container headerBox">

     
          <h3>Aytaj Mehraliyeva</h3>

      <ul> 
        <li>
          <a href="#about">About me</a>
          </li>

        <li >
          <a href="#skills" >Skills</a>
          </li>
       
          <li >
          <a href="#education" >Education</a>
          </li>
          
          <li>
          <a href="#" >Projects</a>
          </li>

          <li>
          <a href="#" >Contact me</a>
          </li>
      </ul>
      <FaBars className='bars' />
    </div>

  </header>
  );
}

export default Header;
