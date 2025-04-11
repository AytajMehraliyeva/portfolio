import React from 'react'
import Card from '../../../companent/Card/Card'
import './Home.scss'
import Contact from '../../../companent/contact me/Contact'
import Skills from '../../../companent/Skills/Skills'
import Education from '../../../companent/education/Education'
import About from '../../../companent/About/About'
import { IoReturnDownBack } from "react-icons/io5";
import Projects from '../../../companent/Projects/Projects'


const Home = () => {
  return (
    <>
    <a href='#header' className='back'>
    <IoReturnDownBack  />
    </a>
    <Contact/>
    <div className='opacity'>
    <div className='keyboard' id='keyboard'>
  
    </div>
    <div className='welcome'>
    <h3 data-text="Welcome My Portfolio">Welcome To My Portfolio</h3>
    <p data-text="I'm Aytaj Mehraliyeva">I'm Aytaj Mehraliyeva</p>
</div>
</div>
<Skills/>
<About/>
<Education/>
<Projects/>
        </>
  )
}

export default Home