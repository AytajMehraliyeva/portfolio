import React from 'react'
import './Education.scss'
import { FaUserGraduate } from "react-icons/fa";
import { MdLaptopChromebook } from "react-icons/md";
import { FaCode } from "react-icons/fa6"
import gif from '../../assets/Img/tehsil.gif'
const Education = () => {
  return (
    <div className='education' id='education'>
        <span className='headSpan'>Education</span>
        <hr />
        <div className='container mainGif'>
        <div className='gif '>
            <img src={gif} alt="" />
        </div>
        <div className='educateSecond' id='second'>
            <div>
                <span>September 2021 - Present</span>
                <FaUserGraduate className='icon'id='iconUni' />
               

                <h4>Azerbaijan Technical University</h4>
                <p><i>Information Technology</i></p>
            </div>
            <div>
            <MdLaptopChromebook className='icon' id='icon' />
                <span>March 2022-September 2022</span>
                <h4>Developia Academy</h4>
                <p><i>Front-end</i></p>
            </div>
            <div>
            <FaCode className='icon' id='icon' />
                <span>September 2023-January 2024</span>
                <h4>Code Academy</h4>
                <p><i>Full-stack/Front-end</i></p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Education