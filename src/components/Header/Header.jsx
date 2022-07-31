import React from 'react'
import './Header.css'
import CTA from "./CTA"
import ME from '../../assets-portfolio/IMG_4205.JPG'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="container header__intro">
      <h5>Hello I am</h5>
      <h1>Tori Hendricks</h1>
      <h5 className="text-light">Fullstack Developer, Data Security</h5>
      </div>
      <CTA/>
      <HeaderSocials/>

      <div className="me">
        <img src={ME} alt="me" />
      </div>

      <a href="#contact" className='scrol__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header