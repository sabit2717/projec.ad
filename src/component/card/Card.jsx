import React from "react";
import { Link } from "react-router-dom";
import Api from "../../api/Api";

import css from "./Card.module.css";

function Card(props) {
  const onDelete = () => {
    const res = window.confirm("Удалить");
    if (res) {
      Api.deleteProjec(props.id).finally(() => {
        window.location.reload();
      });
    }
  };

  return (
    <div className={css.wrapper}>
      <div className={css.imagewrapper}>
        <img
          src={
            props.image ||
            "https://www.alfasolare.ru/a_solar_restyle/wp-content/themes/consultix/images/no-image-found-360x260.png"
          }
          alt="img"
        />
      </div>
      <div className={css.footer}>
        <div className={css.title}>{props.title}</div>
        <div>{props.price}$</div>
        {props.isAdmin ? (
          <button onClick={onDelete} className={css.btn}>
            Удалить
          </button>
        ) : (
          <Link to={"/product/" + props.id}>
            <button className={css.btn}>Подробней</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Card;
