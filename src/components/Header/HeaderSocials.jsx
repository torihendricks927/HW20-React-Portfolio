import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/victoria-hendricks-665772a3/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/torihendricks927" target="_blank"><BsGithub/></a>

    </div>
  )
}

export default HeaderSocials