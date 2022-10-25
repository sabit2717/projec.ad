import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../component/input/Input";
import Title from "../../component/title/Title";

import { toast } from "react-toastify";
import Api from "../../api/Api";

function CreateAd() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [isSending, setSending] = useState(false);
  const naviget = useNavigate();
  const titleChenge = (e) => {
    setTitle(e.target.value);
  };
  const priceChenge = (e) => {
    setPrice(e.target.value);
  };
  const infoChenge = (e) => {
    setText(e.target.value);
  };
  const photoChenge = (e) => {
    setImage(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    setSending(true);
   
    const data = {
      title: title,
      price: price,
      image: image,
      text: text,
    };
    Api.postProjec(data).then((res) => {
      if (res.status === 201) {
        toast.success("Товар успешно добавлен", {
          theme: "colored",
        });
        naviget("/dashboard");
      } else {
        toast.error("Error", {
          theme: "colored",
        });
        setSending(false);
      }
    });

    setImage("");
    setText("");
    setPrice("");
    setTitle("");
  };

  return (
    <div className="page">
      <Title position="center">Создать объявление</Title>
      <form onSubmit={submit}>
        <Input
          value={title}
          onChange={titleChenge}
          title="Название"
          placeholder="Название"
          type="text"
          required
        />
        <Input
          value={price}
          onChange={priceChenge}
          title="Цена"
          placeholder="Цена"
          type="number"
          required
        />
        <Input
          value={text}
          onChange={infoChenge}
          title="Описание"
          placeholder="Описание"
          type="text"
          required
        />
        <Input
          value={image}
          onChange={photoChenge}
          title="Фото"
          placeholder="Фото"
          type="text"
          required
        />

        <button disabled={isSending} className="btn">
          Создать
        </button>
      </form>
    </div>
  );
}

export default CreateAd;
