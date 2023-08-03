import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { Nav } from "../Nav/Nav";
import { NavMobile } from "../NavMobile/NavMobile";
import { Icons } from "../../assets/Icons";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export const Header = () => {
  const { cartCount } = useCart();

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.header__top}`}>
          <div className={styles.header__top__logo}>
            <Link to="/category/women/t-shirt">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <h1 className={styles.header__top__title}>
            <Link to="/category/women/t-shirt">Bucherer</Link>
          </h1>
          <div className={styles.header__top__auth}>
            <Icons.CgProfile />
          </div>
        </div>
        <div className="line"></div>
        <div className={`container ${styles.header__bottom}`}>
          <div className={styles.header__bottom__search_bar}>
            <Icons.AiOutlineSearch />
          </div>
          <Nav />
          <div className={styles.header__bottom__right_section}>
            <div className={styles.header__bottom__right_section__cart}>
              <a href="">
                Cart(
                <span className={styles.cartCount}>{cartCount}</span>
                )
                <Icons.AiOutlineShoppingCart />
              </a>
            </div>
          </div>
        </div>
        <div className="line"></div>
      </header>
      <header className={`container ${styles.header__mobile}`}>
        <div className={styles.header__mobile__left}>
          <NavMobile />
          <div className={styles.header__mobile__logo}>
            <Link to="/category/women/t-shirt">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className={styles.header__mobile__right}>
          <div className={styles.header__mobile__cart}>
            <a href="">
              Cart(
              <span className={styles.cartCount}>{cartCount}</span>
              )
              <Icons.AiOutlineShoppingCart />
            </a>
          </div>
          <div className={styles.header__mobile__auth}>
            <Icons.CgProfile />
          </div>
        </div>
      </header>
    </>
  );
};
