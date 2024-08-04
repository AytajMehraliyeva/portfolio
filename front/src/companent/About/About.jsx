import React from 'react'
import './About.scss'
const About = () => {
  return (
    <div className='aboutContainer' id='aboutMain'>

    <div className='container main'>

      <pre className='code' id='about'>
        <div className='html'>
        <h4>About Me</h4>
        </div>
        <code>
          <span className='keyword'>const</span> <span className='function'>whoAmI</span> <span className='operator'>=</span> <span className='parenthesis'>()</span> <span className='operator'>=</span> <span className='brace'>{'{'}</span>
          <br />
          <span className='keyword'>return</span> <span className='parenthesis'>(</span>
          <br />
          <span className='brace'>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}</span><span className='tag'>div</span> <span className='attribute'>className</span><span className='operator'>=</span><span className='value'>"aboutMe"</span><span className='brace'>{'>'}</span>
          <br />
          
          <span className='brace'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}</span><span className='tag'>p</span> <span className='attribute'>className</span><span className='operator'>=</span><span className='value'>"paragraph"</span><span className='brace'>{'>'}</span> <span className='pColor'>
          I, Aytaj, am a dedicated frontend developer with a passion for crafting high-quality and user-centric websites using the latest web technologies. My expertise lies in combining creative design with efficient coding practices to deliver exceptional projects. I strive to understand user needs deeply and apply innovative solutions to ensure that every project not only meets but exceeds expectations. My goal is to create seamless, visually appealing, and functional websites that enhance user experience and drive business success.</span><span className='brace'>{'</'}</span><span className='tag'>p</span><span className='brace'>{'>'}</span>
          <br />
          <span className='brace'>&nbsp;&nbsp;&nbsp;&nbsp;{'</'}</span><span className='tag'>div</span><span className='brace'>{'>'}</span>
          <br />
          <span className='parenthesis'>)</span><span className='operator'>;</span>
          <br />
          <span className='brace'>{'};'}</span>
        </code>
      </pre>
      <div className='me'>
         
        </div>
    </div>
    </div>
  )
}

export default About