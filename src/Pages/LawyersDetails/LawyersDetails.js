import React from 'react'
import LawyersDetailsBooking from '../../Components/LawyersDetailsBooking'
import LawyersDetailsInfo from '../../Components/LawyersDetailsInfo'

import './lawyersdetails.css'

const LawyersDetails = () => {
  return (
    <div className='lawyerDetails--page section__padding'>
        <LawyersDetailsInfo />
        <LawyersDetailsBooking />
    </div>
  )
}

export default LawyersDetails