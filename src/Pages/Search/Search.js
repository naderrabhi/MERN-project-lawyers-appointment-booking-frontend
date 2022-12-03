import React from 'react'
import {FaSearch} from 'react-icons/fa'

import './search.css'

const Search = () => {
  return (
    <div className='search--page section__padding'>
        <p>trouvez votre <span>avocat</span></p>
        <div className='search--page_input'>
            <input className='form-control' type="text" placeholder='Nom, spécialté, ville....' />
            <button><FaSearch /></button>
        </div>
    </div>
  )
}

export default Search