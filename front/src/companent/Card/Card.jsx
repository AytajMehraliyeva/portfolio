import React from 'react'
import './Card.scss'

const Card = () => {
  return (
  <>
  <div className='cards'>

    <a href="https://practise5-aytaj.vercel.app/" alt="Mythrill" target="_blank">
   
    <div className="card"> 
      <p>Wine</p>
      <div className="wrapper">
        <img src="https://i.pinimg.com/564x/25/4b/0f/254b0f3880aaf47b5482a655f5c400e4.jpg" className="cover-image" />
      </div>
      
    <img src='https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-wine-clinking-glass-png-file-png-image_9427013.png' className="character" />
    </div>
  </a>
  
  
  </div>
  </>
  )
}

export default Card