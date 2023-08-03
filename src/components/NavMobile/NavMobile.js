import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../assets/Icons";

import styles from "./NavMobile.module.scss";

export const NavMobile = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  useEffect(() => {
    if (hamburgerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [hamburgerOpen]);

  return (
    <>
      <div className={styles.hamburger}>
        <Icons.GiHamburgerMenu onClick={() => setHamburgerOpen(true)} />
      </div>
      {hamburgerOpen && (
        <nav className={styles.nav}>
          <Icons.AiOutlineClose
            className={styles.close_icon}
            onClick={() => setHamburgerOpen(false)}
          />
          <ul className={styles.nav__list}>
            <li className={styles.nav__list__item}>
              <a
                className={styles.nav__list__category}
                href="#"
                style={{ pointerEvents: "none" }}
              >
                Women
              </a>
              <div className={styles.nav_subcategories}>
                <ul>
                  <li>
                    <Link
                      onClick={() => setHamburgerOpen(false)}
                      to="/category/women/t-shirt"
                    >
                      T-shirts
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setHamburgerOpen(false)}
                      to="/category/women/shirts&blouses"
                    >
                      Shirts & Blouses
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setHamburgerOpen(false)}
                      to="/category/women/dresses"
                    >
                      Dresses
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setHamburgerOpen(false)}
                      to="/category/women/trousers"
                    >
                      Trousers
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setHamburgerOpen(false)}
                      to="/category/women/accessories"
                    >
                      Accessories
                    </Link>
                  </li>
                </ul>
              </div>{" "}
            </li>
            <li className={styles.nav__list__item}>
              <a
                className={styles.nav__list__category}
                href="#"
                style={{ pointerEvents: "none" }}
              >
                Men
              </a>{" "}
              <div className={styles.nav__subcategories}>
                {" "}
                <ul>
                  <li>
                    <Link
                      onClick={() => setHamburgerOpen(false)}
                      to="/category/men/t-shirt"
                    >
                      T-shirts
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setHamburgerOpen(false)}
                      to="/category/men/shirts"
                    >
                      Shirts
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setHamburgerOpen(false)}
                      to="/category/men/trousers"
                    >
                      Trousers
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setHamburgerOpen(false)}
                      to="/category/men/jeans"
                    >
                      Jeans
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setHamburgerOpen(false)}
                      to="/category/men/accessories"
                    >
                      Accessories
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
