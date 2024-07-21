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
          <a href="#about" target='blank'>About me</a>
          </li>

        <li >
          <a href="#skills" target='blank'>Skills</a>
          </li>
       
          <li >
          <a href="#education" target='blank'>Education</a>
          </li>
          
          <li>
          <a href="#" target='blank'>Projects</a>
          </li>
          
          <li>
          <a href="#" target='blank'>Contact me</a>
          </li>
      </ul>
      <FaBars className='bars' />
    </div>

  </header>
  );
}

export default Header;
