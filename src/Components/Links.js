import React from 'react'
import {Link} from 'react-router-dom'
import {FaUserAlt} from 'react-icons/fa'
import {BsShieldFillCheck,BsQuestionLg} from 'react-icons/bs'

const Links = () => {
  return (
    <>
        <Link to='/login'>
            <p>Se connecter</p>
            <FaUserAlt />
        </Link>
        <Link to='/login'>
            <p>Accès professionnel</p>
            <BsShieldFillCheck />
        </Link>
        <Link to='/login'>
            <p>Besoin d'aide?</p>
            <BsQuestionLg />
        </Link>
    </>
  )
}

export default Links