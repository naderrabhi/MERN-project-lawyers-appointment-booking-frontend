import React from 'react'
import {FaFacebook,FaTwitterSquare,FaInstagramSquare} from 'react-icons/fa'

const LawyersDetailsInfo = () => {
  return (
    <div className='lawyerDetailsInfo'>
        <div className='lawyerDetailsInfo--img'>
            <img src="/test.jpg" alt="" />
            <p>FirstName LastName</p>
            <p>Specialty Specialty</p>
        </div>
        <div className='lawyerDetailsInfo--bio'>
            <p>Bio Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic accusamus </p>
            <div className="lawyerDetailsInfo--social">
                <a href="/"><FaFacebook /></a>
                <a href="/"><FaTwitterSquare /></a>
                <a href="/"><FaInstagramSquare /></a>
            </div>
        </div>
    </div>
  )
}

export default LawyersDetailsInfo