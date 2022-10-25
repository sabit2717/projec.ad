import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ErrorBlog from "../../component/errorBlog/ErrorBlog";
import Loader from "../../component/loader/Loader";
import Title from "../../component/title/Title";
import css from "./ProductPages.module.css";
import { Carousel } from 'react-responsive-carousel';
import { baseUrl } from '../../constanta'



function ProductPages() {
  const [error, setError] = useState();
  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();


const imgArr = [
  'https://kartinkin.net/pics/uploads/posts/2022-08/thumbs/1660502253_43-kartinkin-net-p-nyu-york-nochyu-krasivo-foto-57.jpg',
  'https://tournavigator.pro/%D1%84%D0%BE%D1%82%D0%BE/other/1012/1003/1466332300.jpg',
  'https://planetofhotels.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/2020-11/Las-Vegas.jpg',
  'https://s1.1zoom.ru/big0/306/387847-svetik.jpg',
]



  useEffect(() => {
    fetch(baseUrl + params.id)
      .finally(() => {
        setIsLoading(false);
      })
      .then((res) => {
        if (!res.ok) {
          setError("error");
        }
        return res.json();
      })
      .then((data) => {
        setDetail(data);
      });
  }, [params.id]);

  if (isLoading || !detail) return <Loader />;
  if (error) return <ErrorBlog text={"Error"}/>
  return (
    <div className="page">
      <div className={css.wrapper}>
        <div>
          <Carousel>
            <img className={css.img} src={detail.image} alt={detail.title} />
            {
              imgArr.map((item) => {
                return <img className={css.img} src={item} alt="" />
              })
            }
          </Carousel>
          
        </div>
        <div className={css.infoWrapper}>
          <Title>{detail.title}</Title>
          <Title>Цена: {detail.price}$</Title>
          <div className={css.infoText}>
            Президентская кампания Бориса Ельцина на выборах 1996 года началась
            де-юре 15 февраля 1996 года, когда действовавший президент
            Российской Федерации объявил о своём решении баллотироваться на
            второй президентский срок. Несмотря на свой возраст ему было 65 лет
            на момент избрания, серьёзные проблемы со здоровьем и низкий
            предвыборный рейтинг, Ельцин решил принять участие в Президентская
            кампания Бориса Ельцина на выборах 1996 года началась де-юре 15
            февраля 1996 года, когда действовавший президент Российской
            Федерации объявил о своём решении баллотироваться
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPages;
