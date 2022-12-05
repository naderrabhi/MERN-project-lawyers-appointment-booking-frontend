import React from 'react'
import LawyerCard from '../../Components/LawyerCard'
import Search from '../Search/Search'

import './lawyers.css'

const Lawyers = () => {
  return (
    <div className='lawyers--page section__padding'>
        <Search />
        <div className="lawyers--page_lists">
            <LawyerCard />
        </div>
    </div>
  )
}

export default Lawyers