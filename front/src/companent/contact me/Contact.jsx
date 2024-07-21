import React from 'react'
import './Contact.scss'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <div className='contact'>
       <a href="https://www.instagram.com/mehraliyeffa__"> <FaSquareInstagram  className='insta'/></a> <br />
        <a href="https://github.com/AytajMehraliyeva"><FaGithub className='gthb' /></a> <br />
        <a href="https://www.linkedin.com/in/aytaj-mehraliyeva-56581b221/"><FaLinkedin className='linkedn'/></a>
    </div>
  )
}

export default Contact