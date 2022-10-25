import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "../../component/card/Card";
import Loader from "../../component/loader/Loader";
import Title from "../../component/title/Title";
import css from "./HomePages.module.css";
import { baseUrl } from "../../constanta";
import { housesSliceAction } from "../../redux/housesSlice";

function HomePages() {
  const { isLoading, data } = useSelector((state) => state.houses);
  const dispatch = useDispatch()
  useEffect(() => {
    fetch(baseUrl)
      .finally(() => {})
      .then((res) => {
        
        return res.json();
      })
      .then((data) => {
        dispatch(housesSliceAction.setData(data));
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
        {data.length ? (
          data.map((item, id) => {
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
