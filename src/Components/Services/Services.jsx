import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <section id='services'>
      <div className="main-text">
        <span>What I will do for you</span>
        <h2>My Services</h2>
      </div>

      <div className="sectionServices">
        <div className="serviceBox">
          <div className="serviceIcon">
            icon
          </div>
          <h3>Flyer Designer</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quaerat?</p>
          <div className="btn serviceBtn">
            <button className=''>Read More</button>
          </div>
        </div>
      </div>
      <div className="sectionServices">
        <div className="serviceBox">
          icon
          <h3>Flyer Designer</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quaerat?</p>
          <div className="btn serviceBtn">
            <button className=''>Read More</button>
          </div>
        </div>
      </div>
      <div className="sectionServices">
        <div className="serviceBox">
          icon
          <h3>Flyer Designer</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quaerat?</p>
          <div className="btn serviceBtn">
            <button className=''>Read More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services