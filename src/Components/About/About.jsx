import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id='about flex justify-content-center align-center'>
      <div className="aboutMe text-center relative">
        <div className="info-about1">
          <span>3+</span>
          <p>years of flyer designing experience</p>
        </div>
        <div className="info-about2">
        <span>100+</span>
        <p>projects completed</p>
      </div>
      <div className="info-about3">
        <span>2+</span>
        <p>years of Web development Experience</p>
      </div>
      <div className="info-about4">
        <span>3+</span>
        <p>months of react development Experience</p>
      </div>
   </div>
      
    <div className="aboutContent">
          <span>INTRODUCTION</span>
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda perspiciatis ullam dolores pariatur libero quae quo delectus tempore neque voluptatum.</p>

          <div className="btn-buttons">
            <button className='btn' href='#'>
              Read more!
            </button>
          </div>
      </div>
      



    </section>
  )
}

export default About