import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./login.css";

const Login = () => {
  const [data, setData] = useState({});
  return (
    <div className="login--page section__padding">
      <h3>Connectez-vous</h3>
      <div className="login--barre" />
      <form className="login--page_form">
        <div className="login--page_form-email">
          <label htmlFor="email">identifiant</label>
          <input
            id="email"
            name="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder="Email"
            type="email"
            className="input--custom"
          />
        </div>
        <div className="login--page_form-password">
          <label htmlFor="password">mot de passe</label>
          <input
            id="password"
            name="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
            placeholder="Password"
            type="password"
            className="input--custom"
          />
          <a href="/">mot de passe oublié?</a>
        </div>
        <div className="login--page_form-btn"><button className="btn--costum btn--costum_hover">se connecter</button></div>
      </form>
      <div className="login--page_register">
        <p>Pas encore de compte chez nous?</p>
        <Link to="/enregistrer">
          <button className="btn--costum btn--costum_hover">
            creer un compte
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
