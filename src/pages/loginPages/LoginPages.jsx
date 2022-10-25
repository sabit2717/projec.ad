import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../component/title/Title";
import css from "./LoginPages.module.css";

function LoginPages() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [logError, setLogError] = useState('')

  const naviget = useNavigate()

  const submit = (e) => {
    e.preventDefault();
    if(login === 'admin' && password === 'admin') {
      naviget('/dashboard')
    }else{
      setLogError(<h4 className={css.h1Error}>Логин или пароль был введен не правельно</h4>)
    }  
    
  };
  const loginChange = (e) => {
    setLogin(e.target.value);
    setLogError('')
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
    setLogError('')
  };

  return (
    <div className="page">
      <Title position="center">Войти</Title>
      <form className={css.form} onSubmit={submit}>
        <input
          className={css.input}
          value={login}
          onChange={loginChange}
          type="text"
          placeholder="Login"
        />
        <input
          className={css.input}
          value={password}
          onChange={passwordChange}
          type="password"
          placeholder="Password"
        />
        <button className={css.button}>Войти</button>
        <div>{logError}</div>
      </form>
    </div>
  );
}

export default LoginPages;
