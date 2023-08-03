import React, { useState } from "react";
import styles from "./Product.module.scss";
import product_img from "../../assets/butcher.jpg";
import { Icons } from "../../assets/Icons";
import { Toaster } from "../Toaster/Toaster";
import { useCart } from "../../context/CartContext";

export const Product = ({ product }) => {
  const isOnSale = product.sale !== undefined;
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    dispatch({ type: "ADD_TO_CART" });
  };

  return (
    <article className={styles.product}>
      <div>
        <img src={product_img} alt="Product Image" />
      </div>
      <h4 className={styles.product__title}>{product.name}</h4>
      <p className={styles.product__description}>{product.description}</p>
      {isOnSale ? (
        <div className={styles.product__sale}>
          <span className={`${styles.product__sale_price}`}>
            ${product.sale}
          </span>{" "}
          <span className={styles.product__original_price}>
            ${product.price}
          </span>
        </div>
      ) : (
        <div className={`${styles.product__price}`}>${product.price}</div>
      )}{" "}
      <div className={styles.product__rating}>
        {Array.from({ length: 5 }, (_, index) =>
          index < product.rating ? (
            <Icons.AiFillStar key={index} />
          ) : (
            <Icons.AiOutlineStar key={index} />
          )
        )}
      </div>
      <button className="btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
      {isAddedToCart && <Toaster>Product added to cart</Toaster>}
    </article>
  );
};
