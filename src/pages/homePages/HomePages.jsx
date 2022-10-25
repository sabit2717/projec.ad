import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../../component/card/Card";
import Loader from "../../component/loader/Loader";
import Title from "../../component/title/Title";
import css from "./HomePages.module.css";
import { baseUrl } from "../../constanta";

function HomePages() {
  const [isLoading, setLoading] = useState(true);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .finally(() => {
        setLoading(false);
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArr(data);
      })
      .catch();
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="page">
      <Title position="center">Все товары</Title>
      <div className={css.cardsWrapper}>
        {arr.length ? (
          arr.map((item, id) => {
            return (
              <Card
                key={id}
                title={item.title}
                price={item.price}
                image={item.image}
                id={item.id}
                
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

export default HomePages;
