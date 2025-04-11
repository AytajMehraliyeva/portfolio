import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";


const Header = () => {
  
return (
  
  <header id='header' >
    <div className="container headerBox" >

     
          <h3><Link style={{textDecoration:'none',color:'rgb(95, 203, 249)',textShadow:'1px 1px 2px white, 0 0 1em rgb(0, 156, 199), 0 0 0.2em rgba(48, 0, 48, 0.493)'}} to={''}>Aytaj Mehraliyeva</Link></h3>

      <ul> 
         <li >
          <a href="#skills" >Skills</a>
          </li>
        <li>
          <a href="#aboutMain">About me</a>
          </li>

       
       
          <li >
          <a href="#education" >Education</a>
          </li>
          
          <li>
          <a href="#projects" >Projects</a>
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
