import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authSliceAction } from "../../redux/authSlice";
import css from "./Header.module.css";

function Header() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const onClickLogin = () => {
    dispatch( authSliceAction.logout() );
  };

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
        {isAuth ? (
          <div>
            <Link to="/dashboard">Кабинет</Link>
            <span onClick={onClickLogin} className={css.span}>
              Выйти
            </span>
          </div>
        ) : (
          <Link to="/login">Войти</Link>
        )}
      </div>
    </header>
  );
}

export default Header;
