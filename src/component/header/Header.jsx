import React from "react";
import { Link } from "react-router-dom";
import css from "./Header.module.css";
function Header() {
  return (
    <header className={css.wrapper}>
      <div className={css.logo}>
        <Link className={css.logoRolls} to="/">
        <span>Т</span>ов<span>А</span>рк<span>А</span>
        
        </Link>
      </div>
      <div className={css.header}>
        <Link to="/contact">Котакты</Link>
        <Link to="/me">О нас</Link>
        <Link to="/login">Войти</Link>
      </div>
    </header>
  );
}

export default Header;
