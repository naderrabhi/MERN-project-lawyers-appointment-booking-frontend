import React from 'react'
import {Link} from 'react-router-dom'
import {FaUserAlt} from 'react-icons/fa'
import {BsShieldFillCheck,BsQuestionLg} from 'react-icons/bs'

const Links = () => {
  return (
    <>
        <Link to='/connecter'>
            <p>Se connecter</p>
            <FaUserAlt />
        </Link>
        <Link to='/connecter'>
            <p>Accès professionnel</p>
            <BsShieldFillCheck />
        </Link>
        <Link to='/connecter'>
            <p>Besoin d'aide?</p>
            <BsQuestionLg />
        </Link>
    </>
  )
}

export default Links