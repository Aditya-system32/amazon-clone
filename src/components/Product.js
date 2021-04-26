import { ContactsOutlined } from "@material-ui/icons";
import React from "react";
import { useStateValue } from "../provider/StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "Add_To_Basket",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => {
              return <p key={index}>⭐</p>;
            })}
        </div>
      </div>
      <img className="product__images" src={image} alt="" />
      <button className="product__button" onClick={addToBasket}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
