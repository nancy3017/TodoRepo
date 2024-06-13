import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import mailbox from '../../images/mailbox.png'

function Footer() {
  return (
    <div className='footer'>
      <footer>
        <NavLink to="https://mail.google.com/mail/u/0/#inbox"><h3>Contact Us</h3>
        <img src={mailbox} alt="img"></img></NavLink>
      </footer>
    </div>
  )
}

export default Footer
