import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

export const Nav = () => {
  const [womenDropdown, setWomenDropdown] = useState(false);
  const [menDropdown, setMenDropdown] = useState(false);

  console.log(womenDropdown);
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__list__item}>
          <a href="#" style={{ pointerEvents: "none" }}>
            Women
          </a>

          <div
            className={`${styles.nav_dropdown} ${styles.nav_dropdown__women}`}
          >
            <ul>
              <li className={styles.nav_dropdown__item}>
                <a href="#" style={{ pointerEvents: "none" }}>
                  Select category
                </a>
              </li>
              <li className={styles.nav_dropdown__item}>
                <Link to="/category/women/t-shirt">T-shirts</Link>
              </li>
              <li className={styles.nav_dropdown__item}>
                <Link to="/category/women/shirts&blouses">
                  Shirts & Blouses
                </Link>
              </li>
              <li className={styles.nav_dropdown__item}>
                <Link to="/category/women/dresses">Dresses</Link>
              </li>
              <li className={styles.nav_dropdown__item}>
                <Link to="/category/women/trousers">Trousers</Link>
              </li>
              <li className={styles.nav_dropdown__item}>
                <Link to="/category/women/accessories">Accessories</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className={styles.nav__list__item}>
          <a href="#" style={{ pointerEvents: "none" }}>
            Men
          </a>{" "}
          <div
            className={`${styles.nav_dropdown} ${styles.nav_dropdown__women}`}
          >
            {" "}
            <ul>
              <li className={styles.nav_dropdown__item}>
                <a href="#" style={{ pointerEvents: "none" }}>
                  Select category
                </a>
              </li>
              <li className={styles.nav_dropdown__item}>
                <Link to="/category/men/t-shirt">T-shirts</Link>
              </li>
              <li className={styles.nav_dropdown__item}>
                <Link to="/category/men/shirts">Shirts</Link>
              </li>
              <li className={styles.nav_dropdown__item}>
                <Link to="/category/men/trousers">Trousers</Link>
              </li>
              <li className={styles.nav_dropdown__item}>
                <Link to="/category/men/jeans">Jeans</Link>
              </li>
              <li className={styles.nav_dropdown__item}>
                <Link to="/category/men/accessories">Accessories</Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};
