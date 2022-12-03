import React from 'react'
import {Link} from 'react-router-dom'
import {FaUserAlt} from 'react-icons/fa'
import {BsShieldFillCheck,BsQuestionLg} from 'react-icons/bs'

const LinksSmallScreen = ({setToggleMenu}) => {
  return (
    <>
        <Link to='/login' onClick={()=>setToggleMenu(false)}>
            <p>Se connecter</p>
            <FaUserAlt />
        </Link>
        <Link to='/login' onClick={()=>setToggleMenu(false)}>
            <p>Accès professionnel</p>
            <BsShieldFillCheck />
        </Link>
        <Link to='/login' onClick={()=>setToggleMenu(false)}>
            <p>Besoin d'aide?</p>
            <BsQuestionLg />
        </Link>
    </>
  )
}

export default LinksSmallScreen