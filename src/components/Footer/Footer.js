import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom"; // You can use Link for navigation

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.links}>
          <Link to="/terms-and-conditions">T&C</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};
