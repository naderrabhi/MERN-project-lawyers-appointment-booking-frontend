import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./login.css";

const Login = () => {
  const [data, setData] = useState({});
  return (
    <div className="login--page section__padding">
      <h3>Connectez-vous</h3>
      <hr />
      <form>
        <div className="login--page_form-email">
          <label htmlFor="email">identifiant</label>
          <input
            id="email"
            name="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder="Email"
            type="email"
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
          />
          <a href="/">mot de passe oublié?</a>
        </div>
        <button className="btn--costum btn--costum_hover">se connecter</button>
      </form>
      <div className="login--page_register">
        <p>pas encore de compte chez nous?</p>
        <Link to="register">
          <button className="btn--costum btn--costum_hover">
            creer un compte
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
