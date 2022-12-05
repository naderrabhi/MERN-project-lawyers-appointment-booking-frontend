import React from 'react'

const RegisterAsAvocat = () => {
  return (
    <div className='register--page_avocat'>
        <h3>Espace Avocat</h3>
        <div className="login--barre login--barre_register" />
        <form className='register--page_avocat-form'>
        <div className="register--page_avocat-firtName">
          <label htmlFor="firstName">Prénom</label>
          <input id="firstName" name="firstName" placeholder="Prénom" type="text" className="input--custom" />
        </div>
        <div className="register--page_avocat-nom">
          <label htmlFor="lastName">Nom</label>
          <input id="lastName" name="lastName" placeholder="Nom" type="text" className="input--custom" />
        </div>
        <div className="register--page_avocat-specialty">
          <label htmlFor="specialty">Specialité</label>
          <input id="specialty" name="specialty" placeholder="Specialité" type="text" className="input--custom" />
        </div>
        <div className="register--page_avocat-email">
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" placeholder="E-mail" type="email" className="input--custom" />
        </div>
        <div className="register--page_avocat-password">
          <label htmlFor="password">Mot de passe</label>
          <input id="password" name="password" placeholder="Mot de passe" type="password" className="input--custom" />
        </div>
        <div className="register--page_avocat-confirmPassword">
          <label htmlFor="passwordConfirm">Confirmer votre mot de passe</label>
          <input id="passwordConfirm" name="passwordConfirm" placeholder="Confirmer votre mot de passe" type="password" className="input--custom" />
        </div>
        <div className="register--page_avocat-btn">
        <button className="btn--costum btn--costum_hover">
            enregistrer
        </button>
        </div>
        </form>
    </div>
  )
}

export default RegisterAsAvocat