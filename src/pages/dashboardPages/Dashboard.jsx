import css from "../homePages/HomePages.module.css";
import React from "react";
import Card from "../../component/card/Card";
import Loader from "../../component/loader/Loader";
import Title from "../../component/title/Title";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Dashboard() {
  const { isLoading, data } = useSelector((state) => state.houses);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="page">
      <Title position="center">Мои товары</Title>
      <Link className="btn" to="/create-ad">
        Добавить товар
      </Link>
      <div className={css.cardsWrapper}>
        {data.length ? (
          data.map((item, id) => {
            return (
              <Card
                key={id}
                title={item.title}
                price={item.price}
                image={item.image}
                id={item.id}
                isAdmin={true}
              />
            );
          })
        ) : (
          <h1>Нет товара</h1>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
