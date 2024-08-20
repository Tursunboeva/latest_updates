import React from 'react'
import svg from '../Images/svg.svg'
import "../components/Footer.css"
const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="footer_wrapper">
         <b> <a  className='coming' href="">Thanks for <span>coming!</span></a></b>
          <b><a href="">gblog@gmail.com</a></b>
          <a href=""><img src={svg} alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer