import React from 'react'
import CallToAction from './CallToAction'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="container hContainer">
        <h5>Hello I'm</h5>
        <h1>Favoured Maxwell</h1>
        <h5 className='text-light'>Frontend Engineer</h5>
        <CallToAction />
      </div>
    </header>
  )
}

export default Header